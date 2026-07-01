(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"18_Jarren_project_230426_new_atlas_1", frames: [[1298,0,408,612],[1298,614,408,612],[0,802,408,612],[0,0,1296,800]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Ball = function() {
	this.initialize(ss["18_Jarren_project_230426_new_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.player_dribble = function() {
	this.initialize(ss["18_Jarren_project_230426_new_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Player_Kicking = function() {
	this.initialize(ss["18_Jarren_project_230426_new_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Stadium_bg = function() {
	this.initialize(ss["18_Jarren_project_230426_new_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.welcome_player = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AinEJIAAoFICAAAIAABJQAgg0AZgQQAagRAiAAQAuAAAsAaIgrB3QgigWgeAAQgdAAgUAQQgTAQgLApQgMAqAACDIAACgg");
	this.shape.setTransform(364.75,8.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ai+C3QgzhHAAhsQAAiABDhJQBEhJBnAAQBzAABCBNQBDBMgDCdIlWAAQABA9AgAiQAgAhAuABQAgAAAWgSQAWgRALgnICJAWQgaBMg5AnQg5AnhWAAQiGAAhBhYgAhFiEQgdAgAAA5IDMAAQgBg8gegfQgdgfgqAAQgsAAgdAhg");
	this.shape_1.setTransform(313.1314,8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjdFkIgLhsQAgAHAZAAQAxAAAXgcQAXgcAMgrIjGoHICSAAIB8FvIB4lvICOAAIi2HxIgiBbQgRAtgRAYQgQAYgUAPQgVAPggAIQgeAJgnAAQgoAAgngJg");
	this.shape_2.setTransform(257.5,19.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AjEDkQgvgrABhDQAAgsAUgiQAWgjAmgRQAmgSBHgOQBfgTAlgPIAAgNQAAgogTgQQgUgSg2AAQgkAAgUAPQgVAOgNAkIh8gXQAVhKAzglQA0gkBkAAQBbAAAtAWQAtAWATAiQASAgAABaIgCCfQAABEAHAhQAGAgATAlIiIAAIgOgoIgEgQQgkAignARQgnARguAAQhQAAgugrgAgEAgQg5AMgSALQgaAUAAAdQAAAdAWAUQAVAWAhAAQAkAAAigZQAZgSAHgbQAGgSAAgxIAAgcQgaAKg5AMg");
	this.shape_3.setTransform(202.45,8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhDFmIAArLICIAAIAALLg");
	this.shape_4.setTransform(160.8,-1.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AkRFmIAArLIDoAAQCDAAAoALQA9AQApA2QAqA2AABVQAABCgYAtQgYAsgkAaQglAagnAHQg0ALhgAAIhfAAIAAEOgAiBghIBQAAQBUAAAdgLQAdgLAQgYQAQgYAAgfQAAgngXgaQgWgZgkgHQgagFhNAAIhGAAg");
	this.shape_5.setTransform(114.75,-1.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ai+C3QgzhHAAhsQAAiABDhJQBEhJBnAAQBzAABCBNQBDBMgDCdIlWAAQABA9AgAiQAgAhAuABQAgAAAWgSQAWgRALgnICJAWQgaBMg5AnQg5AnhWAAQiGAAhBhYgAhFiEQgdAgAAA5IDMAAQgBg8gegfQgdgfgqAAQgsAAgdAhg");
	this.shape_6.setTransform(24.0314,8.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AD0EJIAAknQAAhNgOgXQgTgdgnAAQgdAAgaASQgZARgLAiQgMAiAABIIAAD5IiIAAIAAkbQAAhMgHgWQgHgWgQgKQgPgLgbAAQgfAAgaARQgZARgLAgQgLAhAABJIAAD8IiJAAIAAoFIB+AAIAABGQBEhSBeAAQAyAAAkAUQAkAVAXApQAjgpAngVQAogUAtAAQA5AAAnAXQAoAXATAtQAOAhAABLIAAFKg");
	this.shape_7.setTransform(-47.975,8.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AiGDvQhBgggig+Qgig+ABhZQgBhFAig/QAihAA+giQA+giBLAAQB1AABMBNQBKBMAAB1QABB0hMBOQhMBNh0AAQhFAAhBgggAhZh1QglApAABMQAABNAlApQAkApA1ABQA2gBAkgpQAkgpAAhNQAAhMgkgpQgkgpg2AAQg1AAgkApg");
	this.shape_8.setTransform(-122.6,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AiwDHQhEhHAAiAQAAh+BEhIQBEhIBzAAQBeAAA5ApQA3ApAZBTIiIAYQgGgogYgVQgZgUgmAAQgzAAgeAkQgfAjAABTQAABbAgAnQAeAlA0ABQAnAAAZgXQAYgWALg2ICHAWQgVBdg8AwQg8AvhkAAQhwAAhEhIg");
	this.shape_9.setTransform(-180.325,8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhEFmIAArLICJAAIAALLg");
	this.shape_10.setTransform(-222.7,-1.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ai+C3QgzhHAAhsQAAiABDhJQBEhJBnAAQBzAABCBNQBDBMgDCdIlWAAQABA9AgAiQAgAhAuABQAgAAAWgSQAWgRALgnICJAWQgaBMg5AnQg5AnhWAAQiGAAhBhYgAhFiEQgdAgAAA5IDMAAQgBg8gegfQgdgfgqAAQgsAAgdAhg");
	this.shape_11.setTransform(-264.9686,8.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ACOFmIiOoWIiNIWIidAAIirrLICUAAIBsHrICDnrICrAAIB9HzIBunzICSAAIiuLLg");
	this.shape_12.setTransform(-337.625,-1.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-386.9,-57.9,769.4,115.8);


(lib.startbutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjKFTQAAg0ADhmQAFhnAAg0QgBgggogBIgKAAIgKABQgdABAAgWQAAgMACgZIACgmIgCgzQgCghAAgQQAAgQAxgBQAcgBADgOQAFgegChAIgDhgQAAhaARAAQAVAAAnAKQAsAKARABIB2APQAUACAAALQAAAggFA/QgFA/AAAfQAAAmAXAAIBSgCQA3gCAcgBQARAAAAAMQAAASgEAjQgEAlAAARIABA2IABA3QAAAPgXAAIg0gBIg0gBIg6AAQgLAAAAAiIAAA3IAAA3QAABCAPAYQAVAiA9AAQAUAAAkgIQAkgKAOAAQARAAAAARQAAAYgFAuQgHAwAAAWQAAAXgFAFQgEAGgVAMQhkA3h6AAQjfABAAisg");
	this.shape.setTransform(355.95,98.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjVF9QgagDABgWIABi6IAAi6QAAi2ghh2QgCgHAAgEQAAgMAMgEQArgFBSgMQB7gYADgBQAOAAADAyQAEAvAKABIAAAAIAAAAQgIgBBIgnQBLgpBFAAQArAAAAASQAAAXgFApQgEAsgBAUIABA8IABA9QAAAdghAAIgrgBQgcgCgOAAQhBAAgXAUQgYAUAAA9IACBlIABBlQAAAXADAtQADAsAAAVQAAATgaADQgkADhNAAQhKgBgsgEg");
	this.shape_1.setTransform(296.9,109.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AlFETQhehwAAibQAAizBhhtQBlhxCvgBQB5ABBHBVQADAEACAAQAIAAAJgmQAIgmAMABQAdAABRAQQBNAPAiALQALAFAAAIIgCAQQgZCNAACdQgBA6AIB2QAGB2ABA7QAAAfgbADQhhAGh8ABQgPAAgEgtQgGgtgHAAQgGACgKAKQhXBZhjAAQiXAAhjh4gAhyh0QgpArAABDQAAA+AsAtQArAtA+AAQBBAAAqgrQAqgrAAhCQAAhCgpgrQgqgrhCAAQhDAAgpAqg");
	this.shape_2.setTransform(217.25,110.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AjKFTQAAg0ADhmQAFhnAAg0QgBgggogBIgKAAIgKABQgdABAAgWQAAgMACgZIACgmIgCgzQgCghAAgQQAAgQAxgBQAdgBACgOQAFgegChAIgDhgQAAhaARAAQAVAAAnAKQAsAKARABIB2APQAUACAAALQAAAggFA/QgFA/AAAfQAAAmAXAAIBSgCQA3gCAcgBQARAAAAAMQAAASgEAjQgEAlAAARIABA2IABA3QAAAPgXAAIg0gBIgzgBIg7AAQgLAAAAAiIAAA3IAAA3QAABCAPAYQAVAiA9AAQAUAAAkgIQAkgKAOAAQARAAAAARQAAAYgFAuQgHAwAAAWQAAAXgFAFQgEAGgVAMQhkA3h6AAQjfABAAisg");
	this.shape_3.setTransform(141.85,98.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AjdHYQg+htAAgYQAAgJANgCQBwgaAkgRQBRgpAAhPQAAgyg1g/QhbhogIgMQg2hRAAhhQAAiOCEheQBqhOCcgXIANgBQALAAAIATQAUA4BJCUQADAFAAADQAAANgOAAIgVgCQgPgCgIAAQg4AAgqAZQgyAeAAA1QAAAvA4BFIBnCCQA3BVAABVQAACdiEBxQh1BjimAbIgKABQgSAAg9htg");
	this.shape_4.setTransform(77.7,93.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("EgihAOTIAA8lMBFDAAAIAAclg");
	this.shape_5.setTransform(220.975,91.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,442,183);


(lib.stars = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCC66").s().p("EgijAI3ImEipIGYhxIApmkIDpFhIGdhbIkIFKIDWFtImMiVIkZE8gEAhhADSIkNhRIEFhqIgFjpImEAKIiEF1IiEl1ImMgKIE6jxIhxl8IFHDgIFHjgIhxF8IEyDqIgBgpIC1DXIELhcIiVDuICqDhIkShEIihDngAqoAFIlRg0IEnirIg2lRID+DkIEwibIiLE4IDyDwIlTgkIibEwgAE6mjIlLhVIE3iOIgWlWIDoD8IE+h+IipEqIDbEJIlQhFIi4Ehg");
	this.shape.setTransform(259.975,98.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,520,197.9);


(lib.Restart_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF33").s().p("AgLC6QgQgHgIgKQgHgLgDgSQgCgNAAgoIAAh5IgiAAIAAg7IAiAAIAAg3IBJgsIAABjIAzAAIAAA7IgzAAIAABwQAAAiABAGQACAGAFADQAFAEAHAAQALAAAUgHIAFA6QgZALghAAQgUAAgPgHg");
	this.shape.setTransform(40.1,-38.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF33").s().p("AhaCPIAAkXIBFAAIAAAoQASgcANgJQAOgJASAAQAZAAAYAOIgXBAQgTgMgQAAQgQAAgKAJQgKAIgGAXQgHAWAABHIAABWg");
	this.shape_1.setTransform(22.675,-34.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF33").s().p("AhpB7QgagYABgkQAAgXALgTQAMgTAUgIQAVgKAmgIQAygJAVgJIAAgHQAAgWgLgJQgKgJgcAAQgVAAgLAIQgLAIgHATIhCgLQALgpAbgUQAcgTA2AAQAygBAXAMQAZAMAKASQAJASAAAxIAABVQAAAlAEARQADASAJAUIhJAAIgHgWIgCgJQgUATgVAJQgVAJgYAAQgrAAgZgXgAgCARQgeAGgJAHQgPAKAAAQQAAAPALAMQAMALASAAQATAAASgNQANgKAFgPQADgJAAgbIAAgOQgOAFgfAGg");
	this.shape_2.setTransform(-4.95,-33.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF33").s().p("AgLC6QgQgHgHgKQgIgLgDgSQgDgNAAgoIAAh5IghAAIAAg7IAhAAIAAg3IBKgsIAABjIAyAAIAAA7IgyAAIAABwQAAAiACAGQABAGAFADQAFAEAHAAQALAAATgHIAGA6QgZALghAAQgUAAgPgHg");
	this.shape_3.setTransform(-28.95,-38.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF33").s().p("AhWB7QghgXgLgoIBLgLQAFAWAOAKQAPAMAZAAQAcAAAPgLQAKgHAAgNQAAgIgGgGQgFgFgTgEQhZgUgYgRQghgVAAgpQAAgkAcgYQAdgZA9AAQA4gBAcAUQAcASAKAkIhFANQgFgQgMgIQgNgJgWAAQgdAAgNAIQgIAGAAAJQAAAIAHAGQAKAHA6ANQA7AOAYAUQAXASAAAkQAAAmggAbQggAcg/AAQg5AAghgXg");
	this.shape_4.setTransform(-53.725,-33.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF33").s().p("AhmBiQgcgmAAg6QAAhEAlgoQAkgnA4AAQA9AAAkApQAlApgCBUIi5AAQABAhARATQARASAZAAQARAAAMgKQAMgJAGgVIBKAMQgOApgfAVQgfAVguAAQhIABgjgxgAglhHQgQASABAeIBtAAQAAgggQgRQgQgRgXAAQgXAAgQASg");
	this.shape_5.setTransform(-83.3198,-33.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FF33").s().p("ABQDBIg4hUQgdgtgLgMQgLgLgNgFQgMgEgbAAIgQAAIAAChIhOAAIAAmBIClAAQA9AAAcAKQAcALARAaQAQAbAAAiQAAAsgZAcQgaAbgzAIQAaAOAQASQARASAcAtIAvBLgAhfgdIA6AAQA3AAAOgFQAOgEAIgMQAIgMAAgRQAAgTgKgMQgLgMgTgEQgJgBgvAAIg9AAg");
	this.shape_6.setTransform(-115.775,-39.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AxGFzIAArlMAiNAAAIAALlg");
	this.shape_7.setTransform(-42.575,-43.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152,-80.3,218.9,74.1);


(lib.Player_Kicking_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Player_Kicking();
	this.instance.setTransform(-135,-362);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135,-362,408,612);


(lib.player_dribble_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.player_dribble();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,408,612);


(lib.Home_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhmBjQgcgmAAg7QAAhFAlgnQAkgoA4AAQA9AAAkAqQAlApgCBUIi5AAQABAhARATQARASAZAAQARAAAMgJQAMgKAGgVIBKANQgOAogfAVQgfAWguAAQhIgBgjgvgAglhHQgQARABAfIBtAAQAAgggQgRQgQgQgXAAQgXAAgQARg");
	this.shape.setTransform(144.7802,55.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACECPIAAifQAAgpgIgNQgKgPgWAAQgPAAgOAJQgOAKgGASQgFASgBAnIAACGIhJAAIAAiYQAAgpgDgMQgFgMgIgGQgIgFgOAAQgRAAgOAJQgOAJgGARQgFASAAAnIAACIIhLAAIAAkXIBFAAIAAAmQAkgsAzAAQAaAAAVALQASALANAWQASgWAWgLQAVgLAZAAQAeAAAWANQAVAMAKAYQAIASAAAoIAACyg");
	this.shape_1.setTransform(105.9,55.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhICBQgjgSgSghQgSgigBgvQABglASgjQASgiAhgSQAigSAogBQBAAAAoAqQAoApAAA/QAAA/goApQgpAqg/ABQglAAgjgSgAgvg/QgUAXAAAoQAAAqAUAWQATAWAcAAQAdAAAUgWQAUgWgBgqQABgogUgXQgUgWgdAAQgcAAgTAWg");
	this.shape_2.setTransform(65.6,55.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABNDBIAAipIiYAAIAACpIhPAAIAAmBIBPAAIAACYICYAAIAAiYIBNAAIAAGBg");
	this.shape_3.setTransform(29.4,50.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006699").s().p("AskHgIAAu/IZJAAIAAO/g");
	this.shape_4.setTransform(88.5,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,0,178,96);


(lib.Football_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkDBIAAmBIBJAAIAAGBg");
	this.shape.setTransform(230.6,46.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkDBIAAmBIBJAAIAAGBg");
	this.shape_1.setTransform(215.6,46.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhpB7QgagXAAglQAAgXAMgSQALgUAVgIQAUgKAngHQAzgLAUgHIAAgIQAAgVgLgKQgLgIgcgBQgUABgKAHQgMAIgGATIhEgLQALgqAdgTQAbgUA3AAQAwAAAZAMQAYAMAKATQAKARAAAwIgBBWQAAAlADASQAEARAKAUIhKAAIgHgWIgDgJQgSATgWAJQgUAKgZAAQgsAAgYgYgAgBARQgfAHgKAGQgOAKAAAQQAAAPAMAMQALALASAAQATAAASgNQAOgKAEgOQADgKAAgaIAAgPQgPAEgdAHg");
	this.shape_2.setTransform(193,52);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaC4QgYgLgRgYIAAApIhFAAIAAmBIBKAAIAACKQAjgnAuAAQAzAAAhAmQAiAkAABFQAABIgiAmQgjAogwAAQgXAAgXgNgAgsgSQgSAUAAAqQAAArAOAWQATAdAfAAQAYAAASgVQARgVAAgtQAAgwgSgUQgRgWgaAAQgbABgRAUg");
	this.shape_3.setTransform(162.175,47);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLC6QgQgHgHgKQgIgLgDgSQgCgNgBgoIAAh5IgiAAIAAg7IAiAAIAAg3IBKgsIAABjIAyAAIAAA7IgyAAIAABwQAAAiACAGQABAGAFADQAFAEAIAAQAKAAATgHIAHA6QgaALghAAQgUAAgPgHg");
	this.shape_4.setTransform(136,47.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhICBQgjgRgSgiQgSghAAgwQAAglASgiQASgjAigSQAggTApAAQBAAAAoAqQApApAAA/QgBA+gpArQgpAqg9AAQgmgBgjgRgAgwg/QgTAWgBApQABApATAXQAUAWAcAAQAdAAAUgWQATgXAAgpQAAgpgTgWQgUgWgdAAQgcAAgUAWg");
	this.shape_5.setTransform(110.55,52);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhICBQgjgRgSgiQgTghAAgwQAAglATgiQASgjAigSQAggTApAAQA/AAApAqQAoApAAA/QABA+gpArQgpAqg/AAQglgBgjgRgAgvg/QgVAWABApQgBApAVAXQATAWAcAAQAdAAAUgWQAUgXAAgpQAAgpgUgWQgUgWgdAAQgcAAgTAWg");
	this.shape_6.setTransform(77.55,52);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AiDDBIAAmBIEHAAIAABBIi5AAIAABcICgAAIAABAIigAAIAACkg");
	this.shape_7.setTransform(45.2,46.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("A2aHlIAAvJMAs1AAAIAAPJg");
	this.shape_8.setTransform(143.475,48.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,287,97);


(lib.Football_Ball = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Ball();
	this.instance.setTransform(-201,-135,0.3433,0.3433);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-201,-135,140.1,210.1);


// stage content:
(lib._18_Jarren_project_230426_new = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,49,174];
	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.Home_Button.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_12.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_12()
		{
			this.gotoAndPlay(1);
		}
	}
	this.frame_49 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		When the user click on the "start" button, it will bring the user to frame 51 and start the aniation
		Instructions:
		1. Change the number in the bracket to the frame number that you want the user to let the animation start about the user when the user press the "start" button
		*/
		
		this.Start_Button.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_10.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_10()
		{
			this.gotoAndPlay(51);
		}
	}
	this.frame_174 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Web Page
		When the user click on the "football" button, it will bring the user to the football association wikipedia link 
		Instructions:
		1. Replace the link with the URL address that the user want.
		   Add the quotation marks ("").
		*/
		
		this.Football_Button.addEventListener("click", fl_ClickToGoToWebPage_9);
		
		function fl_ClickToGoToWebPage_9() {
			window.open("https://en.wikipedia.org/wiki/Association_football", "_blank");
		}
		
		
		
		/* Click to Go to Frame and Play
		When the user click on the "Restart" button, it will go to frame 50 and play from there.
		Instructions:
		1. Change the number in the bracket below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		*/
		
		this.Restart_Button.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_14.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_14()
		{
			this.gotoAndPlay(50);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(125).call(this.frame_174).wait(81));

	// Football_Button
	this.Football_Button = new lib.Football_Button();
	this.Football_Button.name = "Football_Button";
	this.Football_Button.setTransform(186,0);
	this.Football_Button._off = true;
	new cjs.ButtonHelper(this.Football_Button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Football_Button).wait(174).to({_off:false},0).to({_off:true},1).wait(80));

	// Home_Button
	this.Home_Button = new lib.Home_Button();
	this.Home_Button.name = "Home_Button";
	new cjs.ButtonHelper(this.Home_Button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Home_Button).wait(174).to({_off:true},1).wait(80));

	// Restart_Button
	this.Restart_Button = new lib.Restart_Button();
	this.Restart_Button.name = "Restart_Button";
	this.Restart_Button.setTransform(653.25,104.15,0.9615,1.2789,0,0,0,0.1,0.1);
	this.Restart_Button._off = true;
	new cjs.ButtonHelper(this.Restart_Button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Restart_Button).wait(174).to({_off:false},0).to({_off:true},1).wait(80));

	// Football_Player
	this.instance = new lib.player_dribble_1("synched",0);
	this.instance.setTransform(-101.15,471.75,0.5338,0.5338,0,0,0,204,306);
	this.instance._off = true;

	this.instance_1 = new lib.Player_Kicking_1("synched",0);
	this.instance_1.setTransform(437,653,0.5338,0.5338,0,0,0,204,306);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},50).to({state:[{t:this.instance}]},14).to({state:[{t:this.instance}]},35).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},14).to({state:[{t:this.instance_1}]},1).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({_off:false},0).to({x:99,y:473.1},14).to({x:210.75},35).wait(10).to({startPosition:0},0).to({regX:204.1,regY:306.1,x:367.35,y:478.8},14).to({_off:true,regX:204,regY:306,x:437,y:653},1).wait(131));

	// football
	this.instance_2 = new lib.Football_Ball("synched",0);
	this.instance_2.setTransform(166.1,543.7,0.5979,0.5979,0,0,0,-130.9,-29.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50).to({_off:false},0).to({x:298.3},49).to({x:445.5},15).wait(10).to({x:460.75,y:547.95},0).to({guide:{path:[460.7,547.9,544.6,460.4,632.8,497.3]}},50).wait(81));

	// Welcome_Player_Text
	this.instance_3 = new lib.welcome_player("synched",0);
	this.instance_3.setTransform(-433.2,129,1,1,0,0,0,-2.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:1227.35},49).to({_off:true},1).wait(205));

	// Stars
	this.instance_4 = new lib.stars("synched",0);
	this.instance_4.setTransform(390.95,256,1,1,0,0,0,259.9,98.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({_off:false},0).to({_off:true},1).wait(205));

	// Start_Button
	this.Start_Button = new lib.startbutton();
	this.Start_Button.name = "Start_Button";
	this.Start_Button.setTransform(224.45,388.2,0.7689,0.7689);
	this.Start_Button._off = true;
	new cjs.ButtonHelper(this.Start_Button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Start_Button).wait(49).to({_off:false},0).to({_off:true},1).wait(205));

	// Stadium_bg
	this.instance_5 = new lib.Stadium_bg();
	this.instance_5.setTransform(-7,-7,0.6269,0.7669);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},175).wait(80));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-417.9,293,2029.9,349.1);
// library properties:
lib.properties = {
	id: 'C6FB65DF5BC2C745AE9F18B0636202AA',
	width: 800,
	height: 600,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/18_Jarren_project_230426_new_atlas_1.png", id:"18_Jarren_project_230426_new_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C6FB65DF5BC2C745AE9F18B0636202AA'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;