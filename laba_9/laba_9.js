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

let x, y, x2 = 50 , y2=70, color, fnc_to_draw, radio_

function line() {
    y = y2
    x = x2
    radio_ = document.getElementsByName( "line_type" )
    color = document.getElementsByTagName( "option" )

    for (i = 0; i < radio_.length; i++) {
        if (radio_[i].checked) {
            fnc_to_draw = radio_[i].value
        }
    }
    timerID = setInterval( "write(" + fnc_to_draw + ")", 10 )
    setTimeout( "clearInterval( timerID )", 9000 )
    for (j = 0; j < color.length; j++) {
        if (color[j].selected) {
            color = color[j].value

        }
    }
}

/*Формирование строки, содержащей теги <IMG. . . >: */
function write(fnc_to_draw) {
    x += 0.1;
    y = y2 + eval( fnc_to_draw ) * 2
    document.write( '<img alt="" width="5" src="img/' + color + '.bmp " style="position:relative; top:' + y + 'px;left:' + x + 'px;">' )
    document.write( '<img alt="" width="5" src="img/' + color + '.bmp " style="position:relative; top:' + y + 'px;left:' + x + 'px;">' )
}



