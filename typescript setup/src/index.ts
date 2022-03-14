let id: number[] = [10,5,10,5,1]
let developers: string[] = ['Emet','Jonas','Dev Ed','Brad']
let Name: string = 'Emet'; 
let search = developers.filter((developer) => {
    let result = developer.toLocaleLowerCase().includes(Name)
    console.log(result)
})
developers.forEach((developer,index) =>{
    console.log(developer,index)
})
let mySet = new Set<number>([...id])
let total_id = id.reduce((pre,current) =>{
    return pre + current;
});

console.log(total_id);