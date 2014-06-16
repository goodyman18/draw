$(document).ready(function() {
	var containerWidth = $(document).width() - 40;
	console.log("Container is "+containerWidth+" pixels");
	
	makeGrid(16);
	mouseOver();
	
	$('#reset').click(function() {
		do{
			var newGridSize = prompt('Please enter a new grid size: ');
			makeGrid(newGridSize);
		}
		while (isNaN(newGridSize));
	});
	
	$('#randomColor').click(function() {
		do{
			var newGridSize = prompt('Please enter a new grid size: ');
			makeGrid(newGridSize);
			randomColors();
		}
		while (isNaN(newGridSize));
	});
	
	$('#opacity').click(function() {
		do{
			var newGridSize = prompt('Please enter a new grid size: ');
			makeGrid(newGridSize);
			opacity();
		}
		while (isNaN(newGridSize));
	});
});

function makeGrid(value) {
	var $grid = $('#grid');
	tmp = [];
	if($(".cell")[0]) {
	    $(".cell").remove(); 
	}
	for (var i = 0; i < value; i++) {
		for (var j = 0; j < value; j++) {
			tmp += "<div class='cell'></div>" // create temporary list of cells
		}
	}
	$($grid).append(tmp); // append new cells all at once
	
	var cellSize = $grid.width() / value; 
	$('.cell').css('width', cellSize + "px");
	$('.cell').css('height', cellSize + "px");
	mouseOver();
}

function mouseOver() {
	var $cell = $('.cell');
	$($cell).hover(function() {
		$(this).css('background-color','black')
	})
}

function randomColors() {
	$(".cell").hover(function() {
	        var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
	        $(this).css("background-color", randomColor);
	});
}

function opacity() {
	$('.cell').css('background-color','black')
	$('.cell').hover(function() {
		var currentOpacity = $(this).css('opacity');
		if(!(currentOpacity === 0)) {
			$(this).css('opacity', currentOpacity - 0.1);
		}
	});
}




