// 1 approch
// document.getElementById("tower").onclick = function () {
//   alert("tower click");
// };

// attchEvent
// jQuery - on
//                       *notes8
// important study in event object
//type, timeStamp, defaultPreventd, target, toElement, srcElement,curentTarget
// clientX, clientY, screenX, screenY
// altkey, ctrlKey, shiftKey, keyCode

// 2nd approch
// document.getElementById("tower").addEventListener("click", function () {
//   alert("tower click again");
// });

// document.getElementById("bike").addEventListener("click", function (e) {
//   console.log(e);
//   //   console.log(e.clientX);
//   //   console.log(e.view.innerWidth);
//   //   console.log(e.view.innerHeight);
// });

// Event propagation
// two type of event propagation bubbling and capturing
// also event propagation is false or default.

// bubling travels from the target to the root
// document.getElementById("tower").addEventListener("click", function (e) {
//   console.log("tower click");
//   // e.stopPropagation(); // doent bubble and go to upper
// });
// // and capturing travels from root to the target
// document.getElementById("image").addEventListener(
//   "click",
//   function (e) {
//     console.log("click inside the ul");
//   },
//   true
// );

// document.getElementById("google").addEventListener("click", function (e) {
//   e.preventDefault();
//   //   e.stopPropagation(); //stop propagation
//   console.log("google clicked");
// });

document.querySelector("#image").addEventListener(
  "click",
  function (e) {
    // console.log(e.target.parentNode);
    // let removeIt = e.target.parentNode;

    // console.log(e.target.tagName);
    if (e.target.tagName === "IMG") {
      console.log(e.target.id);
      let removeIt = e.target.parentNode;
      removeIt.remove();
    }
  },
  false
);
// removeIt.parentNode.removeChild(removeIt);
