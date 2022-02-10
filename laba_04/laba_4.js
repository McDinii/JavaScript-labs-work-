"use strict";
let d = document;
function Group(n, spec, quantity) {
    /*this.n = n;*/
    this.spec = spec;
    this.quantity = quantity;
    this.add_stud = function add_stud(q) {
        this.quantity += q;
    }
    this.sub_stud = function sub_stud(q) {
        this.quantity += q;
    }
}

let gr7 = new Group( 7, 'ПОИБМС', 28 );
let gr8 = new Group( 8, 'ПОИБМС', 29 );
let gr9 = new Group( 9, 'ДЭЙВИ', 28 );
let gr10 = new Group( 10, 'ДЭЙВИ', 28 );


function Student(name, lname, mark_ph, mark_m, mark_cs) {
    this.name = name;
    this.lname = lname;
    this.mark_ph = mark_ph;
    this.mark_m = mark_m;
    this.mark_cs = mark_cs;
    this.get_name = function get_name() {
        this.name = name;
        this.lname = lname;
        this.fio= name +" "+ lname;
        alert(this.fio);
        /*d.write( "<div>Ваше имя: " + this.name + "<br/>" + "Фамилия: " + this.lname + "</div>" );*/
    }
    this.average = function average() {
        this.average = Math.round( (this.mark_cs + this.mark_m + this.mark_ph) / 3 );
        return this.average;
        /*d.write(  "Средний балл: " + this.average + "</div><br/><br/>" );*/

    }
}

let vasya = new Student( "Vasya ", "Petrov ", 2, 1, 2 );
let denis = new Student( "Denis ", "Nechay-Nitsevich ", 10, 10, 10 );
let ira = new Student( "Irina ", "Petrova ", 3, 5, 6 );



function task_1(){



    gr7.add_stud( 5 );
    gr7.sub_stud( 3 );
    gr8.add_stud( 6 );
    gr8.sub_stud( 2 );
    gr9.add_stud( 2 );
    gr9.sub_stud( 3 );
    gr10.add_stud( 10 );
    gr10.sub_stud( 7 );
    d.write( "<div style='width:20em;margin-left:10px;color: darkorange;background-color: rebeccapurple'>Кол-во" +
        " студентов" +
        " в" +
        " 7-ой" +
        " группе " + gr8.spec +": ", gr7.quantity + "</div><br/>" );
    d.write( "<div style='width:20em;margin-left:10px;color: darkorange;background-color: rebeccapurple'>Кол-во" +
        " студентов в 8-ой" +
        " группе " + gr8.spec +": ", gr8.quantity + "</div><br/>" );
    d.write( "<div style='width:20em;margin-left:10px;color: darkorange;background-color: rebeccapurple'>Кол-во" +
        " студентов в 9-ой" +
        " группе " + gr9.spec +": ", gr9.quantity + "</div><br/>" );
    d.write( "<div style='width:20em;margin-left:10px;color: darkorange;background-color: rebeccapurple'>Кол-во" +
        " студентов в" +
        " 10-ой" +
        " группе " + gr10.spec +": ", gr10.quantity + "</div><br/>" );

}
Student.gender= Group.gender;
vasya.gender = "Women";
ira.gender = "Men";
denis.gender = "Men";

function task_2() {



    vasya.get_name();
    denis.get_name();
    ira.get_name();


    d.write( "<p>" + vasya.name + vasya.lname + "<br/>" + "Оценки: " + "<br/>" + "Математика: " + vasya.mark_m + "<br/>" + "Физика: " + vasya.mark_ph + "<br/>" + "Информатика:" + vasya.mark_cs + "<br/>" + "Средний балл: " + vasya.average() + "<br/>" +"Пол: " + vasya.gender+ "</p>" );

    d.write( "<p>" + denis.name + denis.lname + "<br/>" + "Оценки: " + "<br/>" + "Математика: " + denis.mark_m + "<br/>" + "Физика: " + denis.mark_ph + "<br/>" + "Информатика:" + denis.mark_cs + "<br/>" + "Средний балл: " + denis.average() + "<br/>" +"Пол: " + denis.gender+ "</p>" );

    d.write( "<p>" + ira.name + ira.lname + "<br/>" + "Оценки: " + "<br/>" + "Математика: " + ira.mark_m + "<br/>" + "Физика: " + ira.mark_ph + "<br/>" + "Информатика:" + ira.mark_cs + "<br/>" + "Средний балл: " + ira.average() +  "<br/>" +"Пол: " + ira.gender + "</p>" );
    console.log(Student);

}
function task_3(){
        let g= document.getElementById("task3");
        let array = [458, 54984, 54654, 46, 234, 6876, 646];
        g.innerHTML = ("Исходный массив: " + array + "<br\>");
        delete array[3];
        g.innerHTML += ("Полученный массив: " + array + "<br\>");

        g.innerHTML += ("2ой в массиве: " + (2 in array) + "<br\>");
        g.innerHTML += ("gender в Student: " + ("gender" in Student) + "<br\>");
        g.innerHTML += ("quantity в Group: " + ("quantity" in Group.prototype) + "<br\>");

        g.innerHTML += ("Является ли array массивом: " + (array instanceof Array) + "<br\>");
        g.innerHTML += ("Является ли Group объектом: " + (Group instanceof Object) + "<br\>");
        g.innerHTML += ("Является ли Student строкой: " + (Student instanceof String) + "<br\>");

        function five(){
            return 5;
        }
        g.innerHTML += ("<br/>five: " + typeof five() + "<br\>");
        g.innerHTML += ("Group: " + typeof Group+ "<br\>");
        g.innerHTML += ("add_stud: " + typeof gr7.add_stud + "<br\>");
        g.innerHTML += ("sub_stud: " + typeof gr7.sub_stud + "<br\>");
        g.innerHTML += ("Student: " + typeof Student + "<br\>");
        g.innerHTML += ("output:" + typeof five() +"<br\>");
        g.innerHTML += ("score: " + typeof denis.average + "<br\>");
        g.innerHTML += ("denis.name: " + typeof denis.name + "<br\>");
        g.innerHTML += ("denis.mark_m: " + typeof denis.mark_m + "<br\>");
        g.innerHTML += ("denis.lname: " + typeof denis.lname + "<br\>");
        g.innerHTML += ("denis.gender: " + typeof denis.gender + "<br\>");
        g.innerHTML += ("denis.mark_ph: " + typeof denis.mark_ph + "<br\>");



}