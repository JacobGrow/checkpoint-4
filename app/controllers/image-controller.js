import store from "../store.js";
import imageService from "../services/image-service.js";


function _drawImage(){
  console.log("THE IMAGE MAN SAYS:", store.State.image);
  document.getElementById("bg-image").style.backgroundImage = `url('${store.State.image.url}')`
}

function drawTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  if (h >= 17 && h < 24){
    document.getElementById("greeting").innerText = "Good Evening"
  }
  if (h < 12){
    document.getElementById("greeting").innerText = "Good Morning"
  }
  if (h > 12 && h <= 17){
    document.getElementById("greeting").innerText = "Good Afternoon"
  }
  if(h > 12){
    h -= 12;
    document.getElementById('startTime').innerHTML = h + ":" + m + " pm";
  }
   else {document.getElementById('startTime').innerHTML =
  h + ":" + m + " am";}
  var t = setTimeout(drawTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
export default class ImageController {
constructor(){
  store.subscribe('image', _drawImage)
  drawTime();
}
getImage(){
  imageService.getImage()
}
}
