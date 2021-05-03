var root = document.documentElement;

function resizenav(){
    var w = Math.max(400,window.innerWidth);
    var wh = window.innerHeight;
    var h = Math.max(700,window.innerHeight)*80/100*5/100;
    root.style.setProperty('--buttonsize', String(h) + 'px');
    root.style.setProperty('--buttontopmar', String((h*100/80 - h)/2.5) + 'px');
    root.style.setProperty('--btnsz', String(w*20/100) + 'px');
    root.style.setProperty('--linewidth', String(Math.max(410,w)) + 'px');
}


window.addEventListener('resize',resizenav);
resizenav()


var popup = document.getElementById("popup");
var content = document.getElementById("popupcontent");
var header = document.getElementById("popupheader");
var image = document.getElementById("popupimage");

function showpopup(x){
    popup.style.display = "block";
    content.innerHTML = 'content for' + x + '!';
    header.innerHTML = x;
}

window.onclick = function(event){
    if(event.target == popup) {
        popup.style.display = "none";
    }
  }