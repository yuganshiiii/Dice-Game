var n1= Math.floor(Math.random()*6)+1;
var n2= Math.floor(Math.random()*6)+1;
if(n1===n2)
{
    document.querySelector("h1").textContent="IT'S A DRAW!";
    
}
else if(n1>n2)
{
     document.querySelector("h1").textContent="PLAYER 1 WINS!";
}
else{
     document.querySelector("h1").textContent="PLAYER 2 WINS!";
}
console.log(n1);
console.log(n2);
if(n1===1)
document.querySelector(".dice1-img").setAttribute("src","images/dice1.png");
else if(n1===2)
document.querySelector(".dice1-img").setAttribute("src","images/dice2.png");
else if(n1===3)
document.querySelector(".dice1-img").setAttribute("src","images/dice3.png");
else if(n1===4)
document.querySelector(".dice1-img").setAttribute('src','images/dice4.png');
else if(n1===5)
document.querySelector(".dice1-img").setAttribute("src","images/dice5.png");
else
document.querySelector(".dice1-img").setAttribute("src","images/dice6.png");
if(n2===1)
document.querySelector(".dice2-img").setAttribute("src","images/dice1.png");
else if(n2===2)
document.querySelector(".dice2-img").setAttribute("src","images/dice2.png");
else if(n2===3)
document.querySelector(".dice2-img").setAttribute("src","images/dice3.png");
else if(n2===4)
document.querySelector(".dice2-img").setAttribute('src','images/dice4.png');
else if(n2===5)
document.querySelector(".dice2-img").setAttribute("src","images/dice5.png");
else
document.querySelector(".dice2-img").setAttribute("src","images/dice6.png");