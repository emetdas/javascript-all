let id: number[] = [10,5,10,5,1]
let developers: string[] = ['Emet','Jonas','Dev Ed','Brad']
developers.forEach((developer) =>{
    console.log(developer)
})

let mySet = new Set<number>([...id])