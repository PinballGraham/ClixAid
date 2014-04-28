import ui.TextView as TextView;
import ui.View as View;
import device;

var PowerColours = {
	red:{ bg:"#ff3333", border:false, white:false },
	orange:{ bg:"#ff9900", border:false, white:false },
	yellow:{ bg:"#ffff00", border:false, white:false },
	paleGreen:{ bg:"#ccff33", border:false, white:false },
	green:{ bg:"#00ff00", border:false, white:false },
	paleBlue:{ bg:"#33ffff", border:false, white:false },
	blue:{ bg:"#0000ff", border:false, white:true },
	purple:{ bg:"#990099", border:false, white:true },
	pink:{ bg:"#ff99cc", border:false, white:false },
	brown:{ bg:"#996600", border:false, white:true },
	black:{ bg:"#000000", border:false, white:true },
	grey:{ bg:"#666666", border:false, white:true },
	white:{ bg:"#ffffff", border:false, white:false },
	special:{ bg:"#ffffff", border:true, white:false }
};

var Characters = [
	{ name:"Colossus", range:0, targets:1, points:"175/125", clickList:
		[
			{	slot:{ value:1, colour:"red" },
				speed:{ value:10, colour:"special" },
				attack:{ value:11, colour:"green" },
				defense:{ value:18, colour:"special" },
				damage:{ value:4, colour:"white" },
				startBar:"red" },
			{	slot:{ value:2, colour:"white" },
				speed:{ value:9, colour:"special" },
				attack:{ value:11, colour:"green" },
				defense:{ value:17, colour:"pink" },
				damage:{ value:3, colour:"white" },
				startBar:"" },
			{	slot:{ value:3, colour:"blue" },
				speed:{ value:9, colour:"special" },
				attack:{ value:11, colour:"green" },
				defense:{ value:17, colour:"special" },
				damage:{ value:4, colour:"white" },
				startBar:"blue" },
			{	slot:{ value:4, colour:"white" },
				speed:{ value:9, colour:"pink" },
				attack:{ value:10, colour:"white" },
				defense:{ value:17, colour:"pink" },
				damage:{ value:3, colour:"pink" },
				startBar:"" },
			{	slot:{ value:5, colour:"white" },
				speed:{ value:9, colour:"pink" },
				attack:{ value:10, colour:"white" },
				defense:{ value:17, colour:"pink" },
				damage:{ value:3, colour:"pink" },
				startBar:"" },
			{	slot:{ value:6, colour:"yellow" },
				speed:{ value:8, colour:"pink" },
				attack:{ value:9, colour:"white" },
				defense:{ value:16, colour:"grey" },
				damage:{ value:4, colour:"orange" },
				startBar:"" },
			{	slot:{ value:7, colour:"white" },
				speed:{ value:6, colour:"green" },
				attack:{ value:9, colour:"white" },
				defense:{ value:16, colour:"grey" },
				damage:{ value:4, colour:"orange" },
				startBar:"" },
			{	slot:{ value:8, colour:"white" },
				speed:{ value:6, colour:"green" },
				attack:{ value:9, colour:"white" },
				defense:{ value:16, colour:"special" },
				damage:{ value:3, colour:"orange" },
				startBar:"" },
			{	slot:{ value:9, colour:"white" },
				speed:{ value:'KO', colour:"red" },
				attack:{ value:'KO', colour:"red" },
				defense:{ value:'KO', colour:"red" },
				damage:{ value:'KO', colour:"red" },
				startBar:"" },
			{	slot:{ value:10, colour:"white" },
				speed:{ value:'KO', colour:"red" },
				attack:{ value:'KO', colour:"red" },
				defense:{ value:'KO', colour:"red" },
				damage:{ value:'KO', colour:"red" },
				startBar:"" },
			{	slot:{ value:11, colour:"white" },
				speed:{ value:'KO', colour:"red" },
				attack:{ value:'KO', colour:"red" },
				defense:{ value:'KO', colour:"red" },
				damage:{ value:'KO', colour:"red" },
				startBar:"" },
			{	slot:{ value:12, colour:"white" },
				speed:{ value:'KO', colour:"red" },
				attack:{ value:'KO', colour:"red" },
				defense:{ value:'KO', colour:"red" },
				damage:{ value:'KO', colour:"red" },
				startBar:"" },
		]
	},
	{ name:"Magik", range:5, targets:2, points:"125/75", clickList:
		[
			{	slot:{ value:1, colour:"red" },
				speed:{ value:10, colour:"special" },
				attack:{ value:10, colour:"yellow" },
				defense:{ value:17, colour:"green" },
				damage:{ value:3, colour:"paleBlue" },
				startBar:"red" },
			{	slot:{ value:2, colour:"white" },
				speed:{ value:9, colour:"special" },
				attack:{ value:9, colour:"grey" },
				defense:{ value:17, colour:"green" },
				damage:{ value:3, colour:"paleBlue" },
				startBar:"" },
			{	slot:{ value:3, colour:"blue" },
				speed:{ value:10, colour:"special" },
				attack:{ value:9, colour:"grey" },
				defense:{ value:16, colour:"green" },
				damage:{ value:3, colour:"white" },
				startBar:"blue" },
			{	slot:{ value:4, colour:"white" },
				speed:{ value:9, colour:"special" },
				attack:{ value:8, colour:"yellow" },
				defense:{ value:16, colour:"paleBlue" },
				damage:{ value:2, colour:"black" },
				startBar:"" },
			{	slot:{ value:5, colour:"yellow" },
				speed:{ value:9, colour:"special" },
				attack:{ value:8, colour:"white" },
				defense:{ value:16, colour:"paleBlue" },
				damage:{ value:2, colour:"black" },
				startBar:"" },
			{	slot:{ value:6, colour:"white" },
				speed:{ value:8, colour:"green" },
				attack:{ value:9, colour:"red" },
				defense:{ value:15, colour:"paleGreen" },
				damage:{ value:2, colour:"white" },
				startBar:"" },
			{	slot:{ value:7, colour:"white" },
				speed:{ value:8, colour:"green" },
				attack:{ value:9, colour:"red" },
				defense:{ value:15, colour:"paleGreen" },
				damage:{ value:2, colour:"white" },
				startBar:"" },
			{	slot:{ value:8, colour:"white" },
				speed:{ value:'KO', colour:"red" },
				attack:{ value:'KO', colour:"red" },
				defense:{ value:'KO', colour:"red" },
				damage:{ value:'KO', colour:"red" },
				startBar:"" },
			{	slot:{ value:9, colour:"white" },
				speed:{ value:'KO', colour:"red" },
				attack:{ value:'KO', colour:"red" },
				defense:{ value:'KO', colour:"red" },
				damage:{ value:'KO', colour:"red" },
				startBar:"" },
			{	slot:{ value:10, colour:"white" },
				speed:{ value:'KO', colour:"red" },
				attack:{ value:'KO', colour:"red" },
				defense:{ value:'KO', colour:"red" },
				damage:{ value:'KO', colour:"red" },
				startBar:"" },
			{	slot:{ value:11, colour:"white" },
				speed:{ value:'KO', colour:"red" },
				attack:{ value:'KO', colour:"red" },
				defense:{ value:'KO', colour:"red" },
				damage:{ value:'KO', colour:"red" },
				startBar:"" },
			{	slot:{ value:12, colour:"white" },
				speed:{ value:'KO', colour:"red" },
				attack:{ value:'KO', colour:"red" },
				defense:{ value:'KO', colour:"red" },
				damage:{ value:'KO', colour:"red" },
				startBar:"" },
		]
	},
	{ name:"Professor X", range:8, targets:3, points:"150", clickList:
		[
			{	slot:{ value:1, colour:"red" },
				speed:{ value:7, colour:"special" },
				attack:{ value:11, colour:"blue" },
				defense:{ value:16, colour:"special" },
				damage:{ value:2, colour:"special" },
				startBar:"green" },
			{	slot:{ value:2, colour:"white" },
				speed:{ value:7, colour:"special" },
				attack:{ value:10, colour:"blue" },
				defense:{ value:17, colour:"special" },
				damage:{ value:2, colour:"special" },
				startBar:"" },
			{	slot:{ value:3, colour:"blue" },
				speed:{ value:8, colour:"special" },
				attack:{ value:10, colour:"blue" },
				defense:{ value:16, colour:"special" },
				damage:{ value:2, colour:"special" },
				startBar:"blue" },
			{	slot:{ value:4, colour:"white" },
				speed:{ value:8, colour:"special" },
				attack:{ value:9, colour:"paleBlue" },
				defense:{ value:16, colour:"red" },
				damage:{ value:1, colour:"black" },
				startBar:"" },
			{	slot:{ value:5, colour:"yellow" },
				speed:{ value:7, colour:"special" },
				attack:{ value:9, colour:"paleBlue" },
				defense:{ value:15, colour:"red" },
				damage:{ value:1, colour:"black" },
				startBar:"" },
			{	slot:{ value:6, colour:"white" },
				speed:{ value:7, colour:"special" },
				attack:{ value:9, colour:"paleBlue" },
				defense:{ value:15, colour:"red" },
				damage:{ value:1, colour:"black" },
				startBar:"" },
			{	slot:{ value:7, colour:"white" },
				speed:{ value:'KO', colour:"red" },
				attack:{ value:'KO', colour:"red" },
				defense:{ value:'KO', colour:"red" },
				damage:{ value:'KO', colour:"red" },
				startBar:"" },
			{	slot:{ value:8, colour:"white" },
				speed:{ value:'KO', colour:"red" },
				attack:{ value:'KO', colour:"red" },
				defense:{ value:'KO', colour:"red" },
				damage:{ value:'KO', colour:"red" },
				startBar:"" },
			{	slot:{ value:9, colour:"white" },
				speed:{ value:'KO', colour:"red" },
				attack:{ value:'KO', colour:"red" },
				defense:{ value:'KO', colour:"red" },
				damage:{ value:'KO', colour:"red" },
				startBar:"" },
			{	slot:{ value:10, colour:"white" },
				speed:{ value:'KO', colour:"red" },
				attack:{ value:'KO', colour:"red" },
				defense:{ value:'KO', colour:"red" },
				damage:{ value:'KO', colour:"red" },
				startBar:"" },
			{	slot:{ value:11, colour:"white" },
				speed:{ value:'KO', colour:"red" },
				attack:{ value:'KO', colour:"red" },
				defense:{ value:'KO', colour:"red" },
				damage:{ value:'KO', colour:"red" },
				startBar:"" },
			{	slot:{ value:12, colour:"white" },
				speed:{ value:'KO', colour:"red" },
				attack:{ value:'KO', colour:"red" },
				defense:{ value:'KO', colour:"red" },
				damage:{ value:'KO', colour:"red" },
				startBar:"" },
		]
	},
	{ name:"Magneto", range:8, targets:2, points:"200", clickList:
		[
			{	slot:{ value:1, colour:"red" },
				speed:{ value:10, colour:"grey" },
				attack:{ value:11, colour:"yellow" },
				defense:{ value:18, colour:"pink" },
				damage:{ value:4, coloru:"white" },
				startBar:"red" },
			{	slot:{ value:2, colour:"" },
				speed:{ value:9, colour:"special" },
				attack:{ value:11, colour:"yellow" },
				defense:{ value:17, colour:"pink" },
				damage:{ value:3, colour:"grey" },
				startBar:"" },
			{	slot:{ value:3, colour:"blue" },
				speed:{ value:10, colour:"grey" },
				attack:{ value:10, colour:"yellow" },
				defense:{ value:17, colour:"pink" },
				damage:{ value:3, colour:"grey" },
				startBar:"blue" },
			{	slot:{ value:4, colour:"" },
				speed:{ value:9, colour:"special" },
				attack:{ value:10, colour:"yellow" },
				defense:{ value:16, colour:"pink" },
				damage:{ value:3, colour:"black" },
				startBar:"" },
			{	slot:{ value:5, colour:"" },
				speed:{ value:8, colour:"special" },
				attack:{ value:10, colour:"white" },
				defense:{ value:16, colour:"orange" },
				damage:{ value:3, colour:"black" },
				startBar:"" },
			{	slot:{ value:6, colour:"yellow" },
				speed:{ value:8, colour:"white" },
				attack:{ value:9, colour:"white" },
				defense:{ value:16, colour:"orange" },
				damage:{ value:3, colour:"green" },
				startBar:"" },
			{	slot:{ value:7, colour:"" },
				speed:{ value:7, colour:"special" },
				attack:{ value:9, colour:"white" },
				defense:{ value:17, colour:"orange" },
				damage:{ value:2, colour:"green" },
				startBar:"" },
			{	slot:{ value:8, colour:"" },
				speed:{ value:7, colour:"special" },
				attack:{ value:9, colour:"yellow" },
				defense:{ value:17, colour:"white" },
				damage:{ value:2, colour:"green" },
				startBar:"" },
			{	slot:{ value:9, colour:"white" },
				speed:{ value:'KO', colour:"red" },
				attack:{ value:'KO', colour:"red" },
				defense:{ value:'KO', colour:"red" },
				damage:{ value:'KO', colour:"red" },
				startBar:"" },
			{	slot:{ value:10, colour:"white" },
				speed:{ value:'KO', colour:"red" },
				attack:{ value:'KO', colour:"red" },
				defense:{ value:'KO', colour:"red" },
				damage:{ value:'KO', colour:"red" },
				startBar:"" },
			{	slot:{ value:11, colour:"white" },
				speed:{ value:'KO', colour:"red" },
				attack:{ value:'KO', colour:"red" },
				defense:{ value:'KO', colour:"red" },
				damage:{ value:'KO', colour:"red" },
				startBar:"" },
			{	slot:{ value:12, colour:"white" },
				speed:{ value:'KO', colour:"red" },
				attack:{ value:'KO', colour:"red" },
				defense:{ value:'KO', colour:"red" },
				damage:{ value:'KO', colour:"red" },
				startBar:"" },
		]
	},
	{ name:"Namor", range:0, targets:1, points:"225/150", clickList:
		[
			{	slot:{ value:1, colour:"red" },
				speed:{ value:11, colour:"green" },
				attack:{ value:11, colour:"green" },
				defense:{ value:18, colour:"brown" },
				damage:{ value:4, colour:"white" },
				startBar:"red" },
			{	slot:{ value:2, colour:"white" },
				speed:{ value:10, colour:"red" },
				attack:{ value:10, colour:"pink" },
				defense:{ value:17, colour:"grey" },
				damage:{ value:3, colour:"orange" },
				startBar:"" },
			{	slot:{ value:3, colour:"" },
				speed:{ value:9, colour:"red" },
				attack:{ value:11, colour:"pink" },
				defense:{ value:16, colour:"grey" },
				damage:{ value:4, colour:"orange" },
				startBar:"" },
			{	slot:{ value:4, colour:"blue" },
				speed:{ value:9, colour:"green" },
				attack:{ value:11, colour:"green" },
				defense:{ value:17, colour:"brown" },
				damage:{ value:4, colour:"white" },
				startBar:"blue" },
			{	slot:{ value:5, colour:"" },
				speed:{ value:9, colour:"red" },
				attack:{ value:10, colour:"pink" },
				defense:{ value:16, colour:"grey" },
				damage:{ value:3, colour:"orange" },
				startBar:"" },
			{	slot:{ value:6, colour:"white" },
				speed:{ value:9, colour:"green" },
				attack:{ value:10, colour:"green" },
				defense:{ value:16, colour:"pink" },
				damage:{ value:3, colour:"orange" },
				startBar:"" },
			{	slot:{ value:7, colour:"yellow" },
				speed:{ value:8, colour:"red" },
				attack:{ value:9, colour:"green" },
				defense:{ value:16, colour:"pink" },
				damage:{ value:3, colour:"purple" },
				startBar:"" },
			{	slot:{ value:8, colour:"white" },
				speed:{ value:8, colour:"red" },
				attack:{ value:9, colour:"white" },
				defense:{ value:16, colour:"special" },
				damage:{ value:2, colour:"purple" },
				startBar:"" },
			{	slot:{ value:9, colour:"white" },
				speed:{ value:8, colour:"red" },
				attack:{ value:9, colour:"white" },
				defense:{ value:15, colour:"special" },
				damage:{ value:2, colour:"purple" },
				startBar:"" },
			{	slot:{ value:10, colour:"white" },
				speed:{ value:'KO', colour:"red" },
				attack:{ value:'KO', colour:"red" },
				defense:{ value:'KO', colour:"red" },
				damage:{ value:'KO', colour:"red" },
				startBar:"" },
			{	slot:{ value:11, colour:"white" },
				speed:{ value:'KO', colour:"red" },
				attack:{ value:'KO', colour:"red" },
				defense:{ value:'KO', colour:"red" },
				damage:{ value:'KO', colour:"red" },
				startBar:"" },
			{	slot:{ value:12, colour:"white" },
				speed:{ value:'KO', colour:"red" },
				attack:{ value:'KO', colour:"red" },
				defense:{ value:'KO', colour:"red" },
				damage:{ value:'KO', colour:"red" },
				startBar:"" },
		]
	},
	{ name:"Hope Summers", range:0, targets:1, points:"122", clickList:
		[
			{	slot:{ value:1, colour:"red" },
				speed:{ value:10, colour:"special" },
				attack:{ value:10, colour:"white" },
				defense:{ value:17, colour:"paleGreen" },
				damage:{ value:2, colour:"white" },
				startBar:"green" },
			{	slot:{ value:2, colour:"white" },
				speed:{ value:10, colour:"special" },
				attack:{ value:10, colour:"white" },
				defense:{ value:16, colour:"paleGreen" },
				damage:{ value:2, colour:"white" },
				startBar:"" },
			{	slot:{ value:3, colour:"blue" },
				speed:{ value:9, colour:"special" },
				attack:{ value:9, colour:"pink" },
				defense:{ value:16, colour:"paleGreen" },
				damage:{ value:2, colour:"brown" },
				startBar:"" },
			{	slot:{ value:4, colour:"white" },
				speed:{ value:9, colour:"orange" },
				attack:{ value:9, colour:"pink" },
				defense:{ value:16, colour:"purple" },
				damage:{ value:2, colour:"brown" },
				startBar:"" },
			{	slot:{ value:5, colour:"yellow" },
				speed:{ value:8, colour:"orange" },
				attack:{ value:9, colour:"pink" },
				defense:{ value:15, colour:"purple" },
				damage:{ value:2, colour:"brown" },
				startBar:"" },
			{	slot:{ value:6, colour:"white" },
				speed:{ value:8, colour:"black" },
				attack:{ value:10, colour:"white" },
				defense:{ value:15, colour:"purple" },
				damage:{ value:2, colour:"paleGreen" },
				startBar:"" },
			{	slot:{ value:7, colour:"white" },
				speed:{ value:8, colour:"black" },
				attack:{ value:10, colour:"white" },
				defense:{ value:15, colour:"black" },
				damage:{ value:2, colour:"paleGreen" },
				startBar:"" },
			{	slot:{ value:8, colour:"white" },
				speed:{ value:'KO', colour:"red" },
				attack:{ value:'KO', colour:"red" },
				defense:{ value:'KO', colour:"red" },
				damage:{ value:'KO', colour:"red" },
				startBar:"" },
			{	slot:{ value:9, colour:"white" },
				speed:{ value:'KO', colour:"red" },
				attack:{ value:'KO', colour:"red" },
				defense:{ value:'KO', colour:"red" },
				damage:{ value:'KO', colour:"red" },
				startBar:"" },
			{	slot:{ value:10, colour:"white" },
				speed:{ value:'KO', colour:"red" },
				attack:{ value:'KO', colour:"red" },
				defense:{ value:'KO', colour:"red" },
				damage:{ value:'KO', colour:"red" },
				startBar:"" },
			{	slot:{ value:11, colour:"white" },
				speed:{ value:'KO', colour:"red" },
				attack:{ value:'KO', colour:"red" },
				defense:{ value:'KO', colour:"red" },
				damage:{ value:'KO', colour:"red" },
				startBar:"" },
			{	slot:{ value:12, colour:"white" },
				speed:{ value:'KO', colour:"red" },
				attack:{ value:'KO', colour:"red" },
				defense:{ value:'KO', colour:"red" },
				damage:{ value:'KO', colour:"red" },
				startBar:"" },
		]
	},
	{ name:"Emma Frost", range:0, targets:1, points:"125/100", clickList:
		[
			{	slot:{ value:1, colour:"red" },
				speed:{ value:8, colour:"paleBlue" },
				attack:{ value:10, colour:"special" },
				defense:{ value:17, colour:"red" },
				damage:{ value:3, colour:"green" },
				startBar:"red" },
			{	slot:{ value:2, colour:"" },
				speed:{ value:8, colour:"paleBlue" },
				attack:{ value:10, colour:"special" },
				defense:{ value:18, colour:"red" },
				damage:{ value:3, colour:"green" },
				startBar:"" },
			{	slot:{ value:3, colour:"blue" },
				speed:{ value:7, colour:"green" },
				attack:{ value:10, colour:"white" },
				defense:{ value:17, colour:"special" },
				damage:{ value:3, colour:"black" },
				startBar:"blue" }
		]
	}
];

Panel = function(xPos, yPos, width, height) {
	this.clickPos = 0;

	// 3 pixel top, middle and bottom gap. That plus 2 lines of info.
	// should make up 25% of the total height.
	topPortion = height / 4;
	infoHeight = (topPortion - 9) / 2;
	infoWidth = width - 6;

	// 3 pixel gap at the bottom, the rest is used by the value panel.
	bottomPortion = height - topPortion - 3;

	// The background has a 2 pixel gap at its borders. The values
	// have 5 pixels between them. Make them square, giving us the total
	// width. The start bar takes up another 4 pixels on the left.
	valueSize = (bottomPortion - 14) / 3;
	backgroundWidth = (valueSize * 2) + 13;
	backgroundXPos = (width - backgroundWidth) / 2;

	// The buttons are 3 pixels away from the background with a 5%
	// gap to the edge, and half as high as the background.
	buttonWidth = backgroundXPos - 3 - width * 0.05;
	buttonYPos = topPortion + bottomPortion / 4;

	this.name = new TextBox(xPos + 3, yPos + 3, infoWidth, infoHeight, '#ffffff', 'Name', '#000000');
	this.points = new TextBox(xPos + 3, yPos + 6 + infoHeight, infoWidth / 2 - 1, infoHeight, '#ffffff', 'Points', '#000000');
	this.rangeTargets = new TextBox(xPos + 4 + infoWidth / 2, yPos + 6 + infoHeight, infoWidth / 2 - 1, infoHeight, '#ffffff', 'Range', '#000000');
	this.background = new TextBox(xPos + backgroundXPos, yPos + topPortion, backgroundWidth, bottomPortion, '#ffffff', '', '#ffffff');
	this.startBar = new TextBox(xPos + backgroundXPos + 1, yPos + topPortion, 3, bottomPortion, '#ff0000', '', '#ffffff');
	this.speed = new Value(xPos + backgroundXPos + 6, yPos + topPortion + 2, valueSize, valueSize, 'special', '1');
	this.attack = new Value(xPos + backgroundXPos + 6, yPos + topPortion + 7 + valueSize, valueSize, valueSize, 'special', '2');
	this.defense = new Value(xPos + backgroundXPos + 6, yPos + topPortion + 12 + valueSize * 2, valueSize, valueSize, 'special', '3');
	this.slot = new Value(xPos + backgroundXPos + 11 + valueSize, yPos + topPortion + 7 + valueSize, valueSize, valueSize, 'special', '4');
	this.damage = new Value(xPos + backgroundXPos + 11 + valueSize, yPos + topPortion + 12 + valueSize * 2, valueSize, valueSize, 'special', '5');

	this.prevButton = new TextBox(xPos + width * 0.05, yPos + buttonYPos, buttonWidth, bottomPortion / 2, "#000000", '-', '#ffffff');
	this.nextButton = new TextBox(xPos + width * 0.05 + buttonWidth + 6 + backgroundWidth, yPos + buttonYPos, buttonWidth, bottomPortion / 2, "#000000", '+', '#ffffff');

	this.prevClicked = function() {
		this.clickPos--;

		if (this.clickPos < 0)
		{
			this.clickPos = this.character.clickList.length - 1;
		}

		this.updateInfo();
	}
	
	this.nextClicked = function() {
		this.clickPos++;
		if (this.clickPos >= this.character.clickList.length)
		{
			this.clickPos = 0;
		}

		this.updateInfo();
	}
	
	this.prevButton.view.on('InputSelect', bind(this, this.prevClicked));
	this.nextButton.view.on('InputSelect', bind(this, this.nextClicked));

	this.updateInfo = function() {
		this.name.setText(this.character.name);
		this.points.setText(this.character.points);
		this.rangeTargets.setText(this.character.range + '->' + this.character.targets);

		if (this.character.clickList[this.clickPos].startBar.length > 0)
			this.startBar.setBackground(this.character.clickList[this.clickPos].startBar);
		else
			this.startBar.setBackground('#ffffff');

		this.updateValue(this.speed, this.character.clickList[this.clickPos].speed);
		this.updateValue(this.attack, this.character.clickList[this.clickPos].attack);
		this.updateValue(this.defense, this.character.clickList[this.clickPos].defense);
		this.updateValue(this.slot, this.character.clickList[this.clickPos].slot);
		this.updateValue(this.damage, this.character.clickList[this.clickPos].damage);
	}

	this.updateValue = function(value, stat) {
		value.update(stat.value, stat.colour);
	}

	this.setCharacter = function(character) {
		this.character = character;
		this.clickPos = 0;
		this.updateInfo();
	}
};

Value = function(xPos, yPos, width, height, colour, text) {
	this.background = new View({
		superview: backgroundView,
		x: xPos,
		y: yPos,
		width: width,
		height: height,
		backgroundColor: '#000000',
		zIndex: 19
	});

	this.label = new TextView({
		superview: backgroundView,
		x: this.background.style.x + 1,
		y: this.background.style.y + 1,
		width: this.background.style.width - 2,
		height: this.background.style.height - 2,
		backgroundColor: '#ff0000',
		color: '#0000ff',
		text: '0',
		layout: 'box',
		horizontalAlign: 'center',
		verticalAlign: 'top',
		zIndex: 20
	});

	this.setValue = function(text) {
		this.label.setText(text);
	}

	this.setColour = function(colour) {
		if (PowerColours[colour])
		{
			this.colour = PowerColours[colour];
		}
		else
		{
			this.colour = PowerColours["white"];
		}

		if (this.colour.border)
		{
			this.background.show();
		}
		else
		{
			this.background.hide();
		}

		this.label.updateOpts({ backgroundColor: this.colour.bg });

		if (this.colour.white)
		{
			this.label.updateOpts({ color: '#ffffff' });
		}
		else
		{
			this.label.updateOpts({ color: '#000000' });
		}
	}

	this.update = function(value, colour) {
		this.setColour(colour);
		this.setValue(value);
	}

	this.update(text, colour);
};

TextBox = function(xPos, yPos, width, height, colour, label, labelColour) {
	this.view = new TextView({
		superview: backgroundView,
		x: xPos,
		y: yPos,
		width: width,
		height: height,
		backgroundColor: colour,
		color: labelColour,
		text: label,
		layout: 'box',
		horizontalAlign: 'center',
		verticalAlign: 'middle'
	});

	this.setText = function(text) {
		this.view.setText(text);
	}

	this.setBackground = function(colour) {
		this.view.updateOpts({ backgroundColor: colour });
	}
};

exports = Class(GC.Application, function () {
	this.initUI = function () {
		backgroundView = new View({
			superview: this.view,
			backgroundColor: "#444488",
			x: 0,
			y: 0,
			width: device.width,
			height: device.height
		});

		var dials = new Array(6);
		var dialIdx = 0;
		for (y = 0; y < 2; y++)
		{
			for (x = 0; x < 3; x++)
			{
				dials[dialIdx] = new Panel(x * device.width / 3, y * device.height / 2, device.width / 3, device.height / 2);
				dials[dialIdx].setCharacter(Characters[dialIdx % 6]);
				dialIdx++;
			}
		}
	};

	this.launchUI = function () {};
});
