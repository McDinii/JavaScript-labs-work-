"use strict"

function task4() {
    const name = document.forms[0].elements[1].value;
    const number = document.forms[0].elements[3].value;
    const address = document.forms[0].elements[5].value;
    const country = document.forms[0].elements[7].value;
    var card;

    let card1 = document.getElementsByClassName( "card" );
    for (let i = 0; i < card1.length; i++) {
        if (card1[i].checked) {
            card = (card1[i].value);
        }
    }
    const number_card = document.forms[0].elements[13].value;
    document.write( `<h1>Dear, ${name}</h1>your contact information` );
    document.write( "<br\>" );
    document.write( "<ul>" );
    document.write( `<li>phone number: ${number}</li>` );
    document.write( `<li>country: ${country}</li>` );
    document.write( `<li>address: ${address}</li>` );
    document.write( `<li>type of credit card: ${card}</li>` );
    document.write( `<li>credit card: ${number_card}</li>` );
    document.write( "</ul>" );
}