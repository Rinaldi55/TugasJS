// function teriak() {
//     let arr = "Halo Enthusiast"
//     return arr 
//   }
   
//   console.log(teriak()) // function akan bernilai ketika di return


// function kalikan(num1,num2){
//   return num1 * num2
// }

 
// var num1 = 12
// var num2 = 4
 
// var hasilKali = kalikan(num1, num2)
// console.log(hasilKali)


// function introduce(){
//     return `Nama saya ${nama} umur saya ${age}tahun alamat saya di ${address} dan saya punya hobby yaitu ${hobby}`

    

// }
 
// var nama = "Agus"
// var age = 30
// var address = "Jln. Malioboro, Yogyakarta"
// var hobby = "Gaming"
 
// var perkenalan = introduce(nama, age, address, hobby)
// console.log(perkenalan)


    
    // function reverseWord(kata) 
    // {
  
    //     var i = kata.length -1;
    //     var newString = "";
    //     while(i >=0 ) {
        
    //     newString+=kata[i]
    //     i--
    //     }
       
    //   return newString
    //   }
      
    //    console.log (reverseWord('Hello World and Coders'));
    //   console.log(reverseWord('John Doe'));
    //    console.log(reverseWord('I am a bookworm')); 
    //   console.log(reverseWord('Coding is my hobby')); 
    //   console.log(reverseWord('Super'));

    function joinWord(kata1,kata2){
        let newString= "" 
        let newString2= ""
                for(let i=kata1.length -1; i>= 0; i--){
                    newString+=kata1[i]
                    
                }
                for(let j=kata2.length -1; j>= 0; j--){
                    newString2+=kata2[j]
                    
                }
                return newString + newString2
      }
      
      

      
      // TEST CASES
      console.log(joinWord('Udin ','Sedunia')); // Udin Sedunia
      console.log(joinWord('John ','Doe')); // John Doe
      console.log(joinWord('JavaScript ' , 'EZ')); // JavaScript EZ
      console.log(joinWord('Code for ' , 'Living')); // Code for Living
    //   console.log(joinWord('Super')); 

    // program to check if the string is palindrome or not

//     function isPalindrome(kata){
//         let newString= "" 
//         for(let i=kata.length-1; i>= 0; i--){
//             newString+=kata[i]

            
//         }
//         if (kata==newString){
//             return true
//         }
//         else{
//             return false
//         }
//     }
// console.log(isPalindrome('level')); // true
// console.log(isPalindrome('civic')); // true
// console.log(isPalindrome('JavaScript')); // false
// console.log(isPalindrome('Living')); // false
// console.log(isPalindrome('madam')); // true