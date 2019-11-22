function br() {
    var x = document.createElement("a")
        x.innerHTML = "<br>"
        page.appendChild(x)
}
var mainDiv = document.createElement("div")
    document.body.appendChild(mainDiv)
    mainDiv.setAttribute('id',"page")
    var page = document.getElementById('page')



for (i=0; i<12; i++) {
    for (x=0; x<5; x++) {
        var box = document.createElement("div")
            page.appendChild(box)
            box.setAttribute('class',"box")
            box.setAttribute('id',"box"+i+x)
    }
    br()
}
br()
br()
    x = document.createElement("button")
    page.appendChild(x)
    x.setAttribute('id',"colorRed")
    x.setAttribute('class',"options")
    x.innerHTML = '<img src="images/Red.png" alt="colour">'
    x.setAttribute('onclick',"alert('Red')")

    x = document.createElement("button")
    page.appendChild(x)
    x.setAttribute('id',"colorGreen")
    x.setAttribute('class',"options")
    x.innerHTML = '<img src="images/Green.png" alt="colour">'
    x.setAttribute('onclick',"alert('Green')")

    x = document.createElement("button")
    page.appendChild(x)
    x.setAttribute('id',"colorBlue")
    x.setAttribute('class',"options")
    x.innerHTML = '<img src="images/Blue.png" alt="colour">'
    x.setAttribute('onclick',"alert('Blue')")

    x = document.createElement("button")
    page.appendChild(x)
    x.setAttribute('id',"colorYellow")
    x.setAttribute('class',"options")
    x.innerHTML = '<img src="images/Yellow.png" alt="colour">'
    x.setAttribute('onclick',"alert('Yellow')")

    x = document.createElement("button")
    page.appendChild(x)
    x.setAttribute('id',"colorBlack")
    x.setAttribute('class',"options")
    x.innerHTML = '<img src="images/Black.png" alt="colour">'
    x.setAttribute('onclick',"alert('Black')")

    x = document.createElement("button")
    page.appendChild(x)
    x.setAttribute('id',"colorWhite")
    x.setAttribute('class',"options")
    x.innerHTML = '<img src="images/White.png" alt="colour">'
    x.setAttribute('onclick',"alert('White')")