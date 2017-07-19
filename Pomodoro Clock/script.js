var count = 25;
var breakcount = 5;
var Timer;
var TotalSeconds;
var pause = false, initiate = false, finished = false;

var canvas = document.getElementById('Circle');
var context = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 150;

var full = radius*2;
var amount = 0;
var amountToIncrease = 10;
var click = true;

function draw() {
    context.save();
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.clip(); // Make a clipping region out of this path
    // instead of filling the arc, we fill a variable-sized rectangle
    // that is clipped to the arc
    context.fillStyle = '#13a8a4';
    // We want the rectangle to get progressively taller starting from the bottom
    // There are two ways to do this:
    // 1. Change the Y value and height every time
    // 2. Using a negative height
    // I'm lazy, so we're going with 2
    context.fillRect(centerX - radius, centerY + radius, radius * 2, -amount);
    context.restore(); // reset clipping region

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.lineWidth = 10;
    context.strokeStyle = '#000000';
    context.stroke();
    
    // Every time, raise amount by some value:
    amount += amountToIncrease;
    if (amount > radius*2){
			reset();
			amount = 0; // restart
		}
}

draw();

function CreateTimer(TimerID, Time) 
{
	Timer = document.getElementById(TimerID);
	TotalSeconds = Time*60;
	calculateRate();
	UpdateTimer();
	
	window.setTimeout("Tick()", 1000);
}

function breakTime()
{
	CreateTimer("time",breakcount);
	initiate = true;
	click = false;
	finished = true;
}
function Tick() 
{
	if(!pause)
	{
		if (TotalSeconds <= 0) 
		{
			reset();
			if(!finished)
				breakTime();
			return;
		}

		TotalSeconds--;
		draw();

		UpdateTimer();
		window.setTimeout("Tick()", 1000);
	}
}

function calculateRate()
{
	amountToIncrease = 300/TotalSeconds;
}

function UpdateTimer() 
{
	var seconds = TotalSeconds;
	
	var Minutes = Math.floor(TotalSeconds / 60);
	seconds -= Minutes * (60);
	
	var TimeStr = LeadingZero(Minutes) + ":" + LeadingZero(seconds);

Timer.innerHTML = TimeStr;
}

function LeadingZero(Time) 
{
	return (Time < 10) ? "0" + Time : + Time;
}
function reset()
{
	context.clearRect(centerX - radius, centerY + radius, radius * 2, -amount)
	context.beginPath();
	context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	context.lineWidth = 10;
	context.strokeStyle = '#000000';
	context.stroke();
	
	amount = 0;
	pause = false;
	initiate = false;
	click = true;
	TotalSeconds = 0;
}

function resetBreak()
{
	context.clearRect(centerX - radius, centerY + radius, radius * 2, -amount)
	context.beginPath();
	context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	context.lineWidth = 10;
	context.strokeStyle = '#000000';
	context.stroke();
	
	
}

$("#-").click(function(){
    if(click){
			if(breakcount > 1)
				breakcount--;
			document.getElementById("value").innerHTML = "" + breakcount;
		}
});

$("#plus").click(function(){
    if(click){
			breakcount++;
    	document.getElementById("value").innerHTML = "" + breakcount;
		}
});

$("#sminus").click(function(){
		if(click){
			if(count > 1)
				count--;
			
			reset();
			
			if(count < 10)
				document.getElementById("time").innerHTML = "0" + count + ":00";
			else
				document.getElementById("time").innerHTML = count + ":00";
			
			document.getElementById("meter").innerHTML = "" + count;
		}
});

$("#splus").click(function(){
		if(click){
			count++;
			
			reset();
			
			if(count >= 10)
				document.getElementById("time").innerHTML = count + ":00";
			else
				document.getElementById("time").innerHTML = "0" + count + ":00";
			
			document.getElementById("meter").innerHTML = "" + count;
		}
});

$("#Circle").click(function(){	
	if(!initiate)
	{
		CreateTimer("time", count);
		initiate = true;
	}
	else if(!pause)
		pause = true;
	else if(pause)
	{
		pause = false;
		Tick();
	}
	
	if(click)
		click = false;
	else
		click = true;
	
});