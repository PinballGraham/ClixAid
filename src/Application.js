import ui.TextView as TextView;
import ui.View as View;
import device;
import event.Emitter as Emitter;

var PowerColours = {
	red:{ bg:"#ff0000", border:false, white:false },
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
	{ name:"Emma Frost", range:0, targets:1, points:"125/100", clickList:
		[
			{	slot:{ value:1, color:"red" },
				speed:{ value:8, color:"paleBlue" },
				attack:{ value:10, color:"special" },
				defense:{ value:17, color:"red" },
				damage:{ value:3, color:"green" },
				startBar:"red" },
			{	slot:{ value:2, color:"" },
				speed:{ value:8, color:"paleBlue" },
				attack:{ value:10, color:"special" },
				defense:{ value:18, color:"red" },
				damage:{ value:3, color:"green" },
				startBar:"" },
			{	slot:{ value:3, color:"blue" },
				speed:{ value:7, color:"green" },
				attack:{ value:10, color:"white" },
				defense:{ value:17, color:"special" },
				damage:{ value:3, color:"black" },
				startBar:"blue" }
		]
	},
	{ name:"Magneto", range:6, targets:2, points:"200", clickList:
		[
			{	slot:{ value:1, color:"red" },
				speed:{ value:10, color:"grey" },
				attack:{ value:11, color:"yellow" },
				defense:{ value:18, color:"pink" },
				damage:{ value:4, color:"white" },
				startBar:"red" },
			{	slot:{ value:2, color:"" },
				speed:{ value:8, color:"special" },
				attack:{ value:10, color:"yellow" },
				defense:{ value:18, color:"pink" },
				damage:{ value:3, color:"grey" },
				startBar:"" }
		]
	}
];

Panel = function(xPos, yPos, width, height) {
	this.clickPos = 0;
	this.xPos = xPos;
	this.yPos = yPos;
	this.width = width;
	this.height = height;
	this.prevButton = new Button(xPos + 0.04, yPos + 0.1, 0.1, 0.1, "#ffffff");
	this.nextButton = new Button(xPos + 0.18, yPos + 0.1, 0.1, 0.1, "#000000");

	this.prevClicked = function() {
		this.clickPos--;
	}
	
	this.nextClicked = function() {
		this.clickPos++;
	}
	
	this.prevButton.view.on('InputSelect', bind(this, this.prevClicked));
	this.nextButton.view.on('InputSelect', bind(this, this.nextClicked));

	this.setCharacter = function(character) {
		this.character = character;
		this.clickPos = 0;
	}
};

Rect = function(xPos, yPos, width, height, colour, text) {
	this.background = new View({
		superview: backgroundView,
		x: (device.width * xPos),
		y: (device.height * yPos),
		width: (device.width * width),
		height: (device.height * height),
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
		verticalAlign: 'middle',
		zIndex: 20
	});

	this.setText = function(text) {
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

	this.setColour(colour);
	this.setText(text);
};

Button = function(xPos, yPos, width, height, colour) {
	var emitter = new Emitter();

	this.view = new View({
		superview: backgroundView,
		x: (device.width * xPos),
		y: (device.height * yPos),
		width: (device.width * width),
		height: (device.height * height),
		backgroundColor: colour
	});
};

exports = Class(GC.Application, function () {
	this.initUI = function () {
		backgroundView = new View({
			superview: this.view,
			backgroundColor: "#111144",
			x: 0,
			y: 0,
			width: device.width,
			height: device.height
		});

//		var dials = new Array(6);
//		var dialIdx = 0;
//		for (y = 0; y < 2; y++)
//		{
//			for (x = 0; x < 3; x++)
//			{
//				dials[dialIdx] = new Panel(x * 0.33, y * 0.5, 0.33, 0.5);
//				dialIdx++;
//			}
//		}

		this.testRect1 = new Rect(0.15, 0.15, 0.25, 0.25, "pink", "3");
		this.testRect2 = new Rect(0.65, 0.65, 0.25, 0.25, "green", "6");
		this.testRect2.setColour("paleBlue");
	};

	this.launchUI = function () {};
});
