let d = document;

function task_1() {
    let a1, a2, a3, a4;
    a1 = 6 * (Math.pow( Math.PI, 2 )) + 3 * Math.pow( Math.E, 8 );
    a2 = 2 * Math.cos( 4 ) + Math.cos( 12 ) + 8 * (Math.pow( Math.E, 3 ));
    a3 = 3 * (Math.sin( 9 )) + Math.log( 5 ) + Math.sqrt( 3 );
    a4 = 2 * (Math.tan( 5 )) + 6 * Math.PI + Math.sqrt( 12 );
    let math = [a1, a2, a3, a4];
    math.sort( (a, b) => a - b ); //массив отсортирован по возрастанию
    let max = math[math.length-1];
    let min = math[0];
    let numMax, numMin;
    for (let i=0;i<math.length;i++) {
        if (math[i] === min){
            numMin = i;
        } else if (math[i] === max){
            numMax = i;
        }
        else {}
    }
    d.write( "<div style='font-size: 25px;text-align: center;color: darkblue' >Это максимальный элемент : " + max + " Номер: " + numMax + "</div>" + "<br/>" + "<br/>" + "<br/>" );
    d.write( "<div style='font-size: 25px;text-align: center;color: darkgreen' >Это минимальный элемент : " + min + " Номер: " + numMin + "</div>" + "<br/>" )

}

function task_2() {
    let elements = ["pow", "push", "pop", "shift", "round", "floor", "slice", "sort"];
    let array = [], array2 = [], math = [];
    array.push( Object.getOwnPropertyNames( Array.prototype ) );
    for (let i in elements) {
        if (elements[i] in array) {
            array2.push( elements[i] );
        } else {
            math.push( elements[i] )
        }
    }
    array2.unshift( "some" )
    math.push( "PI" )

    d.write( "<div style='font-size: 25px;text-align: center;color: orange' >Это начальный массив  : " + String( elements ) + "</div>" + "<br/>" );
    d.write( "<div style='font-size: 25px;text-align: center;color: rebeccapurple' >Это отсортированный Array : " + String( array2 ) + "</div>" + "<br/>" );
    d.write( "<div style='font-size: 25px;text-align: center;color: darkorange' >Это отсортированный Math : " + String( math ) + "</div>" );


}

function task_3() {
    let firstNlastN = "Нечай-Ницевич Денис Павлович";
    let line = 0;
    for (let i in firstNlastN) {
        if (firstNlastN[i] !== " ") {
            line++;
        } else {
        }

    }
    let upper = firstNlastN.toUpperCase().concat( " " );
    d.write("<div style='font-size: 25px;text-align: center;color: blue' > ФИО: "  + firstNlastN  + "</div>" + "<br/>")
    d.write( "<div style='font-size: 25px;text-align: center;color: brown' >Объединенные фио в разных регистрах: " + "<br/>" + upper.concat( upper.toLowerCase() ) + "</div>"+"<br/>" );
    d.write( "<div style='font-size: 25px;text-align: center;color: greenyellow' > ФИО: "  + firstNlastN.replace(firstNlastN,'Н-НДП')  + "</div>"+"<br/>" )
}
function task_4(){
    d.write('<style>  ' +
        'table,tr,td{color: ghostwhite;' +
        'border-style:solid;' +
        'background-color:gray;' +
        ' border-width:1px;}'+ 'td{text-align: center;}'
        + '</style>');
    let date = new Date;
    d.write('<table style="margin: auto;width: 60%" >');
    d.write('<caption style=" color: darkblue">Таблица текущих дат</caption>');
    d.write('<tr >' + '<td>Год</td> <td>'+date.getFullYear() +'</td>');
    d.write('<tr >' + '<td>Месяц</td> <td>'+date.getMonth() +'</td>');
    d.write('<tr >' + '<td>День</td> <td>'+date.getDate() +'</td>');d.write('<tr >' + '<td>Час</td> <td>'+date.getHours() +'</td>');
    d.write('<tr >' + '<td>Минуты</td> <td>'+date.getMinutes() +'</td>');d.write('<tr >' + '<td>Секунды</td> <td>'+date.getSeconds() +'</td>');


     d.write('</table>');
}



