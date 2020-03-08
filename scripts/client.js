$(document).ready(readyNow);


let vault = [];
let salaryCount = Number(0);

function readyNow() {

    $('#submitButton').on('click', addItem)
    /* when the submit button is click function addItem will run */
}

function addItem() {
    let fNimput = $('#firstNameInput')
    let lNimout = $('lastNameImput')
    let iNimput = $('#idNumberInput')
    let jobImput = $('#jobInput')
    let salImput = $('#salaryInput')

    let object = {
        firstName: fNimput.val(),
        lastName: lNimout.val(),
        idNumber: iNimput.val(),
        jobTitle: jobImput.val(),
        annualSalary: salImput.val()
    }
    fNimput.val(''),
        lNimout.val(''),
        iNimput.val(''),
        jobImput.val(''),
        salImput.val('')
    /* "object" now has the imputs from the html wrapped inside of if, 
    and selected imputs will be cleared after the function is run */
    vault.push(object);
    console.log(object);
}