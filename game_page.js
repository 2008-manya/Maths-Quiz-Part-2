function addUser(){
	Player1_name=document.getElementById("player1_name_input").value;
	Player2_name=document.getElementById("player2_name_input").value; 
	localStorage.setItem("Player1_name" , Player1_name );
	localStorage.setItem("Player2_name" , Player2_name);
	window.location="game.html"
}	


player1_name = localStorage.getItem("player1_name");
	player2_name = localStorage.getItem("player2_name");

	player1_score = 0;
	player2_score = 0;

