var root = document.documentElement;

var popup = document.getElementById("popup");
var text = document.getElementById("popuptxt");
var header = document.getElementById("popupheader");
var image = document.getElementById("popupimg");

function resizenav(){
    var w = Math.min(Math.max(400,window.innerWidth),900);
    var vw = window.innerWidth;
    var linew = Math.min(Math.max(400,window.innerWidth),910);
    var h = Math.max(700,window.innerHeight)*80/100*5/100;
    root.style.setProperty('--visualw', String(w) + 'px');
    root.style.setProperty('--buttonsize', String(h) + 'px');
    root.style.setProperty('--buttontopmar', String((h*100/80 - h)/3) + 'px');
    root.style.setProperty('--btnsz', String(w*19.5/100) + 'px');
    root.style.setProperty('--linewidth', String(Math.max(410,linew)*97/100) + 'px');
    popup.style.fontSize = String(Math.min(window.innerWidth/35, window.innerHeight/40)) + 'px';
    root.style.setProperty('--optionalnamemargin', String((w*19.5/100+8)*-1) + 'px');
    root.style.setProperty('--namefonts', String(w*19.5/100*15/100) + 'px');
    if (vw>900) root.style.setProperty('--aligndiagram', String((vw-900)/2) + 'px');
    else root.style.setProperty('--aligndiagram', '0');
    if(image.scrollWidth > image.clientWidth) image.style.overflowX = 'scroll';
    else image.style.overflowX = 'hidden';
}

window.addEventListener('resize',resizenav);
resizenav()

function showpopup(x){
    header.innerHTML = x;
    if (x == 'NAS (Network Attached Storage)'){
        image.innerHTML = "<img src='css/Resources/popup\ nas.jpg'><img src='css/Resources/popup\ nas2.jpg'><img src='css/Resources/popup\ nas3.png'>";
        text.innerHTML = htmlpopup[x];
    }else if (x == 'Motherboard'){
        image.innerHTML = "<img src='css/Resources/popup\ motherboard.jpg'><img src='css/Resources/popup\ motherboard2.jpg'><img src='css/Resources/popup\ motherboard3.jfif'>";
        text.innerHTML = htmlpopup[x];
    }else if (x == 'Monitor'){
        image.innerHTML = "<img src='css/Resources/popup\ monitor.jpg'><img src='css/Resources/popup\ monitor2.jpg'><img src='css/Resources/popup\ monitor3.png'><img src='css/Resources/popup\ monitor4.jpg'>";
        text.innerHTML = htmlpopup[x];
    }
    else{
        image.innerHTML = "<img src='css/Resources/blank.png'><img src='css/Resources/blank.png'><img src='css/Resources/blank.png'><img src='css/Resources/blank.png'><img src='css/Resources/blank.png'>";
        text.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nulla facilisi morbi tempus iaculis urna. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Lorem ipsum dolor sit amet consectetur adipiscing. Dis parturient montes nascetur ridiculus mus mauris. Diam maecenas sed enim ut sem viverra. Nec dui nunc mattis enim ut tellus elementum sagittis. Facilisis magna etiam tempor orci eu lobortis elementum.';
    }
    popup.classList.add('show');
    setTimeout(function(){
        if(image.scrollWidth > image.clientWidth) image.style.overflowX = 'scroll';
        else image.style.overflowX = 'hidden';
    },1);
}

window.onclick = function(event){
    if(event.target == popup && popup.classList.contains('show')) {
        popup.classList.remove('show');
    }
}

var htmlpopup = {
    'NAS (Network Attached Storage)':'An NAS is a storage device consisting disk racks that can hold a customisable number of hard disk drives. NAS devices are flexible and scale out, as when you need additional storage, you can easily buy hard drives of higher capacity. Furthermore, the main benefit of a NAS is the RAID system, Redundant Array of Independent Disks. It allows multiple drives to be combined into a single storage space, so if some of the drives fail, no data is lost.',
    'Motherboard':'A motherboard provides connectivity between the hardware components of a computer. Motherboards come in differnt form factors, which are their size and general layout (ATX, micro ATX, EATX and mini-ITX —— See image). These form factors are meant for specific types of cases. Motherboards also have the BIOS, which are where most input and output will be attached, such as USB, HDMI and audio ports. The correct BIOs should be chosen for the input and output devices you will be using.',
    'Monitor':'The screen of the computer, it is the main output device. A monitor is basically a tv-screen, although typically it has specifications tuned towards computer use, such as less input lag and higher refreash rate. Monitors are the main way you will be interacting with your computer, so it\'s important to get a monitor that fits your preferences. Things to look out for inlcude the size of the monitor, the refreash rate, the input cables, and the resolution.'
}