var TYPES = ['darkblue', 'violet', 'rose', 'peach', 'pink', 'green'];
var COLOURS = ['262b53', '6d5a7f', 'ae7182', 'ffb958', 'fd82b1', '3fac00'];


var Board = function (cont, rows, columns) {
	this.toLinear = function (x, y) {
		return(this.columns * y + x);
	}
	this.gameBoard = [];
	this.rows = rows;
	this.columns = columns;
	this.div = document.createElement("div");
	this.div.id = "board";
	this.div.style.height = 75 * (rows + 1) + "px";
	this.div.style.width = 75 * (columns + 1) + "px";
	cont.appendChild(this.div);
	for (var i = 0, positionLeft = 0; i < rows; i++, positionLeft += 85) {
		for (var j = 0, positionTop = 0; j < columns; j++, positionTop += 85) {
			var T = new Tile(this.div);
			var typeNumber = getRandom(0,6);
			T.setPosition(positionTop, positionLeft);
			T.setType(typeNumber);
			this.gameBoard.push(typeNumber);
			T.click(positionLeft, positionTop);
		}
	}
	console.log(this.gameBoard + ";" + this.gameBoard.length);
	
}

var Tile = function (cont) {
	
	this.resetStyle = function (){
		this.div.className = this.style;
		this.div.classList.add(this.type);
	}
	this.click = function (posTop, posLeft) {
		if(this.div.classList.contains("active-tile") !== true) {
			this.div.onclick = function () {
				console.log(this.classList);
				this.classList.add("active-tile");
				this.style.top = posTop - 5 + "px";
				this.style.left = posLeft - 5 + "px";
			}
		} else {
			this.div.onclick = function () {
				console.log("unclick");
				this.classList.remove("active-tile");
				this.style.top = posTop + "px";
				this.style.left = posLeft + "px";
			}
		}
	}
	this.setPosition = function (x,y) {
		this.div.style.top = y + "px";
		this.div.style.left = x + "px";
	}
	this.setType = function (type) {
		this.type = TYPES[type];
		this.resetStyle();
	
	}
	this.type = TYPES[0];
	this.div = document.createElement("div");
    this.style = 'tile';
	this.container = cont;
	cont.appendChild(this.div);

	this.resetStyle();
}

function getOffset(el) {
  el = el.getBoundingClientRect();
  return {
    left: el.left + window.scrollX,
    top: el.top + window.scrollY
  }
}

function getRandom (min, max) {
  return Math.floor(Math.random() * (max - min));
}

window.onload = function () {

	var board = new Board(document.getElementsByTagName('body')[0], 9, 9);
	

	/*
	for (var i = 0; i < COLUMNS * ROWS; i++) (function(i){
		var ActiveTile = document.getElementsByClassName("tile")[i];
		var ActiveTileLeft = getOffset(ActiveTile).left;
		var ActiveTileTop = getOffset(ActiveTile).top;
		ActiveTile.onclick = function () {
			ActiveTile.classList.add("active-tile");
			ActiveTile.style.left = ActiveTileLeft - 600 + "px";
			ActiveTile.style.top = ActiveTileTop - 72 + "px";
			console.log(ActiveTile.style.left);
			var hasClass = ActiveTile.classList.contains('active-tile');
			console.log(hasClass);
			if (hasClass === true) {
				ActiveTile.onclick = function () {
					ActiveTile.classList.remove("active-tile");
					ActiveTile.style.left = ActiveTileLeft - 590.75 + "px";
					ActiveTile.style.top = ActiveTileTop - 63 + "px";
				}
			}
		}
		
	})(i);
		*/
}
