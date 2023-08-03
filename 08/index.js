const num = [7, 25, 14, 36, 5, 8, 11, 20, 10]
var pares = []
var impares = []
for (i = 0; i < num.length; i++){
    if (num[i] % 2 === 0){
        pares.push(num[i])
    } else {
        impares.push(num[i])
    }
}

console.log(`numeros pares: ${pares}`)
console.log(`numeros impares; ${impares}`)

