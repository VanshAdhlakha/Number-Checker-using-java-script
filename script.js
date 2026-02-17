function analyzeNumber(){
    const input = document.getElementById("numinput").value;
    if (input==""){
        alert("Enter correct value")
        return
    }
    let numn = Number(input);
    if (!Number.isInteger(numn)){
        alert("Enter Valid Integers only");
        return
    }

    if (isNaN(numn)){
        alert("Enter a Valid Input Value")
        return;
    }

    const num = Math.abs(numn)
    const str = num.toString();
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = 
    `
    <p>Prime:${isPrime(numn)}</p>
    <p>Palindrome:${Palindrome(str)}</p>
    <p>Perfect Number:${Perfect(num)}</p>
    <p>Total Digits: ${str.length}</p>
    <p>No of Odd Digits: ${oddDig(num)}</p>
    <p>No of Even Digits: ${evenDig(num)}</p>
    <p>Sum of Digits: ${sumn(str)}</p>


    
    `


}

function isPrime(n){
    if (n<=1){return ("No")
    }
    for (let i = 2;i<=Math.sqrt(n);i++){
        if (n%i==0){
            return "No"
        }
    }
    return "Yes"

}


function Palindrome(str){
return str === str.split("").reverse().join("")?"Yes":"No"
}

function Perfect(num){
    if (num <= 1) return "No";
    let s= 0
    for(let i = 1;i<=num/2;i++){
        if (num%i==0){
            s+=i
        }
    }
    return s===num?"Yes":"No"
}

function oddDig(n){
    let c =0
    while (n>0){
        let ld = n%10
        if(ld%2!=0){
            c+=1
        }
        n = Math.floor(n/10);
    }
    return c
}

function evenDig(n){
    let c =0
      if (n === 0) {
        c += 1;
      }
    while (n>0){
        let ld = n%10
        if(ld%2==0){
            c+=1
        }
        n = Math.floor(n/10)
    }
    return c
}



function sumn(arr){
    let sum = 0
    for (let dig of arr){
        sum+=parseInt(dig)
    }
    return sum
}