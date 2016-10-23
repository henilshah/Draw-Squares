//Author: Henil Shah

//Draw Squares with Fade to white

const MAX_COLOR = 15;

function drawShapes() {
	this.square = document.getElementById("square");
}

drawShapes.prototype.colorRange = function(n) {
	var scale = [], color;
	var colorVal = ['#AAA','#BBB','#CCC','#DDD','#EEE','#FFF'];
	
	//color index within the range of #000 to #FFF
	if (n>=0 && n<=MAX_COLOR) {
		for(var i = n; i <= MAX_COLOR; i++) {
			//get #000
			if (i === 0) {
				scale[i] = "#000";
				
			//get #111 to #999
			} else if (i>0 && i<10) {
				color = i + (10*i) + (100*i);
				scale[i] = '#' + color;

			//get #AAA to #FFF
			} else if (i>=10) {
				scale[i] = colorVal[i-10];
			}
		}
	} else {
		return;
	}
	return scale;
};

// Calculate the final widht of the biggest box, so that all the boxes can be
// positioned as centere relative to each other
drawShapes.prototype.getTotalSize = function(index, step) {
	var range = 16 - index;
	var width = 0;
	for (var i = 0; i <= range; i++) {
		width += i===0 ? step : 2*step;
	}
	return width;
};

/* Draw the squares based on the parameters passed
** @param {number} index : From where the gray scale should start 
** @param {number} step: The visible width, in pixels, of a step
*/
drawShapes.prototype.drawSquares = function(index, step) {
	var grayScale = (index || index===0) ? this.colorRange(index) : null;
	if (grayScale) {
		var width, height, newNode, margin;
		width = height = 0;
		var range = 16 - index;
		var totalWidth = this.getTotalSize(index, step);

		for (var i = 0; i <= range; i++) {
			if (i === 0) {
				width += step;
				height += step;	
			} else {
				width += 2*step;
				height += 2*step;
			}
			newNode = document.createElement("div");
			newNode.style.width = width + "px";
			newNode.style.height = height + "px";
			margin = (totalWidth/2) - (step*i);
			newNode.style.margin = margin + "px"; //center the square positions
			newNode.style.position = "absolute";
			newNode.style.backgroundColor = grayScale[MAX_COLOR-i];
			newNode.style.zIndex = range - i;
			this.square.appendChild(newNode);
			console.log(newNode.style.zIndex);
		}
		
		console.log("scale", grayScale);
	} else {
		alert("invalid selection");
	}
	
};

var squares = new drawShapes();
document.addEventListener("load",squares.drawSquares(1,25));