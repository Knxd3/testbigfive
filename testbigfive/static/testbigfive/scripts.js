// anime({
//     targets: 'div',
//     // Properties 
//     translateX: 100,
//     borderRadius: 50,
//     // Property Parameters
//     duration: 2000,
//     easing: 'linear',
//     // Animation Parameters
//     direction: 'alternate'
//   });  

function f1() {
  alert("Hello from a static file!");
}


function survey() {
    $('#mytable').removeClass('d-none')
}

function progr_bar(key, val) {
    console.log(key)
    var elem = document.getElementById(key); 
    var width = 1;
    var id = setInterval(frame, 25);
    k = 0
    function frame() {
      if (width >= val) {
        clearInterval(id);
      } else {
        k++;
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1 + '%';
      }
    }
    
}


//  $(document).ready(function() {
//     $(".bring_tbl").click(function() {
//       alert('script loaded ok2');
//       $('#mytable').removeClass('invisible');
//     });
//   }
//  )


//  var basicTimeline = anime.timeline({
//     autoplay: false
//   });
  
//   var pathEls = $(".check");
//   for (var i = 0; i < pathEls.length; i++) {
//     var pathEl = pathEls[i];
//     var offset = anime.setDashoffset(pathEl);
//     pathEl.setAttribute("stroke-dashoffset", offset);
//   }
  
//   basicTimeline
//     .add({
//       targets: ".text",
//       duration: 1,
//       opacity: "0"
//     })
//     .add({
//       targets: ".button",
//       duration: 1300,
//       height: 10,
//       width: 300,
//       backgroundColor: "#2B2D2F",
//       border: "0",
//       borderRadius: 100
//     })
//     .add({
//       targets: ".progress-bar",
//       duration: 2000,
//       width: 300,
//       easing: "linear"
//     })
//     .add({
//       targets: ".button",
//       width: 0,
//       duration: 1
//     })
//     .add({
//       targets: ".progress-bar",
//       width: 80,
//       height: 80,
//       delay: 500,
//       duration: 750,
//       borderRadius: 80,
//       backgroundColor: "#71DFBE"
//     })
//     .add({
//       targets: pathEl,
//       strokeDashoffset: [offset, 0],
//       duration: 200,
//       easing: "easeInOutSine"
//     });
  

//   $(".button").click(function() {
//     basicTimeline.play();
//     alert('Im here')
//   });
  
//   $(".text").click(function() {
//     basicTimeline.play();
//   });
 
// });
