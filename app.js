var timer =5;
var score = 10;
var hint = 0

function increseScore() {
    score+= 10;
    document.querySelector("#Score").textContent = score
}

function getnewint (){
    let hint  = Math.floor(Math.random() * 10)
    document.querySelector("#hite").textContent = hint 
}

function bubble () {
    let clutter = "";
for(let i =0 ; i<=110; i++) {
    let num  = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${num}</div>`
}

document.querySelector("#pbot").innerHTML = clutter
}

function runtimer () {
     var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#ptom").textContent = timer
        }
        else {
            clearInterval(timerint )
          document.querySelector("#pbot").textContent  = `Game Finsh`
        }
    }, 1000)
}

document.querySelector("#pbot").addEventListener("click", function(dets){
    var clickname =  Number(dets.target.textContent);
    if(clickname === hint ) {
        increseScore ()
         getnewint ()
         bubble()



       
    }
})
getnewint ()
runtimer ()
bubble()
increseScore ()

