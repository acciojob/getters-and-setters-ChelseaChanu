//complete this code
class Person {
	constructor(name,age){
		this._name = name;
		this._age = age;
	}
	
	set setName(name){
		this._name = name;
	}

	set setAge(age){
		this._age = age;
	}

	get getName(){
		return this._name;
	}

	get getAge(){
		return this._age;
	}
}

class Student extends Person {
	study(){
		console.log(this.name+" is studying");
	}
}

class Teacher extends Person {
	teach(){
		console.log(this.name+" is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
