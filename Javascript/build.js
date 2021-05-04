var root = document.documentElement;
var popup = document.getElementById("popup");
var text = document.getElementById("popuptxt");
var header = document.getElementById("popupheader");
var image = document.getElementById("popupimg");

function resizenav(){
    var w = Math.max(400,window.innerWidth);
    var h = Math.max(700,window.innerHeight)*80/100*5/100;
    root.style.setProperty('--buttonsize', String(h) + 'px');
    root.style.setProperty('--buttontopmar', String((h*100/80 - h)/2.5) + 'px');
    root.style.setProperty('--btnsz', String(w*19/100*98/100) + 'px');
    popup.style.fontSize = String(Math.min(window.innerWidth/35, window.innerHeight/40)) + 'px';
    root.style.setProperty('--col1align', String(document.getElementById('col2').clientHeight*21/100) + 'px');
    root.style.setProperty('--col3align', String(document.getElementById('col2').clientHeight*16/100) + 'px');
}

resizenav()

window.addEventListener('resize',resizenav);


function showpopup(x){
    header.innerHTML = x;
    if (x == 'Prepare Operating System'){
        image.style.backgroundImage = "url('css/Resources/popup\ nas.jpg')";
        text.innerHTML = htmlpopup[x];
    }else if (x == 'Configure BIOS'){
        image.style.backgroundImage = "url('css/Resources/popup\ motherboard.jpg')";
        text.innerHTML = htmlpopup[x];
    }else if (x == 'Prepare Motherboard'){
        image.style.backgroundImage = "url('css/Resources/popup\ monitor.jpg')";
        text.innerHTML = htmlpopup[x];
    }else if (x == 'Install Fan*'){
        image.style.backgroundImage = "url('css/Resources/popup\ monitor.jpg')";
        text.innerHTML = htmlpopup[x];
    }else{
        image.style.backgroundImage = "url('css/Resources/blank.png')";
        text.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nulla facilisi morbi tempus iaculis urna. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Lorem ipsum dolor sit amet consectetur adipiscing. Dis parturient montes nascetur ridiculus mus mauris. Diam maecenas sed enim ut sem viverra. Nec dui nunc mattis enim ut tellus elementum sagittis. Facilisis magna etiam tempor orci eu lobortis elementum.';
    }
    popup.style.display = "block";
}

window.onclick = function(event){
    if(event.target == popup) {
        popup.style.display = "none";
    }
}

var htmlpopup = {
    'Prepare Operating System':'',
    'Configure BIOS':'',
    'Prepare Motherboard':'',
    'Install Fan*':''
}

