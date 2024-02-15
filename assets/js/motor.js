var confirmPlay = confirm("Bienvenido al juego del Cachipun.\n¿Desea Jugar un Cachipun con el Computador?\nHaga clic en aceptar si desea jugar.");
let roundsNumber = 0;
if (confirmPlay) {
    roundsNumber = prompt("Ingrese Numero de Juegos");
    if (roundsNumber <= 0 ) {
        alert("Hasta la proxima");
    } else {
        
        alert ("Jugaremos: "+ roundsNumber + " juegos...\nClick Aceptar para Empezar.");
        var pickedTool = "";
        var pickedToolByMachine = "";
        var counterUser = 0;
        var counterMachine = 0;
        var counterTie = 0;
        
        for(let juegos = 0; juegos < roundsNumber; juegos++) {
            
            let userSelection = prompt("Elije tu herramienta\n(P:piedra, L:papel, T:tijera)\nEscribe una de las 3 letras Mayusculas y haz clic en Aceptar.");
            if (userSelection === "P" || userSelection === "L" || userSelection === "T"  ){
                switch(userSelection) {
                    case "P":
                        pickedTool = 'piedra';
                        break;
                    case "L":
                        pickedTool = 'papel';
                        break;
                    case "T":
                        pickedTool = 'tijera';
                        break;
                    default:
                        alert("Hasta la proxima");
                        break;
                }
                pickedToolByMachine = chooseRandomTool();
                
                alert( "Resultado:\n" + pickedTool + " (Tu) vs (Machine) " + pickedToolByMachine);
                switch(whoWinRound(pickedTool, pickedToolByMachine)){
                    case "usuario":
                        counterUser = counterUser +1;
                        alert( "Ganas Tu");

                        break;
                    case "machine":
                        counterMachine = counterMachine + 1;
                        alert( "Gana La Machine");
                        break;
                    case "empate":
                        counterTie = counterTie + 1;
                        alert( "Hubo un empate");
                        break;
                }
            }else{
                alert("Hasta la proxima");
            }
                
        }
        
        
        
        let resume = "Resumen:\nGanado x Usuario: " + counterUser + "\nGanado x La Machine: " + counterMachine + "\nEmpate: " +  counterTie;
        if (counterUser  > counterMachine) { 
            resume += "\n\n¡¡¡Felicitaciones Ganaste!!!.";
        }else if (counterUser  < counterMachine) {
            resume += "\n\nPerdiste sigue intentandolo.";
        }else if (counterUser  === counterMachine) {
            resume += "\n\nEmpate sigue intentandolo.";
        } 
        console.log(resume);
        alert(resume);
        
        document.querySelector('#resumen').innerHTML = resume;
    }
}else {
    alert("Hasta la proxima");
}


function chooseRandomTool() {
  let toolNumber = Math.floor(Math.random() * 3 );
  switch(toolNumber) {
    case 0:
    return 'piedra';
    case 1:
      return 'papel';
    case 2: 
     return 'tijera';
     default:
     break;
  }
}

function whoWinRound(userPick, machinePick) {
    
  if ( (userPick === 'tijera' && machinePick === 'papel') || 
          (userPick === 'papel' && machinePick === 'piedra') || 
          (userPick === 'piedra' && machinePick === 'tijera') ) {
      return "usuario";
  }  
   if ( (machinePick === 'tijera' && userPick === 'papel') || 
          (machinePick === 'papel' && userPick === 'piedra') || 
          (machinePick === 'piedra' && userPick === 'tijera') ) {
      return "machine";
    }
   
   if (machinePick === userPick) {
       return "empate";
   }
}

