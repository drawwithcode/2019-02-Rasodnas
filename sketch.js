var R;
var G;
var B;
var nR;
var nG;
var nB;
var inc = 1;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background("black");
  rectMode(CENTER);
  colorMode(RGB);
  frameRate(60)

}

function draw() {

var pixWidth = 50;
var pixWidthNum = width/pixWidth;

var pixHeight = 50;
var pixHeightNum = height/pixHeight;

  for (var n=pixHeight/2; n<height; n+=pixHeight)
  {
    for (var i=pixWidth/2; i<width; i+=pixWidth)
    {

      R = random(50)+(noise(frameCount)*10);
      G = random(10);
      B = random(0);

      if (mouseIsPressed) //(mouseX >= i && mouseX <= i+pixWidth && mouseY >= n && mouseY <= n+pixHeight)
      {
        fill(mouseY/15,0,0);
        rect(i,n,pixWidth,pixHeight);

      }
      else if (mouseX >= i && mouseX <= i+pixWidth && mouseY >= n && mouseY <= n+pixHeight) {
        // fill(R,G,B);
        // rect(i,n,pixWidth/(noise(frameCount/10)*5),pixHeight/(noise(frameCount/10)*5));
        fill(0,0,0);
        rect(i,n,pixWidth,pixHeight);
      }
      else {
        // rect(i,n,pixWidth/(noise(frameCount/10)*5),pixHeight/(noise(frameCount/10)*5));

        fill(R,G,B);
        strokeWeight(5);
        rect(i,n,pixWidth/(noise(frameCount/100)*5),pixHeight/(noise(frameCount/100)*5));
      }

      push();
      translate (width/2.5,-height/12);
      fill(30,20,20);
      textSize(8);
      text('Click and drag your cursor down to add background', 0, height - 100);
      pop();


      }
    }
}
