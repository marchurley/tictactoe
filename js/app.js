
$(document).ready(function(){
	/*--- Variable to determine if X or O plays ---*/
  var game = 0;

  /*--- Object with the values for all 9 boxes ---*/
  var tic = {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: ''
  };

  /*--- Play the game if a td is clicked ---*/
  $("td").on("click", function(e){
    if ($(this).text().trim() == '') {
        if (game % 2 == 0) {
          $(this).append("X");
          tic[e.target.id] = "X";
          $("h2").text("Player O");
          game ++
          checkResult("XXX", "Player X");
          checkDraw();
        } else {
          $(this).append("O");
          tic[e.target.id] = "O";
          $("h2").text("Player X");
          game ++
          checkResult("OOO", "Player O");
          checkDraw();
        }
    } else {
      alert("You already played this box!");
    }
  })

  /*--- Function to calculate when a game is won ---*/
  function checkResult(result, player){
    if (
      tic[1] + tic[2] + tic[3] == result ||
      tic[1] + tic[5] + tic[9] == result ||
      tic[1] + tic[4] + tic[7] == result ||
      tic[2] + tic[5] + tic[8] == result ||
      tic[3] + tic[6] + tic[9] == result ||
      tic[3] + tic[5] + tic[7] == result ||
      tic[4] + tic[5] + tic[6] == result ||
      tic[7] + tic[8] + tic[9] == result){
      alert (player + " won! Game Over!");
      newGame();
    };
  }

  /*--- Function to check when a game is draw ---*/
  function checkDraw(){
   if (game > 8) {
    alert("Draw Game!");
    newGame();
   }
  }

  /*--- Function that a new game automatically starts after a game is won ---*/
  function newGame(){
    game = 0;
    $("td").empty();
    $("h2").text("Player X will start");
    for (var i = 0; i < 9; i++) {
      tic[i] = 0;
    }
  }


});

