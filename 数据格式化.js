let n = 125565115899;
console.log(n.toLocaleString());

const toLocal = (n) =>{  //逐个字符
    let result = '';
    let str = n+'';
    let count = 0;
    for(let i = str.length-1 ; i>=0 ; i--){
      count++;
      result =  str.charAt(i) + result;
      if(count == 3 && i != 0){
        count = 0;
        result = ',' + result; 
      } 
    }
    console.log(result);
    return result;
}
function toThousands(num) {  //字符串版本
    var num = (num || 0).toString(), result = '';
    while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
    }
    if (num) { result = num + result; }
    console.log(result);
    return result;
}
toLocal(n);
toThousands(n);