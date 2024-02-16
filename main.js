canvas = new fabric.Canvas('myCanvas')
lb = 30
hb = 30
vpx = 10
vpy = 10
playerObj = ""
function PlayerUpt() {
    fabric.Image.fromURL("player.png", function(Img){
        playerObj = Img
        playerObj.scaleToWidth(140)
        playerObj.scaleToHeight(90)
        playerObj.set({
            top:vpy,
            left:vpx
        })
        canvas.add(playerObj)
    })
}
blocoObj = ""
function blocoUpt(getImage) {
    fabric.Image.fromURL(getImage, function(Img){
        blocoObj = Img
        blocoObj.scaleToWidth(lb)
        blocoObj.scaleToHeight(hb)
        blocoObj.set({
            top:vpy,
            left:vpx
        })
        canvas.add(blocoObj)
    })
}
window.addEventListener("keydown", Keydowm)
function Keydowm(e) {
    keypress = e.keyCode
    console.log(keypress)
    if (e.shiftKey == true && keypress == '80') {

        hb = hb + 10
        lb = lb + 10
        document.getElementById("l").innerHTML = lb
        document.getElementById("h").innerHTML = hb
        
    }
    if (e.shiftKey == true && keypress == '77') {

        hb = hb - 10
        lb = lb - 10
        document.getElementById("l").innerHTML = lb
        document.getElementById("h").innerHTML = hb
        
    }
    if (keypress == '87') {
        
        blocoUpt('wall.jpg')

    }
    if (keypress == '71') {
        
        blocoUpt('ground.png')

    }
    if (keypress == '76') {
        
        blocoUpt('light_green.png')

    }
    if (keypress == '84') {
        
        blocoUpt('trunk.jpg')

    }
    if (keypress == '82') {
        
        blocoUpt('roof.jpg')

    }
    if (keypress == '89') {
        
        blocoUpt('yellow_wall.png')

    }
    if (keypress == '68') {
        
        blocoUpt('dark_green.png')

    }
    if (keypress == '85') {
        
        blocoUpt('unique.png')

    }
    if (keypress == '66') {
        
        blocoUpt('bor.png')

    }
    if (keypress == '67') {
        blocoUpt('cloud.jpg')
        console.log("fun")

    }
    if (keypress == '38') {
        up()
    }
    if (keypress == '40') {
        down()
    }
    if (keypress == '37') {
        left()
    }
    if (keypress == '39') {
        right()
    }
}
function up() {
    if (vpy >= 0) {
        vpy = vpy - hb
        canvas.remove(playerObj)
        console.log("cima")
        PlayerUpt()
    }
}
function down() {
    if (vpy <= 500) {
        vpy = vpy + hb
        canvas.remove(playerObj)
        console.log("baixo")
        PlayerUpt()
    }
}
function left() {
    if (vpx >= 0) {
        vpx = vpx - lb
        canvas.remove(playerObj)
        console.log("esquerda")
        PlayerUpt()
    }
}
function right() {
    if (vpx <= 900) {
        vpx = vpx + lb
        canvas.remove(playerObj)
        console.log("direita")
        PlayerUpt()
    }
}