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
