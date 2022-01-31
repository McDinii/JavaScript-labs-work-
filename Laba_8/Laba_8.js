function task_1(el){
el.style.color = "blue"
}
function task_11(el){
el.style.color = "pink"
}
let counter_2 = 0;
function task_2(el){

    counter_2++;
    if (!(counter_2 % 2 === 0)){
    el.style.fontSize = "large";}
    else{
    el.style.fontSize = "small"
    }
}
let counter_3 = 0 ;
function task_3(el){
    counter_3++;
    if (!(counter_3 % 2 === 0)) {
        el.src = "img/раф_фильм.jfif"}
    else
        {
            el.src = "img/раф_2012.jfif"
        }


}
let counter_4 = 0 ;
function task_4(){
    counter_4++;
    if (!(counter_4 % 2 === 0)) {
        document.getElementById("task_4").innerHTML = ('<img src="img/Img.png" alt="">');
    }
    else{document.getElementById("task_4").innerHTML = ("Я текст");

    }
}
function task_5(el){
    el.style.width= "50%"
}
function task_55(el){
    el.style.width = "25%"
}
document.body.addEventListener("dblclick", task_6)

function task_6(event){//im not working with "srcElement" because its outdated
    if(event.target.className === "task_6") {
        event.target.style.border = "solid 5px red"
    }
}
