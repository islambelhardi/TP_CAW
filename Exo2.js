var boundary = document.getElementsByClassName('boundary');
for (let index = 0; index < boundary.length; index++) {
    boundary[index].addEventListener('mouseover', function () {
          for (let index = 0; index < boundary.length; index++) {
             boundary[index].style.backgroundColor = 'red';
          }
    })
 }