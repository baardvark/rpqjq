$(document).ready( function() {
    $('#choice').on('change', function() {
      var choiceText;
  
      switch(this.value) {
        case 'rock':
          choiceText = 'rock';
          break;
        case 'paper':
          choiceText = 'paper';
          break;
        case 'scissors':
          choiceText = 'scissors';
          break;
      }
  
      $('#choices').text(choiceText)
    });
  });