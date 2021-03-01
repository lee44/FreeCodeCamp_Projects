var turn = "X";
var display = document.querySelector('#turnDisplay');
var cells = [];

for(i=0;i<9;i++)
{
	cells[i]=document.querySelector('#btn'+i);
	cells[i].addEventListener('click',function(){
		if(!this.classList.contains('xo'))
		{
			this.classList.add('xo');
			this.innerHTML = turn;
			checkWinner();
		}
});
}

function checkWinner()
{
	if(
		(cells[0].innerHTML == 'X' && cells[1].innerHTML == 'X' && cells[2].innerHTML == 'X') || 
		(cells[3].innerHTML == 'X' && cells[4].innerHTML == 'X' && cells[5].innerHTML == 'X') ||
		(cells[6].innerHTML == 'X' && cells[7].innerHTML == 'X' && cells[8].innerHTML == 'X') || 
		(cells[0].innerHTML == 'X' && cells[3].innerHTML == 'X' && cells[6].innerHTML == 'X') || 
		(cells[1].innerHTML == 'X' && cells[4].innerHTML == 'X' && cells[6].innerHTML == 'X') || 
		(cells[2].innerHTML == 'X' && cells[5].innerHTML == 'X' && cells[8].innerHTML == 'X') || 
		(cells[0].innerHTML == 'X' && cells[4].innerHTML == 'X' && cells[8].innerHTML == 'X') || 
		(cells[2].innerHTML == 'X' && cells[4].innerHTML == 'X' && cells[6].innerHTML == 'X')) 
	{
		display.innerHTML="X is the winner. Resetting in 5 seconds";
		turn='O'
		display.classList.add('blinking');
		sleep(5000).then(() => {
    	reset()
		});
	}
	
	else if((cells[0].innerHTML == 'O' && cells[1].innerHTML == 'O' && cells[2].innerHTML == 'O') || 
					(cells[3].innerHTML == 'O' && cells[4].innerHTML == 'O' && cells[5].innerHTML == 'O') ||
					(cells[6].innerHTML == 'O' && cells[7].innerHTML == 'O' && cells[8].innerHTML == 'O') || 
					(cells[0].innerHTML == 'O' && cells[3].innerHTML == 'O' && cells[6].innerHTML == 'O') || 
					(cells[1].innerHTML == 'O' && cells[4].innerHTML == 'O' && cells[6].innerHTML == 'O') || 
					(cells[2].innerHTML == 'O' && cells[5].innerHTML == 'O' && cells[8].innerHTML == 'O') || 
					(cells[0].innerHTML == 'O' && cells[4].innerHTML == 'O' && cells[8].innerHTML == 'O') || 
					(cells[2].innerHTML == 'O' && cells[4].innerHTML == 'O' && cells[6].innerHTML == 'O')) 
	{
		display.innerHTML="O is the winner. Resetting in 5 seconds";
		display.classList.add('blinking');
		turn='X'
		sleep(5000).then(() => {
    	reset()
		});

	}
	else
		nextTurn();
}

function nextTurn()
{
	if(turn == 'X')
	{
		turn = 'O';
		display.innerHTML='O Turn';
	}
	else
	{
		turn = 'X'
		display.innerHTML='X Turn';
	}	
}

function reset()
{
	for(i=0;i<9;i++)
	{
		cells[i].classList.remove('xo')
		cells[i].innerHTML = '';
	}
	display.classList.remove('blinking')
	display.innerHTML=turn+' Turn';
}
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}