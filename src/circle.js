export default function js() {
    var imglist = this.state.imgsrc;
    var headlist = this.state.head;
    var l = document.getElementById('l');
    var r = document.getElementById('r');
    var img = document.getElementById('img');
    var head = document.getElementById('head');
    var count = 0;

    l.onclick = function () {
        count--;
        if (count < 0)
            count = 4;
        img.src = imglist[count];
        head.innerHTML = headlist[count] + " " + (count + 1) + "/5";
    }
    r.onclick = function () {
        count++;
        if (count > 4)
            count = 0;
        img.src = imglist[count];
        head.innerHTML = headlist[count] + " " + (count + 1) + "/5";
    }
    window.setInterval(r.onclick, 3000);
}