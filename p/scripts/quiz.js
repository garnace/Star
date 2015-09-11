function getQuestion(qID)
{
	location.href="question.html?" + qID;
}

function checkAnswer(qID)
{
	var selection = document.getElementsByName('answer');
	var usrAnswer = 0;
	
	if(localStorage)
	{
		/*All is good.*/
	}
	else
	{
		alert("WARNING: Access to local storage is not supported, the review functionality will not operate correctly.");
	}
	
	for(x = 0; x < selection.length; x++)
	{
		if(selection[x].checked == true)
		{
			usrAnswer = selection[x].value;
		}
	}

	if(qID == 0)
	{
		if(usrAnswer == 1)
		{
			alert("Your answer is correct!");
			localStorage.setItem("question0", "correct");
		}
		else
		{
			alert("Your answer is incorrect!");
			localStorage.setItem("question0", "incorrect");
		}
	}
	else if(qID == 1)
	{
		if(usrAnswer == 0)
		{
			alert("Your answer is correct!");
			localStorage.setItem("question1", "correct");
		}
		else
		{
			alert("Your answer is incorrect!");
			localStorage.setItem("question1", "incorrect");
		}
	}
	if(qID == 2)
	{
		if(usrAnswer == 3)
		{
			alert("Your answer is correct!");
			localStorage.setItem("question2", "correct");
		}
		else
		{
			alert("Your answer is incorrect!");
			localStorage.setItem("question2", "incorrect");
		}
	}
	
	location.href="quiz.html";
}

function resetQuiz()
{
	var check = confirm("Are you sure you wish to reset the quiz?");
	if(check == true)
	{
		localStorage.clear();
		location.href="quiz.html"
	}
}