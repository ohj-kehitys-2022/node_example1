for (let x=1; x<=5; x++){
    console.log("x arvo = "+x);
}

for(var y=1; y<=5; y++){
    console.log("y arvo = "+y);
}

console.log("Loopin jälkeen y="+y);
//x on näkyvillä vain for-loopin sisällä,
//joten seuraava lause aiheuttaa virheen
//console.log("Loopin jälkeen x="+x);