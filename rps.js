let h_score =0;
let c_score =0;
let rnum ;
function c_choice(){
    rnum =Math.random();
    if (rnum<=0.33){ //rock
        return `ROCK`;
    }else if (rnum >=0.34 && rnum <0.66){
        return `PAPER`;
    }else if (rnum >=0.67){
        return `SCISSORS`;
    }
}


function h_choice(){
    let choice =prompt(`Rock, Paper or Scissors?`);
    choice = choice.toUpperCase(choice);
    if (!(choice ==`ROCK` || choice== `PAPER` || choice==`SCISSORS` ||null ||undefined)){
        return `Not a valid input!`;
    } else { 
        return choice ;}
}

function playRound(h_choice,c_choice){
    if (h_choice ===c_choice){
        return `Draw Oh No` ;
    } if(h_choice ===`ROCK` && c_choice ===`SCISSORS`){ ///rock
        h_score++; 
        return `You win.`;
    } else if(h_choice ===`ROCK` && c_choice ===`PAPER`){
        c_score++;
        return `You lost.`;
    }

    if(h_choice ===`PAPER` && c_choice ===`ROCK`){ //paper
        h_score++;
        return `You win.`;
    } else if(h_choice ===`PAPER` && c_choice ===`SCISSORS`){
        c_score++;
        return `You lost.`;
    }

     if(h_choice ===`SCISSORS` && c_choice ===`PAPER`){ //scissors
        h_score++;
        return `You win.`;
    } else if(h_choice ===`SCISSORS` && c_choice ===`ROCK`){
        c_score++;
        return `You lost.`;
    }
}
function playGame(){
     let num_times =parseInt(prompt(`How many times do you want to play?`));
    for (let i =1; i <=num_times; i ++){
        
        prompt(`${playRound(h_choice(),c_choice())} score human: ${h_score}, bot: ${c_score}`);
    }
    if (h_score >c_score){
        prompt(`Human won, GG.`);
    } else{
        prompt(`Sorry lil bro, I won ~Bot`);
    }
    h_score =0;
    c_score =0;
}
playGame();
