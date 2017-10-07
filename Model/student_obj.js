/*global Student, console*/
var id;
var stud_obj = {
    id : 0,
    studentList : [],
    
    addStudent : function (s_name, email, number) {
        "use strict";
        this.id += 1;
        var student = new Student(this.id, s_name, email, number);
        this.studentList.push(student);
    },
    
    toggleStudent : function (id) {
        "use strict";
        var list = this.studentList.filter(function (obj) {
            return obj.id == id;
        });
        console.log("sadsads", list);
        list[0].selected = !list[0].selected;
        console.log("New Student List", this.studentList);
        return list[0].selected;
    },
    
    deleteStudent : function () {
        "use strict";
        this.studentList = this.studentList.filter(function (obj) {
            return obj.selected === false;
        });
    },
    
    countCheck : function ()  {
        return this.studentList.length;
    }
};