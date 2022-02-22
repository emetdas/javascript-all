let id: number = 20
let developers: string[] = ['Emet','Jonas','Dev Ed']

developers.forEach((developer) =>{
    console.log(developer)
})
developers.filter((developer) =>{
    if (developer === 'Emet'){
        console.log(`Emet has in this array`)
    }else{
        console.log('No Emet is There')
    }
})
console.log(id)