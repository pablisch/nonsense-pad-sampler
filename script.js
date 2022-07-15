// Change panel css according to mouse over event

const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
  panel.addEventListener("mouseover", () => {
    removeActiveClasses();
    panel.classList.add("active");
  })
})

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove("active");
  })
}

// Sense panel clicks

var numberOfBeatPanels = document.querySelectorAll(".noisePanel").length;

for (let i = 0; i < numberOfBeatPanels; i++) {
  document.querySelectorAll(".noisePanel")[i].addEventListener("click", function() { 
    var panelClicked = this.innerHTML;
    playSound(panelClicked);
    panelFlash(panelClicked);
    console.log(panelClicked);
    // alert(panelClicked);
    
  })
}

function playSound(inputSelector) {
  switch (inputSelector) {
    case "e":
      var soundSelected = "boop-sound-effect";
      break;
    case "d":
      var soundSelected = "Sci-fi-beep-sound-effect";
      break;
    default:
      break;
  }
  var soundToPlay = new Audio("samples/" + soundSelected + ".mp3");
  soundToPlay.play();
}

function panelFlash(inputSelector) {
  document.querySelector("." + inputSelector).classList.add("soundActive");
  function panelFashOff() {
    document.querySelector("." + inputSelector).classList.remove("soundActive");
  }
  setTimeout(panelFashOff, 150);
}


