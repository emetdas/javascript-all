let id: number[] = [10,5,10,5,1]
let developers: string[] = ['Emet','Jonas','Dev Ed','Brad']
let Name = 'emet'
let search = developers.filter((developer) => {
   return developer.toLocaleLowerCase().includes(Name)
})
let total_id = id.reduce((index,current) => {
   return  index + current
},1)
console.log(total_id)
console.log(search);