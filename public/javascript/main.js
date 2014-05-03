$(document).ready(function() {
  $('#parse').click(function() {
    try {
      editor = $(".CodeMirror")[0].CodeMirror
      var result = pl0.parse(editor.getValue());
      $('#output').html(JSON.stringify(result,undefined,2));
      $('#ambit').html(JSON.stringify(scopeAnalysis(result),undefined,2));
      $( '#salida').removeClass( "divdoble hidden" ).addClass( "divdoble unhidden" );
    } catch (e) {
      $('#output').html('<div class="error"><pre>\n' + String(e) + '\n</pre></div>');
    }
  });

  $("#examples").change(function(ev) {
    var f = ev.target.files[0]; 
    var r = new FileReader();
    r.onload = function(e) { 
      var contents = e.target.result;
      
      input.innerHTML = contents;
    }
    r.readAsText(f);
  });

});

var symbolTables = [];
var symbolTableActual;
var scope = 0;

function getScope(){
	return scope;
}

function makeNewScope(id) {
/*
   scope++;
   symbolTables[scope] = [];
   symbolTable = symbolTables[scope];
   return symbolTable;*/
}

function nodeAnalysis(node){
	if (!node) return;

	switch (node.type){
		case "PROCEDURE":
			node.symbolTable = {name: node.value, father: symbolTableActual, consts: {}, vars: {}, procs: {}};			
			break;	
	}
}


function scopeAnalysis(tree){
	//CREO TABLA SIMBOLOS GENERAL
	 var symbolTable = {name: "raiz", father: null, consts: {}, vars: {}, procs: {}};


	for (var i in tree.constantes.value){
		symbolTable.consts[tree.constantes.value[i].name] = tree.constantes.value[i].value;	
	}

	for (var i in tree.variables.value){
		symbolTable.vars[tree.variables.value[i].name] = tree.variables.value[i].name;	
	}

	for (var i in tree.procedimientos){
		symbolTable.procs[tree.procedimientos[i].value] = tree.procedimientos[i].arguments.length;	
	}
	
	tree.symbolTable = symbolTable;
	symbolTableActual = symbolTable;

	nodeAnalysis(tree);


	return tree;
}

  

