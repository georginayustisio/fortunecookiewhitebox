let url = "https://digital-fortune-cookies-api.herokuapp.com/fortune"; 

let data;

function preload(){
    data = loadJSON(url);
    console.log(data);
}


function setup() {
  createCanvas(1000, 600);
  textSize(18);
  fill(255);

}

function draw() {
  background(185, 20, 222);
  text(data.cookie.fortune, 200, 200); 
}

