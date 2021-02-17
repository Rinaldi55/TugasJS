// var flag = 2;
// while(flag <=20){
//     console.log(flag + ' I love coding');
//     flag=flag+2

// }
// var i =1;
// for(i; i <=20; i+=2){
// console.log(i, "I love coding")
// }
// var i = 1;
// console.log(++i)
 

// var flag = 20;
// while(flag >= 2) { // Loop akan terus berjalan selama nilai flag masih dibawah 10
//   console.log(flag + ' - I will become a mobile developer'); // Menampilkan nilai flag pada iterasi tertentu
//   flag=flag-2; // Mengubah nilai flag dengan menambahkan 1
// }



// var i = 1;
// for(i; i <=20; i++){
//     if(i%2 == 0){
//         console.log(i, "genap");
//     }
//     else if (i%3 == 0){
//         console.log(i, "i love coding");
//     }
//     else if (i%1 == 0){
//     console.log(i, "ganjil");
//     }
// }


// var flag = 1;
// while(flag <= 4) { // Loop akan terus berjalan selama nilai flag masih dibawah 10
//   console.log('########'); // Menampilkan nilai flag pada iterasi tertentu
//   flag++; // Mengubah nilai flag dengan menambahkan 1
// }

// let str = '   ';

// for(i = 0; i <= 5 ; i++) {
//     for(j = 1; j <= i; j++) {
//        str += " * ";
//     }
//     str += '\n';
// }
// console.log(str);
// let str ='';

// for(i = 0; i <= 5 ; i++) {
//     for(j = 1; j <= i; j++) {
//        str += "#";
//     }
//     str += '\n';
// }
// console.log(str);
// function teriak() {
//   return "hallo antusias"
    
    
//   }
  
//   console.log(teriak());


// var num1 = 12
// var num2 = 4
// function tampilkanAngka(angkaPertama, angkaKedua) {
//   return angkaPertama * angkaKedua
// }
 
// console.log(tampilkanAngka(12, 4))
//  function kalikan(num1,num2){
//    return num1*num2
//  }
// var hasilKali = kalikan(2,8)
// console.log(hasilKali) // 48

// function kalikanDua(angka) {
//   return 12 * 4
// }
 
// var hasilkali = kalikanDua(2);
// console.log(hasilkali)


// var nama = "Agus"
// var age = 30
// var address = "Jln. Malioboro, Yogyakarta"
// var hobby = "Gaming"
 
// // var perkenalan = introduce(name, age, address, hobby)
// // console.log(perkenalan) // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogyakarta, dan saya punya hobby yaitu Gaming!" 

// function introduce (a,b,c,d){
//   return `Nama saya ${a} umur saya ${b} tahun, alamat saya di ${c}, dan saya punya hobby yaitu ${d}`
// }
// var perkenalan = introduce(nama, age, address, hobby)
// console.log(perkenalan)

function reverseWord(kata) {
  
  var i = kata.length -1
  var newString = "";
  while(i >=0) {
  
  newString+=kata[i] i--
  }
 
return newString
}

console.log (reverseWord('Hello World and Coders'));
console.log(reverseWord('John Doe'));
console.log(reverseWord('I am a bookworm')); 
console.log(reverseWord('Coding is my hobby')); 
console.log(reverseWord('Super'));