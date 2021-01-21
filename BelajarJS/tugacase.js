var tanggal = 21;
var bulan = 1;
var tahun = 1945;

switch(true){
case (tanggal <1||tanggal>31):{
  console("Input Tidak Sesuai")
  break;
}
case (tahun <1900||tanggal>2200):{
  console("Input Tidak Sesuai")
  break;
}
}



switch (bulan) {
  case 1: {
  
    console.log(`${tanggal} Januari ${tahun}`);
    break;
  }
  case 2: {
    
    console.log(`${tanggal} Febuari ${tahun}`);

    break;
  }
  case 3: {
    console.log(tanggal)
    console.log("Maret");
    console.log(tahun)
    break;
  }
  case 4: {
    console.log(tanggal)
    console.log("April");
    console.log(tahun)
    break;
  }
  case 5: {
    console.log(tanggal)
    console.log("Mei");
    console.log(tahun)
  }
  case 6: {
    console.log(tanggal)
    console.log("Juni");
    console.log(tahun)
  }
  case 7: {
    console.log(tanggal)
    console.log("Juli");
    console.log(tahun)
  }
  case 8: {
    console.log(tanggal)
    console.log("Agustus");
    console.log(tahun)
  }
  case 9: {
    console.log(tanggal)
    console.log("September");
    console.log(tahun)
  }
  case 10: {
    console.log(tanggal)
    console.log("Oktober");
    console.log(tahun)
  }
  case 11: {
    console.log(tanggal)
    console.log("November");
    console.log(tahun)
  }
  case 12: {
    console.log(tanggal)
    console.log("Desember");
    console.log(tahun)
  }
  default:  { console.log('Tidak terjadi apa-apa'); }}