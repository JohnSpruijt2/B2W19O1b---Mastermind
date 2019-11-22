function br() {
    var x = document.createElement("a")
        x.innerHTML = "<br>"
        page.appendChild(x)
}
const mainDiv = document.createElement("div")
    document.body.appendChild(mainDiv)
    mainDiv.setAttribute('id',"page")
    var page = document.getElementById('page')



for (i=0; i<12; i++) {
    for (y=0; y<4; y++) {
        var box = document.createElement("div")
            page.appendChild(box)
            box.setAttribute('class',"box")
            box.setAttribute('id',"box"+i+y)
    }
    br()
}
br()
var x = document.createElement("button")
    page.appendChild(x)
    x.setAttribute('id',"colorRed")
    x.setAttribute('class',"options")
    x.innerHTML = '<img src="images/Red.png" alt="colour">'
    x.setAttribute('onclick',"colourPick('Red')")

    x = document.createElement("button")
    page.appendChild(x)
    x.setAttribute('id',"colorGreen")
    x.setAttribute('class',"options")
    x.innerHTML = '<img src="images/Green.png" alt="colour">'
    x.setAttribute('onclick',"colourPick('Green')")

    x = document.createElement("button")
    page.appendChild(x)
    x.setAttribute('id',"colorBlue")
    x.setAttribute('class',"options")
    x.innerHTML = '<img src="images/Blue.png" alt="colour">'
    x.setAttribute('onclick',"colourPick('Blue')")

    x = document.createElement("button")
    page.appendChild(x)
    x.setAttribute('id',"colorYellow")
    x.setAttribute('class',"options")
    x.innerHTML = '<img src="images/Yellow.png" alt="colour">'
    x.setAttribute('onclick',"colourPick('Yellow')")

    x = document.createElement("button")
    page.appendChild(x)
    x.setAttribute('id',"colorBlack")
    x.setAttribute('class',"options")
    x.innerHTML = '<img src="images/Black.png" alt="colour">'
    x.setAttribute('onclick',"colourPick('Black')")

    x = document.createElement("button")
    page.appendChild(x)
    x.setAttribute('id',"colorWhite")
    x.setAttribute('class',"options")
    x.innerHTML = '<img src="images/White.png" alt="colour">'
    x.setAttribute('onclick',"colourPick('White')")
br()
    x = document.createElement("button")
    page.appendChild(x)
    x.setAttribute('id',"submit")
    x.setAttribute('class',"submit")
    x.innerHTML = 'submit'
    x.setAttribute('onclick',"submit()")


var colours = ["red","green","blue","yellow","black","white"]
var colourCode = [colours[Math.floor((Math.random() * 5) + 1)],colours[Math.floor((Math.random() * 5) + 1)],colours[Math.floor((Math.random() * 5) + 1)],colours[Math.floor((Math.random() * 5) + 1)]]
var playerChoice = ["none","none","none","none"]


function submit() {
    if (playerChoice[0] == "none" || playerChoice[1] == "none" || playerChoice[2] == "none" || playerChoice[3] == "none") {
        alert("Your selection isn't complete!")
    }
    else {
        playerChoice = ["none","none","none","none"]
        tries--
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