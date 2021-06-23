

function preload(){
    
}

function setup(){
createCanvas(800,800);

    
}

function draw(){

for(var i = 0; i<maxDrops; i++){
  drops[i].showDrop();
    drops[i].updateY()
    
}   
}
