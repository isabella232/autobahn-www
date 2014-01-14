

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

