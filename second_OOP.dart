class Student {
  String name = 'Engel Otieno';
  String age = '21';
  String gradeLevel = 'B';
  
  Student(this.name, this.age, this.gradeLevel);
  
  void introduceStudent() {
    print('Student Name: $name, Age: $age, Grade_Level: $gradeLevel');
  }
}

class Teacher {
  String name = 'Effie Misachi';
  String age = '53';
  String subject = 'Mathematics';
  
  Teacher(this.name, this.age, this.subject);
  
  void introduceTeacher() {
    print('Teacher Name: $name, Age: $age, Subject: $subject');
  }
}

void main() {
  var s1 = Student('Silas Mwangi', '22', 'Male');
  s1.introduceStudent();
  
  var t1 = Teacher('Joram Mmbaya', '23', 'Male');
  t1.introduceTeacher();
  
  var school = School();
  school.introduceSchool();
}

class School {
  late Student student;
  late Teacher teacher;
  
  School() {
    student = Student('Reinhard Smith', '22', 'Male');
    teacher = Teacher('Ravin Denish', '56', 'Male');
  }
  
  void introduceSchool() {
    student.introduceStudent();
    teacher.introduceTeacher();
  }
}
