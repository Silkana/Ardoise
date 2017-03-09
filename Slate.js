function Slate(h, w){
	this.brush = new Brush('#00AA00', 40);
	var h,w;
	$('#newdimensions').click(function(){
		h = window.prompt('height?');
		w = window.prompt('width?');
		$('#attach').empty();
		$('#attach').append($("<canvas id=\"can\" width="+ (w || 500)+" height="+(h || 500)+"></canvas>"));
that.canva = document.getElementById("can");
	that.ctx = this.canva.getContext('2d');
	});

	
	this.canva = document.getElementById("can");
	this.ctx = this.canva.getContext('2d');
	this.isDrawing = false;

	$(this.canva).mousedown(this.startDraw.bind(this));
	$(this.canva).mousemove(this.draw.bind(this));
	$(this.canva).mouseup(this.stopDraw.bind(this));


}

Slate.prototype.startDraw = function(event){
	this.isDrawing = true;

	this.ctx.beginPath();
	
	this.ctx.lineWidth = this.brush.getThickness();
	this.ctx.strokeStyle = this.brush.getColor();
	
	var rect = this.canva.getBoundingClientRect();

	this.ctx.moveTo(
		event.clientX - rect.left, 
		event.clientY - rect.top);
};

Slate.prototype.draw = function(event){

	if (this.isDrawing) {
		var rect = this.canva.getBoundingClientRect();


		this.ctx.lineTo(
			event.clientX - rect.left, 
			event.clientY - rect.top);
		this.ctx.stroke();	
	}	
};

Slate.prototype.stopDraw = function(event){
	this.isDrawing = false;
};

// Slate.prototype.draw = function() {

// 	this.canva.onmousedown = function(event) {
// 		that.ctx.beginPath();
// 		that.ctx.lineWidth = that.brush.getThickness();
// 		that.ctx.strokeStyle = that.brush.getColor();
// 		isDrawing = true;
// 		that.ctx.moveTo(
// 			event.clientX - that.canva.offsetLeft, 
// 			event.clientY - that.canva.offsetTop);
// 	};

// 	this.canva.onmousemove = function(event) {
// 		if (isDrawing) {
// 			that.ctx.lineTo(
// 				event.clientX - that.canva.offsetLeft, 
// 				event.clientY - that.canva.offsetTop);
// 			that.ctx.stroke();	
// 		}	
// 	}

// 	this.canva.onmouseup = function(event) {
// 		isDrawing = false;
// 		console.log("Dis moi oui");
// 	}
// };


Slate.prototype.clear = function() {
	this.ctx.clearRect(0, 0, this.canva.width, this.canva.height);
};




// Slate.prototype.newDimensions = function(h, w) {
// 	var w = 
// 	var h = };