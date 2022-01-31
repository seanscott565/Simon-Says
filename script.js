const startB = document.getElementById("start") // Start button
const output = document.getElementById("simonOutput") // Outputs the simon says
var actions = ["run 10 steps", "Touch your neck", "Blink 10 times", "Jump 3 times", "Touch your nose", "Touch your toes", "Clap your hands", "raise your right hand", "Raise your right foot"] // Actions for the simon says



function randomChoice(){ // Takes a random action from the array and returns it
return actions[Math.floor(Math.random() * actions.length)]
}

function start(){ // when clicked start, it will say simon says then the random choice that was picked from the array using the randomChoice function
  let simon = ""
  if(Math.random()< .5){
    simon = "Simon Says:"
  }
  output.innerText = `${simon} ${randomChoice()}`
}
