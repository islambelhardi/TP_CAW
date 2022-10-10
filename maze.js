
// exo 2
var boundary = document.getElementsByClassName('boundary');
document.getElementById('start').addEventListener("click", play);
var lose = false;
var playing = true;
var torestart = false;
function play() {
   // if you touch boudary it turns red = > exo 2
   if (playing) {
      for (let index = 0; index < boundary.length; index++) {
         boundary[index].addEventListener('mouseover', function () {
            if (playing) {
               for (let index = 0; index < boundary.length; index++) {
                  boundary[index].style.backgroundColor = 'red';
               }
               // exo 6
               document.getElementById('status').innerText = 'You lost, try again'
            }
            lose = true;
            playing = false;
         })
      }
      document.getElementById('end').addEventListener('click', function () {
         if (lose == false) {
            // exo 3
            alert('you win');
            // exo 6
            document.getElementById('status').innerText = 'Congrats , you win'
            playing = false;
         }
      })
      // exo7
      document.getElementById('maze').addEventListener('mouseleave', function () {
         if (playing) {
            alert('Dont cheat')
            playing = false;
         }
      })
   } else {
      for (let index = 0; index < boundary.length; index++) {
         boundary[index].style.backgroundColor = '#eeeeee';
      }
      lose = false;
      playing = true;
   }

}

