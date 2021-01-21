var nama = "Jane"
var peran = "Guard"


if (nama == "" && peran ==""){
console.log("nama harus disi")
}else if (nama != null && peran == "") {console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`)}

if (nama != null && peran == "penyihir"){
console.log(`Selamat datang di Dunia Werewolf, ${nama}`)
console.log(`Halo ${peran} ${nama}, kamu dapat melihat siapa yang menjadi werewolf`)
}else if (nama != null && peran == "Guard"){
    console.log(`Selamat datang di Dunia Werewolf, ${nama}`)
    console.log(`Halo ${nama}, kamu akan membantu melindungi temanmu dari serangan werewolf.`)
}else if  (nama != null && peran == "warewolf"){
    console.log(`Selamat datang di Dunia Werewolf, ${nama}`)
    console.log(`Halo Werewolf ${nama}, Kamu akan memakan mangsa setiap malam!`)
}
