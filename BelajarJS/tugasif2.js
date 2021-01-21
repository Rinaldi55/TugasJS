var Udin = 150;
var Hilman = 155;
var Aldi = 158;

if (Udin > Hilman){
    if (Udin > Aldi){
        console.log ("udin yang tertinggi")
    } else {
        console.log("Udin yang menengah")
    }
} else { 
    if (Hilman > Udin){
        if (Hilman > Aldi){
            console.log ("Hilman yang tertinggi")
        } else {
            console.log("Hilman yang menengah")
        }
    } else {
        if (Aldi > Hilman){
            if (Aldi > Udin){
                console.log ("aldi yang tertinggi")
            } else {
                console.log("Aldi yang menengah")
            }
        } 
    }
}


