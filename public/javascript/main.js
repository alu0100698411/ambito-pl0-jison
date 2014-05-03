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
			var symbolTable = {name: node.value, father: symbolTableActual, consts: {}, vars: {}, procs: {}};
			if(node.block.hasOwnProperty("constantes") && node.block.constantes !== undefined){
				for (var i in node.block.constantes.value){
					symbolTable.consts[node.block.constantes.value[i].name] = node.block.constantes.value[i].value;	
				}
			delete node.block.constantes;
			}
			if(node.block.hasOwnProperty("variables") && node.block.variables !== undefined){
				for (var i in node.block.variables.value){
					symbolTable.vars[node.block.variables.value[i].name] = node.block.variables.value[i].name;	
				}
			delete node.block.variables;
			}
			if(node.block.hasOwnProperty("procedimientos") && node.block.procedimientos !== undefined){
				for (var i in node.block.procedimientos){
					symbolTable.procs[node.block.procedimientos[i].value] = node.block.procedimientos[i].arguments.length;	
				}
			}
			node.symbolTable = symbolTable;
			symbolTableActual = symbolTable;
			if(node.block.hasOwnProperty("procedimientos") && node.block.procedimientos !== undefined){
				for (var i in node.block.procedimientos){
					nodeAnalysis(node.block.procedimientos[i]);
				}
			}	

			//FALTA LLAMAR A ANALIIS PARA STATEMENNTS
				
			break;	
	}

}


function scopeAnalysis(tree){
	//CREO TABLA SIMBOLOS GENERAL
	 var symbolTable = {name: "raiz", father: null, consts: {}, vars: {}, procs: {}};

	if(tree.hasOwnProperty("constantes") && tree.constantes !== undefined){
		for (var i in tree.constantes.value){
			symbolTable.consts[tree.constantes.value[i].name] = tree.constantes.value[i].value;	
		}
	delete tree.constantes;
	}
	if(tree.hasOwnProperty("variables") && tree.variables !== undefined){
		for (var i in tree.variables.value){
			symbolTable.vars[tree.variables.value[i].name] = tree.variables.value[i].name;	
		}
	delete tree.variables;
	}
	if(tree.hasOwnProperty("procedimientos") && tree.procedimientos !== undefined ){
		for (var i in tree.procedimientos){
			symbolTable.procs[tree.procedimientos[i].value] = tree.procedimientos[i].arguments.length;	
		}
	}
	tree.symbolTable = symbolTable;
	symbolTableActual = symbolTable;
	
	
	if(tree.hasOwnProperty("procedimientos") && tree.procedimientos !== undefined){
		for (var i in tree.procedimientos){
			nodeAnalysis(tree.procedimientos[i]);
		}
	}
//	nodeAnalysis(tree.statements);


	return tree;
}

  

