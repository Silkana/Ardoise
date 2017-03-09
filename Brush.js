function Brush(c, t){
	this.color = c || '#000000';
	this.thickness = t || 10;
}



Brush.prototype.getColor = function() {
	return this.color;
};

Brush.prototype.getThickness = function() {
	return this.thickness;	
};

Brush.prototype.setColor = function(color) {
	this.color = color;
};

Brush.prototype.setThickness = function(thickness) {
	this.thickness = thickness;
};