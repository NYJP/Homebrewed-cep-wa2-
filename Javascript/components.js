var root = document.documentElement;

var popup = document.getElementById("popup");
var text = document.getElementById("popuptxt");
var header = document.getElementById("popupheader");
var image = document.getElementById("popupimg");

function resizenav(){
    var w = Math.max(400,window.innerWidth);
    var wh = window.innerHeight;
    var h = Math.max(700,window.innerHeight)*80/100*5/100;
    root.style.setProperty('--buttonsize', String(h) + 'px');
    root.style.setProperty('--buttontopmar', String((h*100/80 - h)/2.5) + 'px');
    root.style.setProperty('--btnsz', String(w*20/100) + 'px');
    root.style.setProperty('--linewidth', String(Math.max(410,w)) + 'px');
    popup.style.fontSize = String(Math.min(window.innerWidth/35, window.innerHeight/40)) + 'px';
}


window.addEventListener('resize',resizenav);
resizenav()

function showpopup(x){
    header.innerHTML = x;
    if (x == 'NAS (Network Attached Storage)'){
        image.style.backgroundImage = "url('css/Resources/popup\ nas.jpg')";
        text.innerHTML = htmlpopup[x];
    }else if (x == 'Motherboard'){
        image.style.backgroundImage = "url('css/Resources/popup\ motherboard.jpg')";
        text.innerHTML = htmlpopup[x];
    }else if (x == 'Monitor'){
        image.style.backgroundImage = "url('css/Resources/popup\ monitor.jpg')";
        text.innerHTML = htmlpopup[x];
    }
    else{
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
    'NAS (Network Attached Storage)':'An NAS is a storage device consisting disk racks that can hold a customisable number of hard disk drives. NAS devices are flexible and scale out, as when you need additional storage, you can easily buy hard drives of higher capacity. Furthermore, the main benefit of a NAS is the RAID system, Redundant Array of Independent Disks. It allows multiple drives to be combined into a single storage space, so if some of the drives, fail, mo data is lost.',
    'Motherboard':'A motherboard provides connectivity between the hardware components of a computer. Motherboards come in differnt form factors, which are thier size and general layout. These form factors are meant for specific types of cases. Motherboards also have the BIOs, which are where most input and output will be attached, such as USB, HDMI and audio ports. The correct BIOs should be chosen for the input and output devices you will be using.',
    'Monitor':'The screen of the computer, it is the main output device. A monitor is basically a tv-screen, although typically it has specifications tuned towards computer use, such as less input lag and higher refreash rate. Monitors are the main way you will be interacting with your computer, so it\'s important to get a monitor that fits your preferences. Things to look out for inlcude the size of the monitor, the refreash rate, the input cables, and the resolution.'
}