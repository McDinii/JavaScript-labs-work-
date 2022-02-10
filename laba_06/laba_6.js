"use strict"
const w=window;
function f1() {
    w.open();
}
function f2() {
    w.close();
}
function f3(){
    w.alert("Hello, visitor!");
}
function f4(){
    document.write("Вся информация браузера пользователя: "+navigator.userAgent);
    document.write("<br> Версия браузера пользователя: "+navigator.appVersion);
    document.write("<br> Названии браузера пользователя: "+navigator.appName);
    document.write("<br> Информация о кодовом названии браузера пользователя: "+navigator.appCodeName);
    document.write("<br> ОС, которую использует пользователь: "+navigator.platform);
    document.write("<br> Включена ли поддержка Java в браузере: "+navigator.javaEnabled());
    document.write("<br> Ширина и высота экрана: "+screen.width+"x"+screen.height);
    document.write("<br> Глубина цвета: "+screen.colorDepth);
    document.write("<br> URL, которые были посещены в данном окне браузера: " + history.length);
    document.write("<br> URL, текущего документа: "+location.href);
    document.write("<br> Путь к загруженному документу: "+location.pathname);
}