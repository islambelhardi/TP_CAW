document.getElementById('start').addEventListener("click", restart);
function restart() {
    for (let index = 0; index < boundary.length; index++) {
        boundary[index].style.backgroundColor = '#eeeeee';
    }
    lose = false;
    playing = true;
}