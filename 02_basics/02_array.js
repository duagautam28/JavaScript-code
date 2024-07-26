const marvel_heroes=["spiderman","thor","ironmam"]
const dc_heroes=["superman","flash","batman"]

// console.log(marvel_heroes)
// console.log(dc_heroes)

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)

// const allHeroes=marvel_heroes.concat(dc_heroes)
// console.log(allHeroes)

const all_new_heroes=[...marvel_heroes,...dc_heroes]   //spread operator
console.log(all_new_heroes)

const another_array= [1,2,3,[4,5,6],7,[7,6[4,5]]]
const real_another_arr=another_array.flat(Infinity)
console.log(real_another_arr)

console.log(Array.isArray("Gautam"))
console.log(Array.from("Gautam"))

let a=100
let b=8999
let c=9898

console.log(Array.of(a,b,c))
