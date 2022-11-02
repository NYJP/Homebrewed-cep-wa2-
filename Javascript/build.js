var root = document.documentElement;
var popuptipspopup = document.getElementById("popup");
var text = document.getElementById("popuptxt");
var header = document.getElementById("popupheader");
var popuptop = document.getElementById("popuptop");
var confetti = document.getElementById("confetti");
var tips = document.getElementById("popuptips");

function resizenav(){
    var w = Math.max(400,window.innerWidth);
    var disw =  Math.min(Math.max(400,window.innerWidth),900);
    var h = Math.max(700,window.innerHeight)*80/100*5/100;
    root.style.setProperty('--buttonsize', String(h) + 'px');
    root.style.setProperty('--buttontopmar', String((h*100/80 - h)/3) + 'px');
    root.style.setProperty('--btnsz', String(disw*19/100) + 'px');
    root.style.setProperty('--popuptxt', String(Math.min(window.innerWidth/35, window.innerHeight/40)) + 'px');
    root.style.setProperty('--col1align', String(document.getElementById('col2').clientHeight*20/100) + 'px');
    root.style.setProperty('--col3align', String(document.getElementById('col2').clientHeight*15/100) + 'px');
    root.style.setProperty('--steptreeh', String(document.getElementById('col2').clientHeight) + 'px');
    root.style.setProperty('--div3namemargin', String(-1*(disw*19/100+5)) + 'px');
    if (w>900) root.style.setProperty('--aligndiagram', String((w-900)/2 + w*1/100) + 'px');
    else root.style.setProperty('--aligndiagram', '1%');
}

resizenav();
window.addEventListener('resize',resizenav);

function showpopup(x){
    popuptop.innerHTML = '123';
    tips.setAttribute( "onClick", "popuptips('"+x+"')" );
    confetti.style.display = "none";
    header.innerHTML = x;
    if (x == 'Prepare Operating System'){
        popuptop.innerHTML = "<img id = 'popupimg' onclick = 'showimg()' src='css/Resources/download\ OS.png'>";
        text.innerHTML = htmlpopup[x];
    }else if (x == 'Configure BIOS'){
        popuptop.innerHTML = "<img id = 'popupimg' onclick = 'showimg()' src='css/Resources/BIOS\ page.png'>";
        text.innerHTML = htmlpopup[x];
    }else if (x == 'Prepare Motherboard'){
        popuptop.innerHTML = "<img id = 'popupimg' onclick = 'showimg()' src='css/Resources/Prepare\ motherboard2.jpg'>";
        text.innerHTML = htmlpopup[x];
    }else if (x == 'Install Fan *OPTIONAL*'){
        popuptop.innerHTML = "<img id = 'popupimg' onclick = 'showimg()' src='css/Resources/fans.jpg'>";
        text.innerHTML = htmlpopup[x];
    }else if (x == 'Congratulations!'){
        popuptop.innerHTML = "<img id = 'popupimg' onclick = 'showimg()' src='css/Resources/congrats.jpeg'>";
        confetti.style.display = "block";
        text.innerHTML = htmlpopup[x];
    }else{
        popuptop.innerHTML = "<img id = 'popupimg' onclick = 'showimg()' src='css/Resources/blank.png'>";
        text.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nulla facilisi morbi tempus iaculis urna. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Lorem ipsum dolor sit amet consectetur adipiscing. Dis parturient montes nascetur ridiculus mus mauris. Diam maecenas sed enim ut sem viverra. Nec dui nunc mattis enim ut tellus elementum sagittis. Facilisis magna etiam tempor orci eu lobortis elementum.';
    }
    popup.classList.add('show');
}

function popuptips(x){
    text.classList.add('txtanimation');
    setTimeout(function(){
        text.classList.remove('txtanimation');
        if (avail.includes(x)){
            if (text.innerHTML == htmlpopup[x]){
                text.innerHTML = htmlpopuptips[x];
            }else text.innerHTML = htmlpopup[x];
        }else{
            if (text.innerHTML == 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nulla facilisi morbi tempus iaculis urna. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Lorem ipsum dolor sit amet consectetur adipiscing. Dis parturient montes nascetur ridiculus mus mauris. Diam maecenas sed enim ut sem viverra. Nec dui nunc mattis enim ut tellus elementum sagittis. Facilisis magna etiam tempor orci eu lobortis elementum.'){
                text.innerHTML = 'Things to look out for:<br><br>- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>- Amet nulla facilisi morbi tempus iaculis urna.<br><br>- Pharetra diam sit amet nisl suscipit adipiscing bibendum.';
            }else text.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nulla facilisi morbi tempus iaculis urna. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Lorem ipsum dolor sit amet consectetur adipiscing. Dis parturient montes nascetur ridiculus mus mauris. Diam maecenas sed enim ut sem viverra. Nec dui nunc mattis enim ut tellus elementum sagittis. Facilisis magna etiam tempor orci eu lobortis elementum.';
        }
    },500)
}

function showimg(){
    img = document.getElementById('popupimg');
    if (img.style.height == '90vh'){
        img.style.height = '98%';
        img.style.width = '100%';
        img.style.filter = 'brightness(70%)';
        img.style.position = 'relative';
        img.style.objectFit = 'scale-down';
        img.style.top = '0';
        img.style.left = '0';
    }else{
        img.style.height = '90vh';
        img.style.width = '90vw';
        img.style.filter = 'brightness(100%)';
        img.style.position = 'fixed';
        img.style.top = '5vh';
        img.style.left = '5vw';
        img.style.objectFit = 'cover';
    }
}

window.onclick = function(event){
    if(event.target == popup && popup.classList.contains('show')) {
        popup.classList.remove('show');
    }
}

var htmlpopup = {
    'Prepare Operating System':'Use a flash drive that has a minimum of 8GB of space, and prepare it by wiping the disk and formatting it to an universal format. Go to the appropriate website to download the operating system you have decided on, and ensure you are downloading the software from an official distributor. Be sure that the version of the operating system is up to date and compatible with the hardware you have. Download the software onto the flash drive and keep it one side, we\'ll only use it later.',
    'Configure BIOS':'Boot up the computer and press the debug key to enter the BIOS menu. Plug in the flash drive you prepared from the earlier step. From the BIOS menu navigate to the startup order, and select the flash drive. Prioritise the flash drive, either by dragging it above the disk drive selected, or by right clicking and pressing \'prioritise\' (this varies between different motherboards). Then save changes and restart the computer, and it will boot up in the operating system you installed.',
    'Prepare Motherboard':'Setup the motherboard in a large flat area. Layout all the parts you will be installing, namely the CPU, its cooling system, RAM chips, SSD. Install the CPU into the CPU slot, apply a layer of cooling paste, and attach the cooling system on top. Plug the RAM chips into the RAM slots by holding them evenly above the slot, and pressing down gently on both ends.Try to alternate the occupied slots. Lastly, screw in the SSD into one of the extension slots, and be sure that it is connected to the port securely.',
    'Install Fan *OPTIONAL*':'If you bought any extra fans, plan out where on the casing you want to attach the fans. Make sure that the fans guide the air in a specific path, preferably over most of the components and then back out of the casing. Be sure to take into account the added fan that is built into the PSU, the fan that comes with the CPU, and the fans attached to the GPU. After planning, secure the fans to the casing with the screws and attach the wires to the PSU.',
    'Congratulations!':'Congratulations! You\'re Done!<br><br>If this helped you, please share it with others!'
}

var htmlpopuptips = {
    'Prepare Operating System':'Things to look out for:<br><br>- Make sure to download the software from the proper distributor, and run an antivirus to be sure.<br><br>- We advise windows for ease of setup, but the choice is up to you',
    'Configure BIOS':'Things to look out for:<br><br>- Make sure that the correct drive is chosen to boot<br><br>- Try to turn on \'safe boot\' to prevent the motherboard being bricked',
    'Prepare Motherboard':'Things to look out for:<br><br>- Work in a low static enviroment, or with the aid of an anti-static band<br><br>- Differnt form factors work well for differnt workspaces<br><br>- Pick a motherboard with sufficent BIOS for all input and output devices you plan to use.',
    'Install Fan *OPTIONAL*':'Things to look out for:<br><br>- Colored fans, also knows as RGB fans, typically work better with a neater setup<br><br>- If you\'re agasint the idea of fans, consider trying water based cooling systems',
    'Congratulations!':'<br><br><div id=\'links\'>Follow us @ <br><a href=\'https://youtube.com\'><img src=\'css/Resources/icon_youtube.png\'></a> <a href=\'https://discord.com\'><img src=\'css/Resources/icon_discord.png\'></a><a href=\'https://twitter.com\'><img src=\'css/Resources/icon_twitter.png\'></a><a href=\'https://facebook.com\'><img src=\'css/Resources/icon_facebook.png\'></a><a href=\'https://instagram.com\'><img src=\'css/Resources/icon_insta.png\'></a></div>',
}

var avail = ['Prepare Operating System',
'Configure BIOS',
'Prepare Motherboard',
'Install Fan *OPTIONAL*',
'Congratulations!']