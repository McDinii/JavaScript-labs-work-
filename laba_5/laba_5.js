"use strict"
const db = document.body;
const body = db.childNodes;
console.log( "Задание 2\n" );
console.log( body );


function task3() {
    const span = document.querySelector( "span" );
    alert( "Задание 3.1\n" + span.innerHTML );


    const span1 = document.getElementsByTagName( "span" );
    alert( "Задание 3.2\n" + span1[0].innerHTML );

    const span2 = document.getElementById( "span" );
    alert( "Задание 3.3\n" + span2.innerHTML );
}

function task4() {
    const elem = document.querySelector( "table" );
    let m =  document.getElementsByClassName( "num" );
    let num=0,k=0;
    for ( ; k< m.length;k++){
        num+= Number(m[k].innerHTML);
    }
    let aver = num/k;
    const new_span = document.createElement( "span" );
    new_span.innerHTML = `Средний балл: ` + aver;
    elem.after(new_span);
}

