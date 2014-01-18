

var showWidget = true;

if (showWidget) {
   console.log("loaded");
   var widget = document.getElementById("communityWidget"),
       parentUrl = window.location.host;

   widget.classList.remove("nonDisplay");
   widget.classList.add("min");

   // widget.addEventListener("load", sendUrlToWidget);
   // function sendUrlToWidget() {
   //    widget.contentWindow.postMessage(parentUrl, "*"); // "*" - can be sent irrespective of the origin of the calling page
   // }

   function onIFrameMessage(evt) {
      console.log(evt.data);
      var targetSize = evt.data;
      if(targetSize === "min") {
         widget.classList.remove("max");
         widget.classList.add("min");
      } else {
         widget.classList.remove("min");
         widget.classList.add("max");
      }
   }

   // window.addEventListener("message", function(evt) { console.log("message received", evt.data);});
   window.addEventListener("message", onIFrameMessage);


}


// detect user interacting with the page / tab
// message this to the community widget iframe

document.addEventListener("click", onInterActionDetected);
document.addEventListener("keydown", onInterActionDetected);
document.addEventListener("mousemove", onInterActionDetected);
document.addEventListener("mousedown", onInterActionDetected);
document.addEventListener("mouseup", onInterActionDetected);
document.addEventListener("wheel", onInterActionDetected);

// for touch devices
document.addEventListener("touchstart", onInterActionDetected);
document.addEventListener("touchend", onInterActionDetected);
document.addEventListener("touchmove", onInterActionDetected);

window.addEventListener("focus", onInterActionDetected);
window.addEventListener("blur", onInterActionDetected);

var messageTarget = document.getElementById("communityWidget").contentWindow;
function onInterActionDetected(evt) {
   // console.log("interaction detected", evt.type);
   var actionType;
   if(evt.type === "focus") {
      actionType = "focus";
   } else if (evt.type === "blur") {
      actionType = "blur";
   } else {
      actionType = "action";
   }
   messageTarget.postMessage(actionType, "*");
}
