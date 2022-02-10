"use strict"

function form() {
    const mainForm = document.forms.form;
    const subjects = ["Информационные системы и технологии",
        "Программное обеспечение информационных технологий",
        "Программное обеспечение информационных технологий",
        "Дизайн электронных и веб-изданий"]
    let lastname = mainform.inputLastname.value
    let specialization = mainform.special.value
    let course = mainform.course
    let subject = mainform.subject
    for (let i = 0; i < 4; i++) {
        if (course[i].checked === true)
            var courseAns = course[i].value
    }

    document.write( `<p>Студент ${mainform.inputLastname.value} специальность ${specialization} курс ${courseAns} должен сдавать след.` +
        " предметы:" + "<ul>" )
    for (let i = 0; i < 4; i++) {
        if (subject[i].checked === true) {
            var subjectAns = subject[i].value
            document.write( `<li> ${subjects[subjectAns]} </li>` )
        }
    }
    document.write( "</ul></p>" )

}


