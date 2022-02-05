$( function () {
    $( '#text1' ).draggable();
    $( '#tom' ).draggable();
} );

// task 2
function task_2(el) {
    let start = Date.now()
    let timer = setInterval( function () {
        let timePassed = Date.now() - start
        el.style.left = timePassed + "px"
        el.style.top = timePassed + "px"
        if (timePassed >= 2000) {
            clearInterval( timer );
        }
    }, 20 )
}

// task_3
function makeEaseOut(timing) {
    return function (timeFraction) {
        return 1 - timing( 1 - timeFraction );
    }
}

function bounce(timeFraction) {
    for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow( (11 - 6 * a - 11 * timeFraction) / 4, 2 ) + Math.pow( b, 2 )
        }
    }
}

function quad(timeFraction) {
    return Math.pow( timeFraction, 2 )
}

function task_3(el) {
    let el_id = el
    let height = 200 - el_id.clientHeight
    let width = 100
    animate( {
        duration: 2000,
        timing: makeEaseOut( bounce ),
        draw: function (progress) {
            el_id.style.top = height * progress + 'px'
        }
    } )
    animate( {
        duration: 2000,
        timing: makeEaseOut( quad ),
        draw: function (progress) {
            el_id.style.left = width * progress + 'px'
        }
    } )
}

let x = 0, y = 0, x2 =-10,x3 = 50 , y2 = 150, color, fnc_to_draw, radio_, checkL = 0, checkR = 0

function line() {
    radio_ = document.getElementsByName( "line_type" )
    color = document.getElementsByTagName( "option" )

    for (i = 0; i < radio_.length; i++) {
        if (radio_[i].checked) {
            fnc_to_draw = radio_[i].value
        }
    }
    timerID = setInterval( "writel(" + fnc_to_draw + ")", 10 )



    for (j = 0; j < color.length; j++) {
        if (color[j].selected) {
            color = color[j].value

        }
    }
}

/*Формирование строки, содержащей теги <IMG. . . >: */
/*let k = 50
checkL = x2*/
x = x2
y = y2
function writel(fnc_to_draw) {

   /* x = ( k -x2 )*/
    x +=0.1
   /* k-= 0.1
    y = 5*(Math.round(-(fnc_to_draw ))+y2)*/
    y = y2 + eval(fnc_to_draw)*30
    xd = x +10
    document.write( '<img alt="" width="3" src="img/' + color + '.bmp " style="position:relative; top:' + y + 'px;left:' + xd+ 'px;">' )
    /*checkL--*/
    if ( Math.round(x) ===  10/*checkL-1 === 5*/) {
        clearInterval( timerID )
        /*timerID2 = setInterval( "writer(" + fnc_to_draw + ")", 10 )*/

    }
}
    /*checkR=x2*/
   /* function writer(fnc_to_draw) {
    console.log( "x= -1:", x )
    console.log( "R :", checkR )
    x += 1 + x2;
    y = y2 + fnc_to_draw
    document.write( '<img alt="" width="5" src="img/' + color + '.bmp " style="position:relative; top:' + y + 'px;left:' + x + 'px;">' )
    checkR++
    if (checkR ===101) {
        clearInterval( timerID2)
        }
    }*/

