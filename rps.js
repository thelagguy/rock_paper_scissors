// function computer_choice(){
//     let num =Math.random() ;
//     let choice ='';
//     let inpt_s =prompt(`Rock, Paper or Scissors?`);
//     inpt_s =inpt_s.toUpperCase(inpt_s) ;
//     console.log(inpt_s);

//     if (!(inpt_s ==="ROCK" ||inpt_s === "PAPER" ||inpt_s === "SCISSORS")){
//         console.log("neither rock,paper, or scissors");

//     }
//     switch (true){ //rock
        
//         case num<=0.33:
//          choice =`Rock`;
//          choice =choice.toUpperCase;                //paper beat rock, rock beats scissors, scissors beats paper, repeat
//             if (inpt_s ==`PAPER`){
//                 console.log(`CONGRATS, YOU WON agains't ${choice}`);   
//             } else console.log (`You lost sorry the answer was ${choice}`);
//         break;

//         case num>=0.34 && num<=0.66:
//          choice =`Scissors` ;//scissors
//          choice =choice.toUpperCase;
//           if (inpt_s ==`ROCK`){
//                 console.log(`CONGRATS, YOU WON agains't ${choice}`);   
//             } else console.log(`You lost sorry the answer was ${choice}`);
//             break;
        
//         case num>=0.67:
//          choice =`Paper`; //paper
//          choice =choice.toUpperCase;
//           if (inpt_s ==`SCISSORS`){
//                 console.log(`CONGRATS, YOU WON agains't ${choice}`);   
//             } else console.log(`You lost sorry the answer was ${choice}`);
//             break ;
//  console.log(num);
//     }
//}
function c_choice(){
    let rnum =Math.random();
    if (rnum >=0 && rnum<0.33){ //rock
        return `ROCK`;
    }else if (rnum >=0.34 && rnum <0.66){
        return `PAPER`;
    }else if (rnum >=0.67){
        return `SCISSORS`;
    }
}
for (let i =1;i <100;i ++){
    console.log(c_choice());
}