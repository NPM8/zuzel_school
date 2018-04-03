function rgbToHex(r, g, b){
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}

function render() {
    ctx.strokeStyle = "#ff58e3";
    console.log(last, start);

    if(start == true) {
        ctx.beginPath();
        ctx.moveTo(600,550);
        ctx.lineTo(600,550);
        start = false;
        last = {x: 600, y: 551};
        ctx.stroke();
    } else {
        dx = Math.sin(to_go * (Math.PI/180))*3;
        dy = Math.cos(to_go * (Math.PI/180))*3;
        var p = canvas.getImageData(last.x+dx, last.y+dy, 1, 1).data;
        // var color = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
        // console.log(color);
        // if(color == "#77aabb" || color == "#000000") {
        //     alert("a;a");
        //     return;
        // }
        ctx.beginPath();
        ctx.moveTo(last.x, last.y);
        ctx.lineTo(last.x+dx, last.y+dy);
        last = {
            x: last.x+dx,
            y: last.y+dy,
        }
        ctx.stroke();
    }
    requestAnimationFrame(render);
}
const canvas = document.getElementById("main"),
    ctx = canvas.getContext("2d");
let start = true, last = "", to_go = 90;

window.onload = () => {
    window.onkeydown = (e) => {
        e.preventDefault();
        switch (e.key) {
            case "a":
                to_go += 11;
                break;
            case "s":
                to_go -= 11;
                break;
        }
    };

    window.onkeypress = (e) => {
        e.preventDefault();
        switch (e.key) {
            case "a":
                to_go += 11;
                break;
            case "s":
                to_go -= 11;
                break;
        }
    };
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    // background
    ctx.fillStyle = "#77aabb";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // /background
    // gen border
    ctx.strokeStyle = "black";
    ctx.fillStyle = "#ffe649";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(350,2);
    ctx.lineTo(851,2);
    ctx.arc(851,351,348,1.5*Math.PI,0.5*Math.PI);
    ctx.moveTo(851,698);
    ctx.lineTo(350,698);
    ctx.arc(350,349,349,0.5*Math.PI,1.5*Math.PI,false);
    ctx.fill();

    ctx.strokeStyle = "black";
    ctx.fillStyle = "#ffe649";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(350,2);
    ctx.lineTo(851,2);
    ctx.arc(851,350,348,1.5*Math.PI,0.5*Math.PI);
    ctx.moveTo(851,698);
    ctx.lineTo(350,698);
    ctx.arc(350,350,348,0.5*Math.PI,1.5*Math.PI,false);
    ctx.stroke();
    // /gen border
    // gen inner
    ctx.strokeStyle = "black";
    ctx.fillStyle = "#77aabb";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(350,202);
    ctx.lineTo(851,202);
    ctx.arc(851,351,148,1.5*Math.PI,0.5*Math.PI);
    ctx.moveTo(851,498);
    ctx.lineTo(350,498);
    ctx.arc(350,349,149,0.5*Math.PI,1.5*Math.PI,false);
    ctx.fill();

    ctx.strokeStyle = "black";
    ctx.fillStyle = "#ffe649";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(350,202);
    ctx.lineTo(851,202);
    ctx.arc(851,350,148,1.5*Math.PI,0.5*Math.PI);
    ctx.moveTo(851,498);
    ctx.lineTo(350,498);
    ctx.arc(350,350,148,0.5*Math.PI,1.5*Math.PI,false);
    ctx.stroke();
    // /gen inner
    // start line
    ctx.strokeStyle = "#f00";
    ctx.beginPath();
    ctx.moveTo(600,500);
    ctx.lineTo(600,695);
    ctx.stroke();
    console.log(ctx);
    // /start line
        render();

    // setInterval(render,100);
};