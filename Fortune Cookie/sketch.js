var currentScene;
var wrapperScene;

//Fortune Cookie API
let url = "https://digital-fortune-cookies-api.herokuapp.com/fortune"; 
let data;

//Preload Images
let starting;
let pick;
let ripori;
let rip1;
 

function preload(){
    data = loadJSON(url);
    console.log(data);
    starting = loadImage("images/starting.png");
    pick = loadImage("images/pick.png");
    ripori = loadImage("images/ripori.png");
    rip1 = loadImage("images/rip1.gif");
}

function setup() {
  createCanvas(800,600);
}

//Starting Button
var drawButton = function() {
    fill(81, 166, 31);
    rect(720, 40, 50, 25);
    fill(255, 255, 255);
    textSize(16);
    text("Start", 728, 58);
};

//Scene 1 - Intro
var drawScene0 = function(){
    currentScene = 0;
    background(153,15,12);
    image(starting,0,0);
    //textSize(25);
    //text("Fortune from your Chinese Takeout", 190, 200);

    drawButton();
}

//Scene 2 - Pick Your Cookie
var drawScene1 = function() {
    currentScene = 1;
    background(235, 247, 255);
    image(pick,0,0);
    fill(0, 85, 255);

        //Replace with Fortune Cookies
        noStroke();
        fill(color(0,0,0,0));
        square(270,200,100); //top left to bottom right
        square(443,260,100);
        square(120,320,100);
        square(310,390,100);
        square(595,350,100);


    //textSize(25);
    //text("Pick Your Cookie", 300, 100);

};



//Scene 3 - Rip Open Wrapper

    //Replace Squares with Images
    var wrapperScene0 = function(){
        //fill(255);
        image(ripori,0,0);
        //square(350,250,100);
    };
    var wrapperScene1 = function(){
        //fill(155);
        image(rip1,0,0);
       // square(350,250,100);
    };

    var wrapperScene2 = function(){
        fill(180,200,15);
        square(350,250,100);
    };
    var wrapperScene3 = function(){
        fill(55);
        square(350,250,100);
        fill(81, 166, 31);
        rect(375, 400, 50, 25);
        fill(255, 255, 255);
        textSize(16);
        text("Next", 385, 418);
    };

var drawScene2 = function() {
    currentScene = 2;
    wrapperScene = 0;

    background(173, 239, 255);
    fill(7, 14, 145);
    textSize(25);
    text("Press a key to rip wrapper", 250, 100);

    wrapperScene0();      
};



//Scene 4 - Cracking

//Replace Squares with Images
var crackScene0 = function(){
    fill(210);
    square(350,250,100);
};
var crackScene1 = function(){
    fill(110);
    square(350,250,100);
};
var crackScene2 = function(){
    fill(10);
    square(350,250,100);
    fill(81, 166, 31);
    rect(375, 400, 50, 25);
    fill(255, 255, 255);
    textSize(16);
    text("Next", 385, 418);
};

var drawScene3 = function() {
    currentScene = 3;
    crackScene = 0;
    background(173, 239, 255);
    fill(7, 14, 145);
    textSize(25);
    text("Crack to receive fortune", 260, 100);

    crackScene0();
};

//Scene 5 - Receiving Fortune + API

var drawScene4 = function() {
    currentScene = 4;
    background(153,15,12);
    fill(81, 166, 31);
    rect(375, 500, 65, 25);
    fill(255, 255, 255);
    textSize(16);
    text(data.cookie.fortune, 200, 200); 
    text("Restart", 383, 518);
};


draw = function() {
    if (currentScene === 0) {
        drawScene0();
    }
    //drawButton();
};

mouseClicked = function() {
    if (true) {
        if (mouseX >= 720 && mouseX <= 770 &&
            mouseY >= 40 && mouseY <= 65 && currentScene === 0) {
            drawScene1();
        } else if (currentScene === 1 &&

            (
            (mouseX >= 270 && mouseX <= 370 &&
            mouseY >= 200 && mouseY <= 300) ||
            
            (mouseX >= 443 && mouseX <= 543 &&
            mouseY >= 260 && mouseY <= 360) ||
            
            (mouseX >= 120 && mouseX <= 220 &&
            mouseY >= 320 && mouseY <= 420) ||
            
            (mouseX >= 310 && mouseX <= 410 &&
            mouseY >= 390 && mouseY <= 490) ||
            
            (mouseX >= 595 && mouseX <= 695 &&
            mouseY >= 350 && mouseY <= 450)
            ) 
            
            ) {
            drawScene2();
        } else if (currentScene === 2 && wrapperScene === 3 &&
                (
                (mouseX >= 375 && mouseX <= 425 &&
                mouseY >= 400 && mouseY <= 425)
                )
            ) {
            drawScene3();
        } else if (currentScene === 3 && crackScene === 2 &&
                (
                (mouseX >= 375 && mouseX <= 425 &&
                mouseY >= 400 && mouseY <= 425)
                )
            ) {
            drawScene4();
        }  else if (currentScene === 4 &&
             (
                (mouseX >= 375 && mouseX <= 440 &&
                mouseY >= 500 && mouseY <= 525)
             )
            ) {
            location.reload();
            drawScene0();
        }
    }
};


keyPressed = function() {
    if (currentScene === 2 && wrapperScene === 0){
        wrapperScene += 1;
        wrapperScene1();
    }
    else if (currentScene === 2 && wrapperScene === 1){
        wrapperScene += 1;
        wrapperScene2();
    }
    else if (currentScene === 2 && wrapperScene === 2){
        wrapperScene += 1;
        wrapperScene3();
    }

    if (currentScene === 3 && crackScene === 0){
        crackScene += 1;
        crackScene1();
    }
    else if (currentScene === 3 && crackScene === 1){
        crackScene += 1;
        crackScene2();
    }    
}


drawScene0();
