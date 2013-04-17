/*
  Reset persistent state by doing: reset();
 */

var ad;
var ad_countdown;
var ad_hide;
var ad_shown = true;
var ad_width = 600;
var ad_time_to_hide = 6;
var ad_time_remaining = 0;

// reset persistent state
function reset() {
   delete localStorage["webmq_ad_hidden"];
}

function countdown() {
   window.setTimeout(function() {
      if (ad_shown && ad_time_remaining > 0) {
         ad_time_remaining = ad_time_remaining - 1;
         ad_countdown.innerHTML = ad_time_remaining;

         if (ad_time_remaining > 0) {
            countdown();
         }
      }
   }, 1000);
}

function toggle() {
   if (ad_shown) {
      ad.style.right = '-' + ad_width + 'px';
      ad_shown = false;
      ad_countdown.style.visibility = 'hidden';
   } else {
      ad.style.right = '0px';
      ad_shown = true;
   }
}

window.onload = function () {
   // ad element
   ad = document.getElementById('webmqad');
   ad_countdown = document.getElementById('webmqad_countdown');
   ad_hide = document.getElementById('webmqad_hide');

   // allow manual slide in/out
   ad.onclick = toggle;

   ad_hide.onclick = function(evt) {
      toggle();
      localStorage["webmq_ad_hidden"] = true;
      ad_hide.style.visibility = 'hidden';
      evt.cancelBubble = true;
   }

   var hidden = localStorage["webmq_ad_hidden"];

   if (!hidden) {
      // slide in
      ad.style.right = '0px';

      ad_time_remaining = ad_time_to_hide;
      ad_countdown.innerHTML = ad_time_remaining;

      window.setTimeout(function() {
         if (ad_shown) {
            // slide out
            ad.style.right = '-' + ad_width + 'px';
            ad_shown = false;
            ad_countdown.style.visibility = 'hidden';
         }
      }, 1000 * ad_time_to_hide);

      countdown();
   } else {
      ad_countdown.style.visibility = 'hidden';
      ad_hide.style.visibility = 'hidden';
   }
}
