
const number1=document.getElementById("number1")
const number2=document.getElementById("number2")
const result=document.getElementById("result")
const plus=document.getElementById("plus")
const minus=document.getElementById("minus")
const mnozhena=document.getElementById("mnozhena")
const dilena=document.getElementById("dilena")
const submit=document.getElementById("submit")
let action="+"

plus.onclick=function(){
    action="+"
}
minus.onclick=function(){
    action="-"
}
mnozhena.onclick=function(){
    action="*"
}
dilena.onclick=function(){
    action="/"
}
function printResult(r){
    result.textContent=r
}
function obchislena(inp1, inp2, actionSymbol){
    const num1=Number(inp1.value)
    const num2=Number(inp2.value)
    if (actionSymbol==="+"){
        return num1+num2
    } else if (actionSymbol==="-") {
        return num1-num2
    } else if (actionSymbol==="*") {
        return num1*num2
    } else if (actionSymbol==="/") {
        if (num2!=0){
            return num1/num2
        } else {
            return "Error 0"
        }
    } 
}
submit.onclick=function(){
    printResult(obchislena(number1, number2, action))
}

