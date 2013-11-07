/************************************
 * JavascriptGeneralSamples.js
 * Jaime Alberto Jaramillo Zapata (jjaramillo@icloud.com)
 * Contiene ejemplos sobre la sesion de generalidades de javascript
 *
 ************************************/
var IAmAGlobalVariable = 'Soy una variable Global';

function InterpretedFunction(contentDivId)
{
    console.log('Iniciando funcion');
    AppendTextNode('Iniciando funcion', contentDivId);
    console.log('El programa se ejecuta hasta el final');
    AppendTextNode('El programa se ejecuta hasta el final', contentDivId)
}

function GlobalVariable(contentDivId) {
    PrintVariableValue(IAmAGlobalVariable, contentDivId);
    //Error: IAmALocalVariable solo existe en el contexto de la funcion LocalVariable
    //PrintVariableValue(IAmALocalVariable, contentDivId);
}




function LocalVariable(contentDivId)
{
    var IAmALocalVariable = 'Soy una variable local';
    PrintVariableValue(IAmALocalVariable);
    PrintVariableValue(IAmAGlobalVariable);
}

function PrintVariableValue(variable, contentDivId)
{
    console.log(variable);
    AppendTextNode(variable, contentDivId);
}