$(document).ready(readyNow);


let vault = [];
let salaryCount = Number(0);

function readyNow() {

    $('#submitButton').on('click', addItem)
    /* when the submit button is click function addItem will run */
}

function addItem() {
    let fNimput = $('#firstNameInput')
    let lNimput = $('#lastNameInput')
    let idNimput = $('#idNumberInput')
    let jobImput = $('#jobInput')
    let salImput = $('#salaryInput')

    let object = {
        firstName: fNimput.val(),
        lastName: lNimput.val(),
        idNumber: idNimput.val(),
        jobTitle: jobImput.val(),
        annualSalary: salImput.val()
    }

    fNimput.val(''),
        lNimput.val(''),
        idNimput.val(''),
        jobImput.val(''),
        salImput.val('')
    /* "object" now has the imputs from the html wrapped inside of if, 
    and selected imputs will be cleared after the function is run */
    vault.push(object);
    console.log(object);
    let total = Number(object.annualSalary)
    salaryCount = total + salaryCount;
    displayText()
    salaryDisplayer()
    colorCode()
    $(`#table1`).on('click', '#deleteButton', remove)
    /* delete button has to exist here because the button
    is'nt loaded on page load  */

}

function displayText() {

    let el = $('#xEmployees');
    el.empty();
    for (let i = 0; i < vault.length; i++) {
        let each = vault[i]

        el.append(`
<tr>
        <th>${each.firstName}</th> 
        <th>${each.lastName}</th> 
        <th>${each.idNumber}</th> 
        <th>${each.jobTitle}</th>
        <th>${each.annualSalary}</th>
        <th><button id="deleteButton">Delete</button></th>
        </tr>`);
    }
}

function salaryDisplayer() {
    $("#salaryDisplay").text(salaryCount);
    /* appends whatever salaryCount is to the text on
     dom */
}

function colorCode() {
    let $ListSal = $(`#displaySalary`).children();
    if (salaryCount >= Number(20000)) {
        $ListSal.addClass('red');
        console.log($ListSal);
    }
}

function remove() {
    $(this).parent().parent().remove()
}