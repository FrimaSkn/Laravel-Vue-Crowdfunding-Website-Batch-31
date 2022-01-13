// soal 1 buatlah fungsi menggunakan arrow function luas dan keliling persegi panjang dengan arrow function lalu gunakan let atau const di dalam soal ini

//Jawaban Soal 1
const persegiPanjang = (luas, panjang) => {
  let rumsuLuas = luas * panjang
  let rumusKeliling = (2 * luas) + (2 * panjang)
  return {
    rumsuLuas,
    rumusKeliling
  }
  
}

console.log(persegiPanjang(5, 15).rumsuLuas)
console.log(persegiPanjang(5, 10).rumusKeliling)


//soal 2 

/* 
Ubahlah code di bawah ke dalam arrow function dan object literal es6 yang lebih sederhana 

const newFunction = function literal(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function(){
      console.log(firstName + " " + lastName)
    }
  }
}
 
//Driver Code 
newFunction("William", "Imoh").fullName() 
*/ 

//Jawaban Soal 2
const newFunction = (firstName, lastName) => {
    return {
       firstName,
       lastName,
      fullName() {
        console.log(`${firstName} ${lastName}`)
      }
    }
  }
  
//Driver Code 
// console.log(newFunction("William", "Imoh").lastName)
  newFunction("William", "Imoh").fullName()



// Soal 3 
/* 
Diberikan sebuah objek sebagai berikut:
const newObject = {
  firstName: "Muhammad",
  lastName: "Iqbal Mubarok",
  address: "Jalan Ranamanyar",
  hobby: "playing football",
}
dalam ES5 untuk mendapatkan semua nilai dari object tersebut kita harus tampung satu per satu:
const firstName = newObject.firstName;
const lastName = newObject.lastName;
const address = newObject.address;
const hobby = newObject.hobby;
Gunakan metode destructuring dalam ES6 untuk mendapatkan semua nilai dalam object dengan lebih singkat (1 line saja)
// Driver code
console.log(firstName, lastName, address, hobby)
*/

//Jawaban Soal 3
const newObject = {
    firstName: "Muhammad",
    lastName: "Iqbal Mubarok",
    address: "Jalan Ranamanyar",
    hobby: "playing football",
  }

const {firstName, lastName, address, hobby} = newObject

// Driver code
console.log(firstName, lastName, address, hobby)



//Soal 4 
/*
Kombinasikan dua array berikut menggunakan array spreading ES6
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = west.concat(east)
//Driver Code
console.log(combined)
*/

//Jawaban Soal 4
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(combined)



//Soal 5 
/* 
sederhanakan string berikut agar menjadi lebih sederhana menggunakan template literals ES6:

const planet = "earth" 
const view = "glass" 
var before = 'Lorem ' + view + 'dolor sit amet, ' + 'consectetur adipiscing elit,' + planet 
*/

//Jawaban Soal 5
const planet = "earth" 
const view = "glass" 
let before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet}`

console.log(before)
