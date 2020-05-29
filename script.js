var year = new Date().getFullYear();
var fourthOfJuly = new Date(year, 5, 1).getTime();
var a = 0;
    document.getElementById("card").style.display="none";
var message = "\"<p>Hey there, yes you, I have something to say.</p>\
\
<p>A little birdie told me it was your birthday today.</p> \
\
<p>It went on to tell that it thinks you're quite swell, \
\
<p>that you're beautiful, bright, and you light up the night. </p>\
\
<p>I told the lil' birdie that I can't disagree, </p>\
\
<p>and that I cherish every moment of you & me. </p>\
\
<p>I love you, dear. I always will, </p>\
\
<p>even more than the birdie could ever tell.</p>\"";
// countdown
var timer = setInterval(function() {

  // get today's date
  var today = new Date().getTime();

  // get the difference
  var diff = fourthOfJuly - today;

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display days > 0 || hours > 0 || minutes > 0 || seconds > 0
    if(days > 0 || hours > 0 || minutes > 0 || seconds > 0)
        //if(0)
    {
        document.getElementById("timer").innerHTML ="<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>days</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>hours</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>minutes</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>seconds</div> \
</div>";}
    
  else{clearInterval(timer); a = 1; pp();}  

}, 3000);

function pp(){
    
if (a == 1){
    
    document.getElementById("cnt").remove();
    document.getElementById("msg").innerHTML=message;

    document.getElementById("card").style.display="block";
    (function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

}());
    
    
}
}