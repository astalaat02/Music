const pMusic = new Audio('/Music/audio/12.mp3');

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


const music = [
{
        id: "0",
        musicName: `
        <h5>
        Al-Mashbouh
        <span>Hany Shenouda</span>                            
        </h5>
                `
},
{
        id: "1",
        musicName: `
        <h5>
        Al-Hroub
        <span>Moudy EL-Imam</span>                            
        </h5>
                `
},
{
        id: "2",
        musicName: `
        <h5>
        Khalli balak min aaqlak
        <span>Omar Khayrat</span>                            
        </h5>
                `
},
{
        id: "3",
        musicName: `
        <h5>
        Wala Aaza' Lelsayidat
        <span>Hany Shenouda</span>                            
        </h5>
                `
},
{
        id: "4",
        musicName: `
        <div class="text">
                <h5>Aaris min geha aminia</h5>
                <p>Amr Abu-Zekri</p>
        </div>
                `
},
{
        id: "5",
        musicName: `
        <div class="text">
        <h5>Qadiat aam Ahmed</h5>
        <p>Omar Khairat</p>
        </div>
                `
},
{
        id: "6",
        musicName: `
                <div class="text">
                        <h5>Laylat Al-Qabd aala Fatma</h5>
                        <p>Omar Khairat</p>
                </div>
                `
},
{
        id: "7",
        musicName: `
        <div class="text">
        <h5>Al-kit kat</h5>
        <p>Rajeh Dawood, <br> Sayed Mekkawy</p>
        </div>
                `
},
{
        id: "8",
        musicName: `
        <div class="text">
        <h5>Shams Al-Zanati</h5>
        <p>Hany Shenouda</p>
        </div>
                `
},
{
        id: "9",
        musicName: `
        <div class="text">
        <h5>Aasal Eswd</h5>
        <p>Omar Khairat</p>
        </div>
                `
},
{
        id: "10",
        musicName: `
        <div class="text">
        <h5>Film Thaqafi</h5>
        <p>Khaled Hammad</p>
        </div>
                `
},
{
        id: "11",
        musicName: `
        <div class="text">
        <h5>Elly Baly Balk</h5>
        <p>Khaled Hammad</p>
        </div>
                `
},
{
        id: "12",
        musicName: `
        <div class="text">
        <h5>Hob fi AL-Zinzana</h5>
        <p>Ammar EL-Sheriei</p>
        </div>
                `
},
{
        id: "13",
        musicName: `
        <div class="text">
        <h5>Abu Aly</h5>
        <p>Amr Esmaeil</p>
        </div>
                `
},
{
        id: "14",
        musicName: `
        <div class="text">
        <h5>AL-Sifara fi AL-Eimara</h5>
        <p>Omar Khairat</p>
        </div>
                `
},
{
        id: "15",
        musicName: `
        <div class="text">
        <h5>Kharig aan AL-Qanun</h5>
        <p>Amr Esmaeil</p>
        </div>
                `
},
{
        id: "16",
        musicName: `
        <div class="text">
        <h5>Eisabet Hamadat w Tutu</h5>
        <p>Hany Shenouda</p>
        </div>
                `
},
{
        id: "17",
        musicName: `
        <div class="text">
        <h5>Malakki Eskandaria</h5>
        <p>Yasser Abd EL-Rahman</p>
        </div>
                `
},
{
        id: "18",
        musicName: `
        <div class="text">
        <h5>Eadam Mayitt</h5>
        <p>Omar Khairat</p>
</div>
                `},{
        id: "19",
        musicName: `
        <div class="text">
        <h5>Amir AL-Zalam</h5>
        <p>Khaled Hammad</p>
        </div>
                `
},
]


// Targeting and music playback Function

Array.from(document.getElementsByClassName('music-item')).forEach((el) =>{

        // Targeting the ID and changing the index

        el.addEventListener('click', e =>{
        index = e.target.id;

        // Play The music by index num

        pMusic.src = `
                /Music/audio/${index}.mp3
        `;
        
        // Changing the poster

        poster.src = `
        /Music/img/${index}.jpg
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
        /Music/img/${index}.jpg
        `;

        pMusic.src = `
        /Music/audio/${index}.mp3`;
        
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
        /Music/img/${index}.jpg
        `;

        pMusic.src = `
        /Music/audio/${index}.mp3`;

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

