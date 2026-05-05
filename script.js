window.addEventListener('load',()=>{

  setTimeout(()=>{

    document.getElementById('loader').style.display='none';

  },2500);

});

function playMusic(){

  const music=document.getElementById('bgMusic');

  music.play();

}

function createFloating(){

  const item=document.createElement('div');

  item.classList.add('floating');

  item.innerHTML='💖';

  item.style.left=Math.random()*100+'vw';

  item.style.fontSize=(Math.random()*20+15)+'px';

  document.body.appendChild(item);

  setTimeout(()=>{
    item.remove();
  },10000);

}

setInterval(createFloating,300);

const quotes=[

  'Kamu hebat karena tetap bertahan 🌸',
  'Semua perjuanganmu akan terbayar ✨',
  'Masa depanmu cerah 💖',
  'Jangan takut mencoba hal baru 🎓',
  'Kamu lebih kuat dari yang kamu kira 🌷'

];

function changeQuote(){

  const random=Math.floor(Math.random()*quotes.length);

  document.getElementById('quoteBox').innerHTML=quotes[random];

}

function openWebsite(){

  const intro=document.getElementById('introScreen');

  intro.classList.add('intro-hide');

document.body.style.overflow='hidden';

setTimeout(()=>{

  document.body.style.overflow='auto';

},2500);

}