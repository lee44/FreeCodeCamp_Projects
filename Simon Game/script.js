var topleftarc = document.getElementById("topleftarc");
var ctx = topleftarc.getContext("2d");
ctx.beginPath();
ctx.arc(215,215,150,1*Math.PI,1.5*Math.PI);
ctx.strokeStyle="limegreen"; //lime
ctx.lineWidth = 90;
ctx.stroke();

var botleftarc = document.getElementById("botleftarc");
var ctx2 = botleftarc.getContext("2d");
ctx2.beginPath();
ctx2.arc(215,-20,150,.5*Math.PI,1*Math.PI);
ctx2.strokeStyle="yellow"; //#ffff99
ctx2.lineWidth = 90;
ctx2.stroke();

var toprightarc = document.getElementById("toprightarc");
var ctx3 = toprightarc.getContext("2d");
ctx3.beginPath();
ctx3.arc(-15,215,150,1.5*Math.PI,2*Math.PI);
ctx3.strokeStyle="#b30000"; //#ff0000
ctx3.lineWidth = 90;
ctx3.stroke();

var botrightarc = document.getElementById("botrightarc");
var ctx4 = botrightarc.getContext("2d");
ctx4.beginPath();
ctx4.arc(-15,-20,150,0*Math.PI,.5*Math.PI);
ctx4.strokeStyle="#33ccff"; //#66d9ff
ctx4.lineWidth = 90;
ctx4.stroke();

var level = 1; //the level of difficulty
var random = []; //array to store random numbers
var a = 0; //loops the random array
var userPicks;
var s;
var d;
var light;
var cycle = 0;
var exclaimation;
var darkTimer = 300;//animation timer for returning color to original
var lightTimer = 1000;//animation timer for changing color to a lighter color
var strict = false;

$('input[name=checkbox]').change(function(){
    if($(this).is(':checked'))
			$("#start").on("click",startButton);
		else
		{
			topleftarc.removeEventListener('click', topleftArc, false);
			botleftarc.removeEventListener('click', botleftArc, false);
			toprightarc.removeEventListener('click', toprightArc, false);
			botrightarc.removeEventListener('click', botrightArc, false);
			level = 1;
			cycle = 0;
			a = 0;
			document.getElementById("d").innerHTML = "0";
			$("#start").off("click");
		}
});

function startButton()
{
	document.getElementById("d").innerHTML = ""+ level;
	generatePattern();
	light = setInterval(lightUp, lightTimer);

	$("#strict").click(function()
	{
		if(strict)
			strict = false;
		else 
			strict = true;
	});	
	
	topleftarc.addEventListener('click', topleftArc, false);
	botleftarc.addEventListener('click', botleftArc, false);
	toprightarc.addEventListener('click', toprightArc, false);
	botrightarc.addEventListener('click', botrightArc, false);
}
function topleftArc()
{
	userPicks = 1; 
	document.getElementById("audiotag1").play();
	ctx.strokeStyle="lime";ctx.stroke();
	s = setTimeout(dark, darkTimer);
	checkUserResponse();
}
function botleftArc()
{
	userPicks = 2;
	document.getElementById("audiotag2").play();
	ctx2.strokeStyle="yellow";ctx2.stroke();
	s = setTimeout(dark, darkTimer);
	checkUserResponse();
}
function toprightArc()
{
	userPicks = 3;
	document.getElementById("audiotag3").play();
	ctx3.strokeStyle="#ff0000";ctx3.stroke();
	s = setTimeout(dark, darkTimer);
	checkUserResponse();
}
function botrightArc()
{
	userPicks = 4;
	document.getElementById("audiotag4").play();
	ctx4.strokeStyle="#66d9ff";ctx4.stroke();
	s = setTimeout(dark, darkTimer);
	checkUserResponse();
}
function generatePattern()
{
	for(var c = 0; c < level; c++)
		random[c] = Math.floor((Math.random() * 4) + 1); // random number 1-4
}
function lightUp()
{
	if(a < level)
	{ 
		switch(random[a])
		{
			case 0:;break;
			case 1:ctx.strokeStyle="lime";ctx.stroke();document.getElementById("audiotag1").play(); document.body.style.backgroundColor = "lime";
				break; 
			case 2:ctx2.strokeStyle="#ffff99";ctx2.stroke();document.getElementById("audiotag2").play();document.body.style.backgroundColor = "yellow";break; 
			case 3:ctx3.strokeStyle="#ff0000";ctx3.stroke();document.getElementById("audiotag3").play();document.body.style.backgroundColor = "#ff0000";break; 
			case 4:ctx4.strokeStyle="#66d9ff";ctx4.stroke();document.getElementById("audiotag4").play();document.body.style.backgroundColor = "#66d9ff";break;
		}
		a++;
	}
	else
	{
		a = 0;
		clearInterval(light);
		clearTimeout(d);
	}
	d = setTimeout(dark, darkTimer);
	document.querySelector("#audiotag1").addEventListener("ended", ()=>{document.body.style.backgroundColor = "white";}, false);
	document.querySelector("#audiotag2").addEventListener("ended", ()=>{document.body.style.backgroundColor = "white";}, false);
	document.querySelector("#audiotag3").addEventListener("ended", ()=>{document.body.style.backgroundColor = "white";}, false);
	document.querySelector("#audiotag4").addEventListener("ended", ()=>{document.body.style.backgroundColor = "white";}, false);
}

function dark()
{
	ctx.strokeStyle="limegreen"; 	ctx2.strokeStyle="yellow"; 	ctx3.strokeStyle="#b30000"; 
	ctx4.strokeStyle="#33ccff"; 	ctx.stroke();  ctx2.stroke();  ctx3.stroke();  ctx4.stroke();
}

function checkUserResponse()
{
	if(userPicks == random[cycle])
		cycle++;
	else
		renderExclaimation();
	
	if(cycle == level)
	{
		level++;
		document.getElementById("d").innerHTML = ""+ level;
		cycle = 0;
		generatePattern();
		light = setInterval(lightUp, lightTimer);
	}	
}
function renderExclaimation()
{
	document.getElementById("d").innerHTML = "!!";
	
	if(strict)
		exclaimation = setTimeout(startOver, 1500);
	else
		exclaimation = setTimeout(restartLevel, 1500);
}
function startOver()
{	
	level = 1;
	cycle = 0;
	a = 0;
	document.getElementById("d").innerHTML = ""+ level;
	generatePattern();
	light = setInterval(lightUp, lightTimer);
}
function restartLevel()
{
	cycle = 0;
	document.getElementById("d").innerHTML = ""+ level;
	light = setInterval(lightUp, lightTimer);
}