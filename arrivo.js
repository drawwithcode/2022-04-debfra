const urlString = window.location.href; // Collect the url
let url = new URL(urlString); // Create a machine-readable object

let lineWidth = 40;

function setup(){
  createCanvas(windowWidth,windowHeight);
 }
 
 function draw() {
	 background("#ffffff08")
	 colorMode(HSB);
	 noFill();

//Define brush creation with finger pressing 
	 if (mouseIsPressed) {
		strokeWeight(10);
		stroke((5*frameCount) % 360, 40, 100);
        fill((5*frameCount) % 360, 100, 100);
		let distance = dist(mouseX,mouseY,pmouseX,pmouseY);
        let scaled = map(distance, 0, width, 0, 20);
        strokeWeight(scaled);
        brush(pmouseX, pmouseY, mouseX, mouseY,lineWidth);
     } 
}

//Create the brush
 function brush( x, y,  px,  py,  lineWidth) {
  strokeWeight(lineWidth);
  line(px,py,x,y);
  line(width/2+((width/2)-px),py,width/2+((width/2)-x),y);
  line(px,height/2+((height/2)-py),x,height/2+((height/2)-y));
  line(width/2+((width/2)-px),height/2+((height/2)-py),width/2+((width/2)-x),height/2+((height/2)-y));
  line(width/2+((width/2)-py),width/2-((width/2)-px),width/2+((width/2)-y),width/2-((width/2)-x));
  line(height/2-((height/2)-py),width/2-((width/2)-px),height/2-((height/2)-y),width/2-((width/2)-x));
  line(width/2+((width/2)-py),height/2+((height/2)-px),width/2+((width/2)-y),height/2+((height/2)-x));
  line(width/2-((width/2)-py),height/2+((height/2)-px),width/2-((width/2)-y),height/2+((height/2)-x));
  return;
}


// request permissions on iOS
function touchEnded(event) {
	if(DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
		DeviceOrientationEvent.requestPermission()
	}
}



