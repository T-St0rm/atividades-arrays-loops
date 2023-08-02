var num = [5, 12, 10, 20]
let indice = -1
for (let i = 0; i < num.length; i++){
    let valor = num[i]
    if(valor === 10){
        indice = i
        console.log(`valor ${valor}, indice ${indice}`)
        break
    }
}