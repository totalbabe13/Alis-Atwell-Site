

let knife1 = document.getElementById('knife-1');
knife1.addEventListener("click", playHardcore);
let happy = new Audio('happy_hardcore.mp3');

function playHardcore(){
 if (happy.paused == true){
   happy.play();
 } else if (happy.paused != true){
   happy.pause();
 }
}

let knife2 = document.getElementById('knife-2');
knife2.addEventListener("click", playSuperEagles);
let superEagles = new Audio('super_Eagles.mp3');

function playSuperEagles(){
 if (superEagles.paused == true){
   superEagles.play();
 } else if (superEagles.paused != true){
   superEagles.pause();
 }
};

let knife3 = document.getElementById('knife-3');
knife3.addEventListener("click", playDominatrix);
let dominatrix = new Audio('dominatrix.mp3');

function playDominatrix(){
 if (dominatrix.paused == true){
   dominatrix.play();
 } else if (dominatrix.paused != true){
   dominatrix.pause();
 }
};

let knife4 = document.getElementById('knife-4');
knife4.addEventListener("click", playPiya);
let piya = new Audio('Piya.mp3');

function playPiya(){
 if (piya.paused == true){
   piya.play();
 } else if (piya.paused != true){
   piya.pause();
 }
};

let knife5 = document.getElementById('knife-5');
knife5.addEventListener("click", playImplog);
let implog = new Audio('implog.mp3');

function playImplog(){
 if (implog.paused == true){
   implog.play();
 } else if (implog.paused != true){
   implog.pause();
 }
};

let knife6 = document.getElementById('knife-6');
knife6.addEventListener("click", playExuma);
let exuma = new Audio('exuma.mp3');

function playExuma(){
 if (exuma.paused == true){
   exuma.play();
 } else if (exuma.paused != true){
   exuma.pause();
 }
};

let knife7 = document.getElementById('knife-7');
knife7.addEventListener("click", playMonica);
let monica = new Audio('monica.mp3');

function playMonica(){
 if (monica.paused == true){
   monica.play();
 } else if (monica.paused != true){
   monica.pause();
 }
};

let knife8 = document.getElementById('knife-8');
knife8.addEventListener("click", playEtta);
let etta = new Audio('etta.mp3');

function playEtta(){
 if (etta.paused == true){
   etta.play();
 } else if (etta.paused != true){
   etta.pause();
 }
};

let knife9 = document.getElementById('knife-9');
knife9.addEventListener("click", playMazzy);
let mazzy = new Audio('mazzy.mp3');

function playMazzy(){
 if (mazzy.paused == true){
   mazzy.play();
 } else if (mazzy.paused != true){
   mazzy.pause();
 }
};
