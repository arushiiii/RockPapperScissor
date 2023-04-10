function rpsGame( yourChoice){
    
    console.log(yourChoice);
    var humanChoice , botChoice;
    humanChoice=yourChoice.id;

    botChoice=numberToChoice(randToRpsInt());
    console.log('Computer Choice', botChoice);

    results = decideWinner(humanChoice,botChoice,message);
    console.log(results);

     var message=finalMessage(results);
    console.log(message);

    rpsFrontEnd(yourChoice.id,botChoice,message);

}
function randToRpsInt()

{
    return Math.floor(Math.random()*3);
}
function numberToChoice(number){
    return['rock', 'paper','scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsdatabase={
    'rock': { 'scissors':1 , 'rock':0.5 ,'paper':0},
    'paper':{ 'rock':1, 'paper': 0.5, 'scissors':0},
    'scissors':{ 'paper':1, 'scissors': 0.5,'rock':0}
    };
    var yourscore =rpsdatabase[yourChoice][computerChoice];
    var computerScore = rpsdatabase[computerChoice][yourChoice];

    return [yourscore, computerScore];
}

function finalMessage([yourscore, computerScore]){
    if (yourscore === 0){
        return { 'message':'you lost!', 'color':'red' };
    }
    else if(yourscore ===0.5){
        return{'message':'you tied!', 'color':'yellow'};
    }else{
        return{ 'message': 'you won!', 'color':'green'}
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
      'rock': 'rock.jpg',
      'paper': 'paper.jpg',
      'scissors': 'scissors.jpg'
    };
  
    //remove all the images from the screen 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
  
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
  
    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37 , 58, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color" + finalMessage['color'] + "; font-zize: 60px; padding :30px;'>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src=" + imagesDatabase[botImageChoice] + " height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243 , 38, 24, 1);'>"
  
    document.getElementById('flex-box-rps').appendChild(humanDiv);
    document.getElementById('flex-box-rps').appendChild(messageDiv);
    document.getElementById('flex-box-rps').appendChild(botDiv);
  }
  
/*function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
     var imagesDatabase ={
         'rock': document.getElementById('rock').scr,
         'paper':document.getElementById('paper').src,
         'scissors': document.getElementById('scissors').src
     }

     //remove all the images from the screen 
     document.getElementById('rock').remove();
     document.getElementById('paper').remove();
     document.getElementById('scissors').remove();
     
     var humanDiv=document.createElement('div');
     var botDiv=document.createElement('div');
     var messageDiv=document.createElement('div');

humanDiv.innerHTML="<img src='"+ imagesDatabase[humanImageChoice]+"'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37 , 58, 233, 1);'>"
messageDiv.innerHTML="<h1 style='color"+ finalMessage['color'] +"; font-zize: 60px; padding :30px;'>"+finalMessage['message'] + "</h1>"
botDiv.innerHTML="<img src="+ imagesDatabase[botImageChoice]+" 'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243 , 38, 24, 1);'>"


document.getElementById('flex-box-rps').appendChild(humanDiv);
document.getElementById('flex-box-rps').appendChild(messageDiv);
document.getElementById('flex-box-rps').appendChild(botDiv);   
}
*/