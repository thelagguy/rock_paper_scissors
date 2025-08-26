function computer_choice(){
    let num =Math.random ;
    let choice ='';
    let inpt_s =prompt(`Rock, Paper or Scissors?`);
    inpt_s =inpt_s.toUpperCase(inpt_s) ;
    console.log(inpt_s);

    if (!(inpt_s ==="ROCK" ||inpt_s === "PAPER" ||inpt_s === "SCISSORS")){
        console.log("neither rock,paper, or scissors");
        stop;
    }
    switch (num){ //rock
        case 0 || 0.33: choice =`Rock`;
        break;

        case 0.34 || 0.66: choice =`Scissors` //scissors
            break;
        
        case 0.67 || 0.99: choice =`Paper` //paper
            break ;

    }
    choice =choice.toUpperCase;
    


}
computer_choice();