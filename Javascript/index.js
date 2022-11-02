var root = document.documentElement;

function resizenav(){
    var w = Math.max(300,window.innerWidth)*28/100;
    var h = Math.max(750,window.innerHeight)*90/100*33/100;
    if (w>h){
        root.style.setProperty('--buttonsize', String(h*0.85) + 'px');
        root.style.setProperty('--buttontopmar', String((h*100/90 - h)/2.5) + 'px');
    }else{
        root.style.setProperty('--buttonsize', String(w*0.85) + 'px');
        root.style.setProperty('--buttontopmar', String((h*100/90 - w)/2.5) + 'px');
    }
}


window.addEventListener('resize',resizenav);
resizenav()