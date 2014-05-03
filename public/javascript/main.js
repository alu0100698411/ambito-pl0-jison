$(document).ready(function() {
  $('#parse').click(function() {
    try {
      editor = $(".CodeMirror")[0].CodeMirror
      var result = pl0.parse(editor.getValue());
      $('#output').html(JSON.stringify(result,undefined,2));
      $('#ambit').html(JSON.stringify(scopeAnalysis(result),undefined,2));
      $( '#salida').removeClass( "divdoble hidden" ).addClass( "divdoble unhidden" );
    } catch (e) {
      $( '#salida').removeClass( "divdoble hidden" ).addClass( "divdoble unhidden" );
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


function nodeAnalysis(node){
	console.log("ENTRA A NODEANALYSIS"); 
	
	if (!node) return;

	switch (node.type){
		case "PROCEDURE":
			console.log("ENTRA A PROCEDURE"); 
			var symbolTable = {name: node.value, father: symbolTableActual, consts: {}, vars: {}, procs: {}};

			if(node.hasOwnProperty("arguments") && node.arguments !== undefined){
				for(var i in node.arguments){
					symbolTable.vars[node.arguments[i].value]= node.arguments[i].value;
				}                      
			}
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
			if(node.block.hasOwnProperty("statements") && node.block.statements !== undefined){
							console.log("EL PROCEDURE TIENE STATEMENTS"); 
							nodeAnalysis(node.block.statements);
			}	
	
			break;	
		case "ASSIGMENT":
			console.log("ENTRA A ASIGGMENT"); 
			//COMPROBAR QUE LA ID IZQUIERDA NO ES UNA CONSTANTE Y ESTA DEFINIDO
			if (estaDefinidoConstante(node.left))
				throw("Identifier \""+ node.left + "\" is a constant, and u can't assing a value");	
			if (!estaDefinido(node.left))
				throw("Identifier \""+ node.left + "\" has not being declared and it's being used");	
			nodeAnalysis(node.right);
			break;
		case "CALL":
			console.log("ENTRA A CALL"); 
			//COMPROBAR QUE LA FUNCION EXISTE Y TIENE EL NUMERO DE ARGUMENTOS CORRECTOS
			break;
		case "BEGIN":
			console.log("ENTRA A begin"); 
			for (var i in node.statements){
				nodeAnalysis(node.statements[i]);
			}
			break;
		case "IF":
			console.log("ENTRA A IF"); 
			nodeAnalysis(node.condition);
			for (var i in node.statements){
				nodeAnalysis(node.statements[i]);
			}
			break;
		case "IFELSE":
			console.log("ENTRA A IFELSE"); 
			nodeAnalysis(node.condition);
			for (var i in node.statements){
				nodeAnalysis(node.statements[i]);
			}
			for (var i in node.elsestatements){
				nodeAnalysis(node.elsestatements[i]);
			}
			break;
		case "ODD":
			console.log("ENTRA A ODD"); 
			nodeAnalysis(node.expresion);
			break;
		case "==":
		case "!=":
		case "<=":
		case "<":
		case ">":
		case ">=":
		case "+":
		case "*":
		case "/":
			console.log("ENTRA A COMPARISON"); 
			nodeAnalysis(node.left);
			nodeAnalysis(node.right);
			break;
		case "-":
			console.log("ENTRA A -"); 
			if(node.value){
				nodeAnalysis(node.value);
			}else{
				nodeAnalysis(node.left);
				nodeAnalysis(node.right);
			}
			break;	
		case "NUMBER":
			console.log("ENTRA A NUMBER"); 
			break;
		case "ID":
			console.log("ENTRA A ID"); 
			//COMPROBAR QUE EL ID ESTA DEFINIDO
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

	if(tree.hasOwnProperty("statements") && tree.statements !== undefined){
	console.log("EL BLOQUE PRINCIPAL TIENE STATEMENTS"); 
					nodeAnalysis(tree.statements);
	}

	return tree;
}

function estaDefinido(id){
	if(estaDefinidoVariable(id) || estaDefinidoConstante(id)){
		return true;
	}
	return false;
}
 
function estaDefinidoVariable(id){
        var symbolTableAux = symbolTableActual;
        do{
                var contenido = symbolTableAux.vars[id];
                if(contenido === undefined){
                   symbolTableAux = symbolTableAux.father;
                }else{
                   return true;        
                }
        }while(symbolTableAux != null);
        return false;
}

 
function estaDefinidoConstante(id){
        var symbolTableAux = symbolTableActual;
        do{
                var contenido = symbolTableAux.consts[id];
                if(contenido === undefined){
                   symbolTableAux = symbolTableAux.father;
                }else{
                   return true;        
                }
        }while(symbolTableAux != null);
        return false;
}

function estaDefinidoProcedure(id){
        var symbolTableAux = symbolTableActual;
        do{
                var contenido = symbolTableAux.procs[id];
                if(contenido === undefined){
                   symbolTableAux = symbolTableAux.father;
                }else{
                   return true;        
                }
        }while(symbolTableAux != null);
        return false;
}
