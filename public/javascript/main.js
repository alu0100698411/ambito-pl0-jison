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

function scopeAnalysis(tree){

//CREO TABLA SIMBOLOS GENERAL
var symbolTable = {name: "raiz", father: null, consts: {}, vars: {}, procs: {}};
	//añadir procedimientos

symbolTable.consts["PENE"] = "PLANTA";


for (var i in tree.constantes){
	for(var j in i.value){
		symbolTable.consts[j.name] = j.value;	
	}
}
/*
for (var i in tree.variables){
	for(var j in i.value){
		symbolTable.vars[j.name] = j.name;	
	}
}
for (var i in tree.procedimientos){
	symbolTable.procs[i.value] = i.arguments.length;
}
*/

tree.sym_table = symbolTable;
return tree;
//LLAMA A ANALYSIS TREE PARA LOS HIJOS

}

  

