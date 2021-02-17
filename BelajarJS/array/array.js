function range(startNum, finishNum){
 if(startNum==null && finishNum==null){
     return -1
 } else if(startNum==1 && finishNum==null){
     return-1
 } else if(startNum<finishNum){
     var arr=[]
     for(let i=startNum; i<=finishNum; i++){
         arr.push(i)
     }
     
return arr
 } else if(startNum>finishNum){
     var arr=[]
     for(let i=startNum; i>=finishNum; i--){
         arr.push(i)
     }
     return arr
 }
   
}
 
console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1 

function rangeWithStep(startNum, finishNum, step) {
    if(startNum<finishNum){
        var arr=[]
        for(let i=startNum; i<=finishNum; i+=step){
            arr.push(i)
        }
        return arr
    } else if(startNum>finishNum){
    var arr=[]
    for(let i=startNum; i>=finishNum; i-=step){
        arr.push(i)
    }
    return arr
}
}
 
console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 

function sum(startNum,finishNum,step=1){
    if(startNum<finishNum){
        var total=0
        for(let i=startNum; i<=finishNum; i+=step){
            total+=i
        }
        return total

    } else if(startNum>finishNum){
        var total=0
        for(let i=startNum; i>=finishNum; i-=step){
            total+=i

        }
        return total
    } else if(startNum==null && finishNum==null){
        return 0
    } else if(startNum==1 && finishNum==null){
        return 1
    }

    
}

console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
] 
function dataHandling(a){
var nomor, nama, ttl, hobby

for(let i = 0; i<=a.length-1; i++){
    nomor = a[i][0]
    nama = a[i][1]
    ttl = a[i][2]
    hobby= a[i][3]


    console.log("nomor :" .concat(nomor))
    console.log("nama :" .concat(nama))
    console.log("ttl :"  .concat(ttl))
    console.log("hobby :"  .concat(hobby))

}
}

dataHandling(input);

function balikKata(kata1,kata2=""){
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
  
  
  console.log(balikKata("Kasur Rusak")) // kasuR rusaK
  console.log(balikKata("Enthusiast")) // tsaisuhtnE
  console.log(balikKata("Haji Ijah")) // hajI ijaH
  console.log(balikKata("racecar")) // racecar
  console.log(balikKata("I am Developer")) // repoleveD ma I 



var input = ["0001", "Roman Alamsyah Elsharawy", "Provinsi  Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
 
function dataHandling2(A){
  
  let b = A[3].substr(3,2)
  let c = A[3].slice(0,2)
  let d = A[3].slice(3,5)
  let e = A[3].slice(6,10)

var arr = []
var arr2 = [...A, "aldi" ]


console.log(arr2)
arr.push(c,d,e)
var f = arr.join("-")

  // console.log(arr2)                
  // console.log(A)
  // console.log(arr2)

  switch(b) {
    case "01":   { console.log('Januari'); break; }
    case "02":   { console.log('Febuari'); break; }
    case "03":   { console.log('Maret'); break; }
    case "04":   { console.log('April'); break; }
    case "05":   { console.log('Mei'); break; }
    default:  { console.log('Tidak terjadi apa-apa'); }}
//     // console.log(b)
//     // console.log(c)
//     // console.log(d)
//     // console.log(e)
    console.log(arr)
//     // console.log(A)
    console.log(f)
    
}



