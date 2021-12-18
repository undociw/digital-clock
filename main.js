function clock() {
    var hours = document.getElementById('hours');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    console.log(h,m,s);

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}
var interval = setInterval(clock, 1);