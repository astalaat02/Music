const pMusic = new Audio('./audio/12.mp3');

// Select Elements

let rightD = document.getElementById('nextD');
let leftD = document.getElementById('backD');
let rightT = document.getElementById('nextT');
let leftT = document.getElementById('backT');

let discoverUL = document.getElementsByClassName('discover-ul')[0];
let trendingUL = document.getElementsByClassName('trending-ul')[0];


let control = document.getElementById('control')

let currentTime = document.getElementById('currentTime')
let endTime = document.getElementById('endTime');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

let poster = document.getElementById('poster');

let pause = document.getElementById('pause')
let play = document.getElementById('play')
let next = document.getElementById('next')
let back = document.getElementById('back')

// Index number

let index = 0;

// Scroll Right & Left Function

rightD.addEventListener('click', ()=>{
discoverUL.scrollLeft += 330;
})

leftD.addEventListener('click', ()=>{
discoverUL.scrollLeft -= 330;
})

rightT.addEventListener('click', ()=>{
trendingUL.scrollLeft += 330;
})

leftT.addEventListener('click', ()=>{
trendingUL.scrollLeft -= 330;
})

// Targeting and music playback Function

Array.from(document.getElementsByClassName('music-item')).forEach((el) =>{

        // Targeting the ID and changing the index

        el.addEventListener('click', e =>{
        index = e.target.id;

        // Play The music by index num

        pMusic.src = `
                ./audio/${index}.mp3
        `;
        
        // Changing the poster

        poster.src = `
        ./img/${index}.jpg
        `;

        pMusic.play();
        
        // Show playback control
        
        control.classList.remove('control-dn');
        
        control.classList.add('control');

})
})

// Previous music playback Function

back.addEventListener('click', () =>{
        
        if(index < 1){
        index = Array.from(document.getElementsByClassName('music-item')).length
        }
        
        pMusic.pause();
        index -= 1;

        poster.src = `
        ./img/${index}.jpg
        `;

        pMusic.src = `
        ./audio/${index}.mp3`;
        
        pMusic.play();
})

// Next music playback Function

next.addEventListener('click', () =>{

        if(index == Array.from(document.getElementsByClassName('music-item')).length -1){
                index = -1;
        }
        
        pMusic.pause();

        index = +index + 1;

        poster.src = `
        ./img/${index}.jpg
        `;

        pMusic.src = `
        ./audio/${index}.mp3`;

        pMusic.play();
})

// Time update Function

pMusic.addEventListener('timeupdate', () =>{
        let musicDuration = pMusic.duration;
        let musicCurrentTime = pMusic.currentTime;

        let min = Math.floor(musicDuration/60);
        let sec = Math.floor(musicDuration%60);
        if (sec<10) {
        sec = `0${sec}`
        }
        
        endTime.innerText = `${min}:${sec}`;

        let min1 = Math.floor(musicCurrentTime/60);
        let sec1 = Math.floor(musicCurrentTime%60);
        if (sec1<10) {
        sec1 = `0${sec1}`
        }

        currentTime.innerText = `${min1}:${sec1}`;


        let progressbar = parseInt((pMusic.currentTime / pMusic.duration)*100);

        seek.value = progressbar;

        let seekbar = seek.value;
        bar2.style.width = `${seekbar}%`;
        dot.style.left = `${seekbar}%`;

})

// Manual time update Function

seek.addEventListener('change', () =>{
        pMusic.currentTime = seek.value * pMusic.duration / 100;
})

// Pause Function

pause.onclick = function(){
        pMusic.pause();
}

// Play Function

play.onclick = function(){
        pMusic.play();
}

