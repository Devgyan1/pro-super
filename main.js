var canvas = new fabric.Canvas("myCanvas");

playerX = 10;
playerY = 10;

blockImageWidth = 30;
blockImageHeight = 30;

var playerobject = "";
var blockobject = "";
/player update function/
function playerUpdate() {
    fabric.Image.fromURL("https://tse3.mm.bing.net/th?id=OIP.JitOvblXNf2vnAkCuZE4LQHaKl&pid=Api&P=0&w=300&h=300", function (Img) {
        playerobject = Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerobject);

    });
}
function newImage(getImage) {
    fabric.Image.fromURL(getImage, function (Img) {
        blockobject = Img;
        blockobject.scaleToWidth(blockImageWidth);
        blockobject.scaleToHeight(blockImageHeight);
        blockobject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(blockobject);

    });
}
/* increase height and width*/
window.addEventListener("keydown", MyKeydown);
function MyKeydown(e) {
    keyPressed = e.keyCode;
    if (e.shiftKey == true && keyPressed == '80') {
        blockImageWidth = blockImageWidth + 10;
        blockImageHeight = blockImageHeight + 10;
        document.getElementById("current_width").innerHTML = blockImageWidth;
        document.getElementById("current_height").innerHTML = blockImageHeight;
    }

    if (e.shiftKey == true && keyPressed == '77') {
        blockImageWidth = blockImageWidth - 10;
        blockImageHeight = blockImageHeight - 10;
        document.getElementById("current_width").innerHTML = blockImageWidth;
        document.getElementById("current_height").innerHTML = blockImageHeight;
    }

    if (keyPressed == '37') {
        left();

    }

    if (keyPressed == '38') {
        up();

    }

    if (keyPressed == '39') {
        right();

    }

    if (keyPressed == '40') {
        down();

    }

  

    if (keyPressed == '66') {
        newImage('http://vignette2.wikia.nocookie.net/clubpenguin/images/7/7e/HULK_BODYSUIT_clothing_icon_ID_4632.png/revision/latest?cb=20121226235439');
        console.log("hulk body")
    }

    if (keyPressed == '76') {
        newImage('https://tse1.mm.bing.net/th?id=OIP.5njZkVABxi5K_jeBMA9nmgHaH6&pid=Api&P=0&w=300&h=300');
        console.log("ironman legs")
    }

    if (keyPressed == '84') {
        newImage('https://tse3.mm.bing.net/th?id=OIP.1_YdCPOtYohpYPGT2QQ_yAHaE8&pid=Api&P=0&w=235&h=158');
        console.log("thor_hand")
    }

    if (keyPressed == '70') {
        newImage('https://mir-s3-cdn-cf.behance.net/project_modules/disp/efc7a98971121.560c64112a2c0.png');
        console.log("ironman face")
    }

    if (keyPressed == '67') {
        newImage('http://i.ebayimg.com/images/i/221860607443-0-1/s-l1000.jpg');
        console.log("captain_america_hand")
    }
    
/* this is the functions for moving player object*/
    function right() {
        if (playerX <= 850) {
            playerX = playerX + 10;
            canvas.remove(playerobject);
            playerUpdate();
        }
    }
    
    function left() {
        if (playerX >= 20) {
            playerX = playerX - 10;
            canvas.remove(playerobject);
            playerUpdate();
        }
    }
    
    function up() {
        if (playerY >= 20) {
            playerY = playerY - 10;
            canvas.remove(playerobject);
            playerUpdate();
        }
    }
    
    function down() {
        if (playerY <= 500) {
            playerY = playerY + 10;
            canvas.remove(playerobject);
            playerUpdate();
        }
    }
}