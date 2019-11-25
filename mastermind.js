var colours = ["Red","Green","Blue","Yellow","Black","White"]
function br() {
    var x = document.createElement("a")
        x.innerHTML = "<br>"
        page.appendChild(x)
}
const mainDiv = document.createElement("div")
    document.body.appendChild(mainDiv)
    mainDiv.setAttribute('id',"page")
    var page = document.getElementById('page')

    var amountCorrect = 0
    var amountHalf = 0

    var title = document.createElement("h1")
        title.innerHTML = "Mastermind!"
        page.appendChild(title)

for (i=-1; i<12; i++) {
    for (y=0; y<4; y++) {
        if (i==-1) {
            var box = document.createElement("div")
            page.appendChild(box)
            box.setAttribute('class',"box")
            box.setAttribute('id',"awnserBox"+i+y)
            box.innerHTML = "?"
            box.style.backgroundImage = "none"
            box.style.backgroundColor = "black"
            box.style.color = "white"
            box.style.borderColor = "white"
        }
        else {
            var box = document.createElement("div")
            page.appendChild(box)
            box.setAttribute('class',"box")
            box.setAttribute('id',"box"+i+y)
        }
    }
    if (i==-1) {

    }
    else {
        var checkBox = document.createElement("div")
        page.appendChild(checkBox)
        checkBox.setAttribute('class',"checkBox")
        checkBox.setAttribute('id',"checkbox"+i)
        checkBox.innerHTML = '<img src="images/Black.png" alt="correct" id="6'+i+'"><img src="images/Black.png" alt="correct" id="7'+i+'"><img src="images/Black.png" alt="correct" id="8'+i+'"><img src="images/Black.png" alt="correct" id="9'+i+'">'
    }
    br()
}
    for (i=0; i<6; i++) {
    var x = document.createElement("button")
        page.appendChild(x)
        x.setAttribute('id',"color"+colours[i])
        x.setAttribute('class',"options")
        x.innerHTML = '<img src="images/'+colours[i]+'.png" alt="colour">'
        x.setAttribute('onclick',"colourPick('"+colours[i]+"')")
    }
br()
    x = document.createElement("button")
    page.appendChild(x)
    x.setAttribute('id',"submit")
    x.setAttribute('class',"submit")
    x.innerHTML = 'submit'
    x.setAttribute('onclick',"submit()")
br()
    x = document.createElement("button")
    page.appendChild(x)
    x.setAttribute('id',"reset")
    x.setAttribute('onclick',"reset()")
    x.innerHTML = "reset current selections"
br()
    x = document.createElement("button")
    page.appendChild(x)
    x.setAttribute('id',"newGame")
    x.setAttribute('onclick',"location.reload()")
    x.innerHTML = "Start new Game"

colourCodePicker()
function colourCodePicker() {
    window.colourCode = [colours[Math.floor((Math.random() * 6))],colours[Math.floor((Math.random() * 5) + 1)],colours[Math.floor((Math.random() * 5) + 1)],colours[Math.floor((Math.random() * 5) + 1)]]
    window.playerChoice = ["none","none","none","none"]
    for (i=0; i<4; i++) {
        if (colourCode[i] == colourCode[i+1] || colourCode[i] == colourCode[i+2] || colourCode[i] == colourCode[i+3] || colourCode[i] == colourCode[i-1] || colourCode[i] == colourCode[i-2] || colourCode[i] == colourCode[i-3]) {
            colourCodePicker()
        }
    }
    console.log(colourCode)
}
var thisHasBeenDone = [false,false,false,false]
function submit() {
    for (i=0; i<4; i++) {
        if (playerChoice[i]==colourCode[i]){
            amountCorrect++
            thisHasBeenDone[i] = true
        }
    }
    for (i=0; i<4; i++) {
        if (colourCode.includes(playerChoice[i])) {
            if (thisHasBeenDone[i] != true) {
                amountHalf++
            }
    }
    }
    thisHasBeenDone = false
    if (playerChoice[0] == "none" || playerChoice[1] == "none" || playerChoice[2] == "none" || playerChoice[3] == "none") {
        alert("Your selection isn't complete!")
    }
    else {
        var number = 6 
        for (i=0; i<amountCorrect; i++) {
            document.getElementById(''+number+tries).setAttribute('src','images/Red.png')
            number++
        }
        for (i=0; i<amountHalf; i++) {
            document.getElementById(''+number+tries).setAttribute('src','images/White.png')
            number++
        }
        playerChoice = ["none","none","none","none"]
        tries--
        if (tries == -1) {
            document.getElementById("submit").disabled = true;
            document.getElementById("reset").disabled = true;
            var options = ["colorWhite","colorBlack","colorYellow","colorBlue","colorGreen","colorRed"]
            for (i=0; i<6; i++) {
                var removeVar = document.getElementById(options[i])
                removeVar.parentNode.removeChild(removeVar);
            }
            for (i=0; i<4; i++) {
                document.getElementById("awnserBox-1"+i).innerHTML = "<img src='images/"+colourCode[i]+".png' alt''>"
            }
            alert("you lost!")
        }
        if (amountCorrect == 4) {
            document.getElementById("submit").disabled = true;
            document.getElementById("reset").disabled = true;
            var options = ["colorWhite","colorBlack","colorYellow","colorBlue","colorGreen","colorRed"]
            for (i=0; i<6; i++) {
                var removeVar = document.getElementById(options[i])
                removeVar.parentNode.removeChild(removeVar);
            }
            for (i=0; i<4; i++) {
                document.getElementById("awnserBox-1"+i).innerHTML = "<img src='images/"+colourCode[i]+".png' alt''>"
            }
            alert("you won!")
        }
        amountCorrect = 0
        amountHalf = 0
    }
}

var tries = 11
function colourPick(colour) {
    var change = 0
    if (playerChoice[0] != "none" && playerChoice[1] != "none" && playerChoice[2] != "none" && playerChoice[3] != "none") {
        alert("selection full")
    }
    else {
        i = 1
    do {
        if (playerChoice[change] == "none") {
            playerChoice[change] = colour
            document.getElementById('box'+tries+change).innerHTML = '<img src="images/'+colour+'.png" alt="colour">'
            i++
        }
        else {
            change++
        }
    } while (i == 1);
    }
}

function reset() {
    playerChoice = ["none","none","none","none"]
    for (i=0; i<4; i++) {
        document.getElementById('box'+tries+i).innerHTML = '<img src="" alt="">'
    }
}