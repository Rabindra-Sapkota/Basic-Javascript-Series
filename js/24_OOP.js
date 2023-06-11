// Object Creation
// First Method
var blogPost = new Object();
blogPost.title = "JavaScript";
blogPost.tag = ["Frontend", "Javascript", "js"];
document.write(blogPost.title+"<br/>"+blogPost.tag.join(", ")+"<br/>")


// Second Method
function course(name, no_of_lecture, type){
    this.name = name;
    this.no_of_lecture = no_of_lecture;
    this.type = type;
    this.add_student = add_student;
    this.display = display;

    
    function display(){
        document.write(this.name+" belongs to "+this.type+" and has "+this.no_of_lecture+" lectures.<br/>")
    };
    

    function add_student(student){
        this.student = student;
    }

}


course_1 = new course("AWS", 14, "Cloud");
course_2 = new course("Python", 20, "Backend");
course_3 = new course("Javascript", 35, "Front-end");
course_3.add_student("Ram");
course_1.display();
course_2.display();
course_3.display();


// Third Method
var person = {
    name:"Rabindra",
    age:28,
    display:function(){
        document.write(this.name+" is "+this.age+" years old<br/>")
    } 
}
person.display();


// Singleton Object i.e object that is created only once
var car = new function(){
    this.name = "BMW";
    this.wheels = 4;
    this.display = function(){
        document.write(this.name+" has "+this.wheels+" wheels.")
    }
}
car.display();
