    //Задание №1
function f1() {
    alert('Задание №1\n\nВас приветсвует учебный центр');
    name = prompt('Задание №1\n\nВведите имя:', 'Сюда');
    alert('Задание №1\n\nДобро пожаловать на наши курсы, ' + name);
    if (confirm('Задание №1\n\nХотите стать Web-дизайнером?')) {
        alert('Задание №1\n\nУчите стили CSS и JavaScript!');
    } else {
        alert('Задание №1\n\nУпускаете время!');
    }
}

//Задание №2
function f2() {
    let num1 = prompt('Задание №2 (1)\n\nВведите первое число ');
    let num2 = prompt('Задание №2 (1)\n\nВведите второе число ');
    let num12 = Number(num1) + Number(num2);
    document.write('Задание №2' + '<br/>' + '1)' + num1 + '+' + num2 + '=' + num12 + '<br/>');
    alert('Задание №2\n\n1)' + num1 + '+' + num2 + '=' + num12);
    let str1 = prompt('Задание №2 (2)\n\nВведите первую строку');
    let str2 = prompt('Задание №2 (2)\n\nВведите вторую строку');
    let str12 = str1 + str2;
    document.write('2)' + str1 + '+' + str2 + '=' + str12 + '<br/>');
    alert('Задание №2\n\n2)' + str1 + '+' + str2 + '=' + str12);
    let num = prompt('Задание №2 (3)\n\nВведите число');
    let str = prompt('Задание №2 (3)\n\nВведите строку');
    let strNum = Number(num) + str;
    document.write('3)' + str + '+' + num + '=' + strNum + '<br/>');
    alert('Задание №2\n\n3)' + str + '+' + num + '=' + strNum);
    let str3 = prompt('Задание №2 (4)\n\nВведите строку');
    let num3 = prompt('Задание №2 (4)\n\nВведите число');
    let numStr = str3 + Number(num3);
    document.write('4)' + num3 + '+' + str3 + '=' + numStr + '<br/>');
    alert('Задание №2\n\n4)' + num3 + '+' + str3 + '=' + numStr);
    alert('Задание №2 (4)\n\nРезультатом сложения строки и числа всегда будет СТРОКА');
}

//Задние №3
function f3() {
    let x = prompt('Задние №3\n\nВведите x (число)');
    let y = prompt('Задние №3\n\nВведите y (число) : во много раз больше х');
    let val1 = (35 * y - 25 * x) / 5 + 232;
    let val2 = (8 * y / x + 5 * x / y - 43) * 6;
    let val12 = val1 % val2;
    document.write('<br/>' + 'Задание №3' + '<br/>' + 'Остаток от деления выражения1 на выражение2 = ' + val12);
    alert('Задание №3\n\nОстаток от деления результата выражения1 ((35*y-25*x)/5+232) на результат выражения2 ((8*y/x+5*x/y-43)*6) = ' +
        val12);
}

//Задание №4
function f4() {
    let number = prompt('Задание №4 \n\nВведите значение(число): которое меньше 20 или больше 40 , не равно 15\n' +
        'и делится без остатка на 5');
    if ((number < 30 || number > 50) && (number % 12 === 0) && (+number !== 15)) {
        alert('Задание №4 \n\nПравильное значение');
    } else {
        alert('Задание №4 \n\nНе правильное значение');
    }
}

//Задание №5
function f5() {
    let A = +prompt('Задание №5\n\nВведите число А');
    let B = +prompt('Задание №5\n\nВведите число B');
    /*    if (A < B ){
        alert('Задание №5\n\nA меньше В');
    }
    else if (A > B){
        alert('Задание №5\n\nA больше В ');
    }
    else {
        alert('Задание №5\n\nA равно В ');
    }*/
    (A < B) ? alert('Задание №5\n\nA меньше В') : alert('Задание №5\n\nA больше В ');
}

//Задание №6
function f6() {
    let question = confirm('Задание №6 1-ый способ\n\nХотите ли вы узнать, какой сегодня день недели?');
    let day = new Date();
    if (question) {
        switch (day.getDay())
        {
            case 1:
                alert('Задание №6 1-ый способ\n\nСегодня 1-ый день недели : Понедельник(Monday) ');
                break;
            case 2:
                alert('Задание №6 1-ый способ\n\nСегодня 2-ой день недели : Вторник(Tuesday) ');
                break;
            case 3:
                alert('Задание №6 1-ый способ\n\nСегодня 3-ий день недели : Среда(Wednesday) ');
                break;
            case 4:
                alert('Задание №6 1-ый способ\n\nСегодня 4-ый день недели : Четверг(Thursday) ');
                break;
            case 5:
                alert('Задание №6 1-ый способ\n\nСегодня 5-ый день недели : Пятница(Friday) ');
                break;
            case 6:
                alert('Задание №6 1-ый способ\n\nСегодня 6-ый день недели : Суббота(Saturday) ');
                break;
            case 7:
                alert('Задание №6 1-ый способ\n\nСегодня 7-ой день недели : Воскресенье(Sunday) ');
                break;
            default :
                alert('Задание №6 1-ый способ\n\nНекорректный ввод , попробуй ещё) ');
        }
    }
    else {
        alert('Ну ладно, приходите, когда понадобиться');
    }
}
//Задание №7
function f7() {
    let right = prompt('Задание №7 \n\n Введите число');
    try {
        let exp = right / mistake;
        alert('Задание №7 \n\nОшибки нет\nРезультат деления = ' + exp);
    } catch (error) {
        alert('Задание №7 \n\nERROR!\n' + error.stack);
    } finally {
        alert('Задание №7 \n\nДействие, которое происходило: ' + right + ' / ' + 'mistake');
    }
}