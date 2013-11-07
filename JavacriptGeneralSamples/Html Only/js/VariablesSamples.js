/// <reference path="HelperFunctions.js" />
/// <reference path="HelperFunctions.js" />
/************************************
 * VariablesSamples.js
 * Jaime Alberto Jaramillo Zapata (jjaramillo@icloud.com)
 * Contiene ejemplos relacionados con manejo de variables en javascript
 *
 ************************************/

function HowToDeclareAVariable(contentElementId) {
    // Variable myVariable declarada
    var myVariable;
    HasValue(myVariable, contentElementId);
    // Asignacion de valor a la variable myVariable
    myVariable = 'Hola, ahora tengo un valor asignado!';
    HasValue(myVariable, contentElementId);
}

function HasValue(variable, contentElementId) {
    if (variable) { AppendTextNode('la variable esta declarada y tiene un valor asignado, el valor es : ' + variable); }
    else { AppendTextNode('La variable esta declarada mas no tiene un valor asignado'); }
}

function TestDynamicVariableTyping(contentElementId) {
    var dynamicTypeVar;
    dynamicTypeVar = 9;
    GetVariableTypeName(dynamicTypeVar, contentElementId);
    dynamicTypeVar = new Date();
    GetVariableTypeName(dynamicTypeVar, contentElementId);
    dynamicTypeVar = 'Ahora soy un string';
    GetVariableTypeName(dynamicTypeVar, contentElementId);
    dynamicTypeVar = new Number('89.90');
    GetVariableTypeName(dynamicTypeVar);
    dynamicTypeVar = new Array();
    GetVariableTypeName(dynamicTypeVar, contentElementId);
}

function GetVariableTypeName(variable, contentElementId) {
    AppendTextNode(typeof variable, contentElementId);
}


function FunctionSample(parameter1, parameter2, function()
{
//cuerpo de lo que voy a hacer
}) {
    
     // Cuerpo de la funcion     
}

function NoParametersAndYet()
{
    if (arguments.length > 0) { console.log('Le pasaron ' + arguments.length + ' parametros a la funcion'); }
    else { console.log('La funcion no tiene parametros.');}
}

function ParemeterizedFunction(parameter) {
    // Desplegar una alerta con el valor asignado de parameter
    alert(parameter);
}

function MultipleParameterizedFunction(contentElementId, parameter1, parameter2, parameter3) {
    // Verificar si la variable contentElementId tiene existe o tiene valor asignado
    if (contentElementId) {
        if (parameter1) { AppendTextNode(parameter1, contentElementId); }
        if (parameter2) { AppendTextNode(parameter2, contentElementId); }
        if (parameter3) { AppendTextNode(parameter3, contentElementId); }
    }
    else { alert('Debe invocar / llamar esta funcion por lo menos con el parametro contentElementId'); }
}

function ValueReturnFunction(parameter1, parameter2)
{
    /* 
     * Suma el valor de parameter1 y parameter2 y lo
     * asigna en la variable returnValue
     */

    var returnValue = parameter1 + parameter2;    

    // Retorna el valor de returnValue;   
    return returnValue;
}

var AnotherFunctionDeclarationSample = function ()
{
    // Cuerpo de la funcion
}

var AnotherFunctionDeclarationWithParameters = function (parameter1, parameter2, parameter3)
{
    // Hacer algo con los parametros
}

function AnotherFunctionWithACallback(parameter1, parameter2, callbackFunction)
{
    // Sumo el valor de parameter1 y parameter2 y lo guardo en result
    var result = parameter1 + parameter2;
    callbackFunction(result);
}

function JustAnotherFunction(parameter)
{
    AppendTextNode('Invocaste la funcion JustAnotherFunction y le pasaste como parametro ' + parameter);
}

function LiteralSample(contentElementId)
{
    var IAmALiteral =
        {
            'PropiedadString' : 'Hola soy una cadena de caracteres',
            'PropiedadNumerica' : 2013,
            'PropiedadFecha': new Date(),
            'PropiedadBooleana': true ,
            'PropiedadFuncion' : function(){}
        }
    IAmALiteral.PropiedadFuncion();

    var IHaveMultipleLiterals =
        {
            'Literal1': {
                'PropiedadString': 'Hola soy una cadena de caracteres',
                'PropiedadNumerica': 2013
            },
            'Literal2': {
                
                'PropiedadFecha': new Date(),
                'PropiedadBooleana': true
            },            
            'PropiedadString': 'Hola soy una cadena de caracteres',
            'PropiedadNumerica': 2013,
            'PropiedadFecha': new Date(),
            'PropiedadBooleana': true,
            'PropiedadFuncion' : function(){}
        }
        
    //Accedo a la propiedad 'PropiedadBooleana' del literal 'Literal1'
    AppendTextNode(IAmALiteral.PropiedadBooleana, contentElementId);
    //Accedo a la propiedad 'PropiedadNumerica' de la propiedad 'Literal1' del literal IHaveMultipleLiterals
    AppendTextNode(IHaveMultipleLiterals.Literal1.PropiedadNumerica, contentElementId);

    while(true)
    {
        //codigo
    }

}