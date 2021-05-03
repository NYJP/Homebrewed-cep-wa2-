var root = document.documentElement;

function resizenav(){
    var h = Math.max(700,window.innerHeight)*80/100*5/100;
    root.style.setProperty('--buttonsize', String(h) + 'px');
    root.style.setProperty('--buttontopmar', String((h*100/80 - h)/2.5) + 'px');
}


window.addEventListener('resize',resizenav);
resizenav()