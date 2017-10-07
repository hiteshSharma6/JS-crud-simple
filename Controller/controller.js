/*global stud_obj*/

window.addEventListener("DOMContentLoaded", init);

var s_name,
    email,
    number,
    counter1,
    counter2;

function init() {
    "use strict";
    s_name = document.getElementById("box_1");
    email = document.getElementById("box_2");
    number = document.getElementById("box_3");
    counter1 = document.getElementById("counter1");
    counter2 = document.getElementById("counter2");
    document.getElementById("add").addEventListener("click", addStudent);
    document.getElementById("delete").addEventListener("click", deleteStudent);
}

function addStudent() {
    "use strict";
    var ul = document.getElementById("studentList");
    stud_obj.addStudent(s_name.value, email.value, number.value);
    printStudent(ul);
    counter1.innerHTML = stud_obj.countCheck();
}

function markStudent(event) {
    "use strict";
    event.srcElement.classList.toggle("marked");
    var currentStudent = event.srcElement.innerHTML.split("  ")[0],
        value = stud_obj.toggleStudent(currentStudent);
    if (value) {
        console.log("counter1: ", parseInt(counter1.innerHTML));
        console.log("counter2: ", parseInt(counter2.innerHTML));
        counter2.innerHTML = parseInt(counter2.innerHTML) + 1;
    } else {
        counter2.innerHTML = parseInt(counter2.innerHTML) - 1;
    }
}

function deleteStudent() {
    "use strict";
    stud_obj.deleteStudent();
    var ul = document.getElementById("studentList");
    ul.innerHTML = "";
    printStudent(ul);
    counter1.innerHTML = stud_obj.countCheck();
    counter2.innerHTML = "0";
}

function printStudent(ul) {
    "use strict";
    if (ul.innerHTML === "") {
        stud_obj.studentList.forEach(function (obj) {
            var li = document.createElement("li");
            li.innerHTML = obj.id + " " + obj.name + " " + obj.email + " " + obj.number;
            ul.appendChild(li);
            li.addEventListener("click", markStudent);
        });
    } else {
        var li = document.createElement("li");
        li.innerHTML = stud_obj.id + "  " + s_name.value + "  " + email.value + "  " + number.value;
        ul.appendChild(li);
        li.addEventListener("click", markStudent);
    }
}