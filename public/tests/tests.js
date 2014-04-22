var assert = chai.assert;

suite('Pruebas para el parser', function(){
  test('Asociacion a izquierdas resta', function(){
	var input = "a = 3-2-1.";
	var resultado = pl0.parse(input);
	assert.equal(resultado.stat.type, "=");
	assert.equal(resultado.stat.right.left.left.value, "3");
	

  });

test('Asociacion a izquierdas division', function(){
	var input = "a = 3/2/1.";
	var resultado = pl0.parse(input);
	

  });

  test('If-else', function(){
	var input = "IF (a<3) THEN c = 2 ELSE c = 3.";
	var resultado = pl0.parse(input);
	assert.equal(resultado.stat.type, "IF");
	assert.equal(resultado.stat.then.left, "c");
	assert.equal(resultado.stat.else.left, "c");
	

  }); 
  




  test('While-Do', function(){
	var input = "WHILE (a == 1) DO b = b+1.";
	var resultado = pl0.parse(input);
	assert.equal(resultado.stat.type, "WHILE");
	

  });

});

suite('Pruebas para el paso de parmetros', function(){
  test('Funcion con parametros', function(){
	var input = "PROCEDURE funcion (variable);\na = 2;\nIF (a==2) THEN b = c.";
	var resultado = pl0.parse(input);
	assert.equal(resultado.procedimiento.type, "PROCEDURE");
	assert.equal(resultado.procedimiento.arguments.value, "variable");
  });
});


suite('Errores', function(){
  test('No poner punto al final', function(){
	  assert.throws(function() { pl0.parse("a = 1 + 1"); }, "Parse error on line 1:\na = 1 + 1\n---------^\nExpecting \'.\', \';\', \',\', \')\', \'END\', \'ELSE\', \'COMPARISON\', \'ADDSUBOP\', \'MULTDIVOP\', got \'EOF\'");

  });

  test('if sin then', function(){
	  assert.throws(function() { pl0.parse("if a == 1 call."); }, "Parse error on line 1:\nif a == 1 call.\n---^\nExpecting \'(\', got \'ID\'");

  });

  test('Error lexico', function(){
	assert.throws(function() { pl0.parse("if ??!?? .s"); }, "Lexical error on line 1. Unrecognized text.\nif ??!?? .s\n---^");
  });
});

