// const score = true
// const attendance = false
// const attitude = false

// const result = score && attendance
// console.log(result)

// const result = score || attendance
// console.log(result)



// if(!!score){
//     console.log('Lulus')
// }
//SAMA DENGAN
// if(score == true){
//     console.log('Lulus')
// }



// if(!score){
//     console.log('Lulus')
// }
//SAMA DENGAN
// if(score !== false){
//     console.log('Lulus')
// }



// if(score || attendance || attitude){
//     console.log('Lulus')
// }

// let result = score || attendance
// if(result){
//     console.log('Lulus')
// }else{
//     console.log('Tidak Lulus')
// }



// const score = true
// const attendance = false
// let result = score && attendance

// if(result){
//     console.log('Lulus')
// }else if(result){
//     console.log('Lulus Bersyarat')
// }else{
//     console.log('Gak Lulus')
// }



// const number = 15
// if(number % 3 === 0 && number % 5 === 0){
//     console.log('fizz buzz')
// }else if(number % 5 === 0){
//     console.log('buzz')
// }else if(number % 3 === 0){
//     console.log('fizz')
// }else{
//     console.log('15')
// }



// let job = 'teacher'
// switch (job) {
//     case 'teacher':
//         console.log('teach')
//         break;
//     case 'doctor':
//         console.log('cure')
//         break;
//     case 'programmer':
//         console.log('code')
//         break;
//     default:
//         console.log('others');
// }



//TENERY (Dua Kondisi sama Seperti if else)
// const score = 80
// const result = score >= 80 ? "lulus" : "tidak lulus"
// console.log(result)



// function logger(name, age){
//     console.log(name, age)
// }
// logger('Dwi', 17)
// logger('Omar', 5)
// logger('Astri', 32)
// logger('Ano', 50)
// logger('Fai', 60)



//FUNCTION DECLARATION POSISI TIDAK MENETUKAN APA2 (DINAMIS) - BIASA DIGUNAKAN UNTUK FUNCTIONAL PROGRAMING
// function logger(name, age) {
//     const result = `nama : ${name} dan usia ${age}`
//     return result
// }
// const dwi = logger('dwi', 32)
// const astri = logger('dwi', 32)

// console.log(dwi)




// function fizzbuzz(number){
//     let result

//     if((number % 3 === 0) && (number % 5 === 0)){
//         result = 'fizzbuzz'
//     }else if(number % 5 === 0){
//         result = 'buzz'
//     }else if(number % 3 === 0){
//         result = 'fizz'
//     }else{
//         result = number;
//     }

//     return result
// }

// console.log(fizzbuzz(15))
// console.log(fizzbuzz(10))
// console.log(fizzbuzz(9))
// console.log(fizzbuzz(13))




//FUNCTION EXPRESSION POSISI MENETUKAN EROR ATAU TIDAK - BIASA DIGUNAKAN UNTUK OOP PROGRAMING
// const logger = function(name, age){
//     const result = `nama : ${name} dan usia ${age}`
//     return result
// }
// const dwi = logger('dwi', 32)
// console.log(dwi)



//SOAL CHECK AGE
// const checkAge = function(born){
//     const now = new Date()
//     const year = now.getFullYear()
//     const hitung = year - born
//     return hitung
// }
// const dwi = checkAge(1987)
// console.log(dwi)



//FUNCTION BMI
// function bmiMan(weight, high){
//     const bmiResultMan = weight/(high*high)
//     let resultIndicator
//     console.log(bmiResultMan)

//     if(bmiResultMan < 17){
//         resultIndicator = 'Kurus Berat'
//     }else if(bmiResultMan >= 17 && bmiResultMan <= 18.4 ){
//         resultIndicator = 'Kurus Ringan'
//     }else if(bmiResultMan >= 18.5 && bmiResultMan <= 25){
//         resultIndicator = 'Normal'
//     }else if(bmiResultMan >= 25.1 && bmiResultMan <= 27){
//         resultIndicator = 'Gemuk'
//     }else{
//         resultIndicator = 'Inget Berat!!'
//     }

//     return resultIndicator
// }
// console.log(bmiMan(40,1.4))


//WITH ARROW FUNCTION
// const bmiMan = (weight,high)=>{
//     const bmiResultMan = weight/(high*high)
//     let resultIndicator
//     console.log(bmiResultMan)

//     if(bmiResultMan < 17){
//         resultIndicator = 'Kurus Berat'
//     }else if(bmiResultMan >= 17 && bmiResultMan <= 18.4 ){
//         resultIndicator = 'Kurus Ringan'
//     }else if(bmiResultMan >= 18.5 && bmiResultMan <= 25){
//         resultIndicator = 'Normal'
//     }else if(bmiResultMan >= 25.1 && bmiResultMan <= 27){
//         resultIndicator = 'Gemuk'
//     }else{
//         resultIndicator = 'Inget Berat!!'
//     }

//     return resultIndicator
// }
// console.log(bmiMan(40,1.4))


// //Simple function with arrow function
// const checkBmi = (weight,high) => weight/(high*high)
// console.log('Check BMI: ', checkBmi(40, 1.4))



//Array
const cars = ['ayla', 'sigra', 'avanza', 'cayla']
// const number = [1,2,3,4,5,6,7]
// const word = ['buku', 'sepatu']
// const lastCar = cars[cars.length - 1]
// console.log(lastCar)
// console.log(cars.reverse())
// console.log(cars.indexOf('sigra'))
// console.log(cars.sort())
// console.log(cars.pop())
// console.log(cars.shift())

// cars.push('Kijang')
// console.log(cars)

// const newArray = cars.concat(number).concat(word)
// console.log(newArray)


// const myInfo = {
//     name : 'Dwi',
//     born: 1990,
//     address: 'Tangerang',
//     hobbies: ['cycling', 'kit assembling', 'reading'],
//     brother: {
//         name: 'wahid',
//         address: 'Jakarta',
//         hobbies: ['reading', 'sleping']
//     },

//     checkAge: function(){
//         return 2022 - this.born
//     },

//     result: function(){
//         return `usia dia adalah ${this.checkAge()}`
//     }
// }

// const usia = myInfo.checkAge()
// console.log(usia)


// const cariUsia = myInfo.result()
// console.log(cariUsia)


//LOOP
// for (let index = 1; index <= 10; index++ ){
//     console.log(`Lari keliling ke: ${index}`)
// }

// for (let data = 1; data <= cars.length; data++){
//     console.log(cars[data - 1])
// }

// const dataCampur = ['ayla', 1, 'agya', 2, 'sigra', 3, 'cayla']
// const types = []
// for (let data = 1; data <= dataCampur.length; data++){
//     types.push(typeof dataCampur[data - 1])
// }
// console.log(types)

for (let data = 1; data <= 3; data++){
    console.log(`Lari Keliling ke: ${data}`)
    for (let pushup = 1; pushup < 5; pushup++){
        console.log(`---Pushup ${pushup} kali`)
    }
}

