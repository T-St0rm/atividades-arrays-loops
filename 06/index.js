const num = [7, 25, 14, 36, 5, 8, 11, 20, 10]
var maior = num[0]

for (let i = 0; i < num.length; i++){
    if (num[i] > maior){
    maior = num[i]
    }
    
}

console.log(maior)
