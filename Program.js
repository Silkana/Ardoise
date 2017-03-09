function Program(h, w){
	this.slate = new Slate(h, w);


}


Program.prototype.start = function() {

	var that = this;
	$('#eraser').click(function(){
		that.slate.clear();
	});

	$('#thin').click(function(){
		that.slate.brush.setThickness(1);
	});

	$('#regular').click(function(){
		that.slate.brush.setThickness(5);
	});

	$('#thick').click(function(){
		that.slate.brush.setThickness(10);
	});

	$('#black').click(function(){
		that.slate.brush.setColor("#000000")
	});

	$('#brown').click(function(){
		that.slate.brush.setColor("#5E2021")
	});

	$('#red').click(function(){
		that.slate.brush.setColor("#BA131B")
	});

	$('#yellow').click(function(){
		that.slate.brush.setColor("#FFBD07")
	});

	$('#green').click(function(){
		that.slate.brush.setColor("#1BB218")
	});

	$('#turquoise').click(function(){
		that.slate.brush.setColor("#069C9A")
	});

	$('#blue').click(function(){
		that.slate.brush.setColor("#0377A6")
	});


};