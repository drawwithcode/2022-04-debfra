const urlString = window.location.href;
let url = new URL(urlString);


function setup() {
	createCanvas(windowWidth, windowHeight);
	setShakeThreshold(30);
	colorMode(HSB);
	noStroke();

	//define a gradient background
	c1 = color(350, 10, 100);
	c2 = color(160, 90, 100);
	
	for(let y=0; y<height; y++){
	  n = map(y,0,height,0,1);
	  let newc = lerpColor(c1,c2,n);
	  stroke(newc);
	  line(0,y,width, y);
  }
}
  function draw() {
 	
	//write the text
	push();
	let myText = "SHAKE"
	textFont("Alexandria");
	fill("white");
	noStroke();
	textSize(70);
	textStyle(BOLD);
	textAlign(CENTER);
	text(myText, width/2, height/4*1.6);
	pop();
	push();
	let myText2 = "AND"
	textFont("Alexandria");
	fill("white");
	noStroke();
	textSize(70);
	textStyle(BOLD);
	textAlign(CENTER);
	text(myText2, width/2, height/3*1.5);
	pop();
	push();
	let myText3 = "START"
	textFont("Alexandria");
	fill("white");
	noStroke();
	textSize(70);
	textStyle(BOLD);
	textAlign(CENTER);
	text(myText3, width/2, height/2.4*1.45);
	pop();
	push();
	let myText4 = "DRAWING"
	textFont("Alexandria");
	fill("white");
	noStroke();
	textSize(70);
	textStyle(BOLD);
	textAlign(CENTER);
	text(myText4, width/2, height/2*1.42);
	pop();
  }
  
 //Define page change at phone shaking
  function deviceShaken() {
	window.open(`${url}page.html?count=${frameCount}`, "_self");
 }

 
	// request permissions on iOS
  function touchEnded(event) {
	if(DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
		DeviceOrientationEvent.requestPermission()
	}
}