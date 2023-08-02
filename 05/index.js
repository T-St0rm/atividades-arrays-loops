const num = [7, 25, 14, 36, 5, 8, 11, 20, 10]
var soma = 0

for (i = 0; i < num.length; i++){
    if (num[i] % 2 === 0){
        soma += num[i]
    }
}

console.log(soma)
