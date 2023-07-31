function myfunction(){
    let a=document.getElementById('text').value;
    let display = document.getElementById('display')
    let b=a.split('')
    let value = ''
    for(let i=0;i<b.length;i++){
        let num1=parseInt(b[i])
        let num2=parseInt(b[i + 1])
        if(num1 % 2 === 0 && num2 % 2 === 0){
            let str1 = num1.toString()
            value = value + str1 + '-'
        }else{
            let str = num1.toString()
            value = value + str
        }
    }
    display.innerHTML = value
}