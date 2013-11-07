/************************************
 * HelperFunctions.js
 * Jaime Alberto Jaramillo Zapata (jjaramillo@icloud.com)
 * Contiene funciones de uso general en las presentaciones
 *
 ************************************/

function AppendTextNode(text, targetElementId)
{
    var targetElement = document.getElementById(targetElementId);
    var content = document.createTextNode(text);
    var endOfLine = document.createElement('br');
    targetElement.appendChild(content);
    targetElement.appendChild(endOfLine);
}