let randomNumber = Math.floor(Math.random()*1000)+1;
	  
	  const guesses = document.querySelector('.guesses');
	  const lastResult = document.querySelector('.lastResult');
	  const lowOrHi = document.querySelector('.lowOrHi');
	  const guessSubmit = document.querySelector('.guessSubmit');
	  const guessField = document.querySelector('.guessField');
	  
	  let guessCount = 1;
	  let resetButton;
	  guessField.focus();     //focus on guessField???
	  

	  
	  
	  guessSubmit.addEventListener('click',checkGuess);

	  function checkGuess(){
		
		let userGuess = Number(guessField.value);         //Number() checks if it is acutally a number
		
		if (guessCount === 1)
		{
			guesses.textContent = 'Guesses: '+userGuess;
		}else														//displays all guesses
			guesses.textContent +=', '+userGuess+' ';
																		
		if (userGuess === randomNumber)
		{
			lastResult.textContent = 'Congratulations! You got it right!';        //checks right/gameover....maxcount/gameover...wrong/nothing
			lastResult.style.backgroundColor = 'green';
			lowOrHi.textContent = '';
			setGameOver();
		} else if(guessCount === 13)
		{
			lastResult.textContent = '!!GAME OVER!!';
			setGameOver();
		}else
		{
			lastResult.textContent = 'Wrong!';
		lastResult.style.backgroundColor = 'red';
		}
			
		if(userGuess < randomNumber){                                //says high or low
				lowOrHi.textContent = 'Last guess was too low!';
		} else if(userGuess > randomNumber){
				lowOrHi.textContent = 'Last guess was too high!';
		}
		
		
	    guessCount++;    // adds count
		guessField.value = '';         //resets to empty box
		guessField.focus();    //??
	  }
	  	  
		  

		
		
		function setGameOver(){
			guessField.disabled = true;       //disable buttons
			guessSubmit.disabled = true;
			resetButton = document.createElement('button');   //create a button
			resetButton.textContent = 'Start new game';        //button text 
			document.body.appendChild(resetButton);
			resetButton.addEventListener('click',resetGame);
		}
		
		function resetGame(){
			guessCount = 1;
			
			const resetParas = document.querySelectorAll('.resultParas p');
			
			for(let i = 0;i<resetParas.length;i++)
			{
				resetParas[i].textContent = '';
			}
			
			resetButton.parentNode.removeChild(resetButton);     //removes button from the body ....as reset happens after that button is added
			
			guessField.disabled = false;     //enable
			guessSubmit.disabled = false;   //enable
			guessField.value = '';
			guessField.focus();
			
			lastResult.style.backgroundColor = 'white';
			
			randomNumber = Math.floor(Math.random()*1000)+1;
			
		}
		
		