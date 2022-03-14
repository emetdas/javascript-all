let id: number[] = [10,5,10,5,1]
// let developers: string[] = ['Emet','Jonas','Dev Ed','Brad']
// let Name = 'emet'; 

let developers: any[] = [
    {title: 'Emet'},
    {title: 'Jonas'},
    {title: 'Dev Ed'},
]
let developer_name: string = 'e'
let search = developers.filter((developer) => {
   return developer.title.toLocaleLowerCase().includes(developer_name)
})
console.log(search);

