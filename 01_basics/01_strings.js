let name="gautam"
let repoCount=4

// console.log(name+repoCount+" value")

// console.log('Hello my name is ${name} and my repo count is ${repoCount}')

const gameName=new String('gautam')

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))

console.log(gameName.indexOf('t'))

const newString=gameName.substring(0,4)
console.log(newString)

const newString2=gameName.slice(0.6)
console.log(newString2)

const newStr="         gautam            "
console.log(newStr)
console.log(newStr.trim())

url="gautam.com//%20gautam.in"
console.log(url.replace("%20","-"))

console.log(url.includes("//"))

console.log(url.split('//'))

console.log(newString.toCharArray())