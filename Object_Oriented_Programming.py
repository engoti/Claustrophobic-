class Student:
    name = 'Engel Otieno'
    age = '21'
    grade_level = 'B'
    def __init__(self,name,age,grade_level):
        self.name = name
        self.age = age
        self.grade_level = grade_level

    def introduce_student(self):
        print('Student Name: ', self.name,', Age: ', self.age,', Grade_Level: ', self.grade_level)

s1 = Student('Silas Mwangi','22','Male')
s1.introduce_student()


class Teacher:
    name = 'Effie Misachi'
    age = '53'
    subject = 'Mathematics'

    def __init__(self,name,age,subject):
        self.name = name
        self.age = age
        self.subject = subject

    def introduce_teacher(self):
        print('Teacher Name: ', self.name,', Age: ', self.age,', Subject: ', self.subject)

t1 = Teacher('Joram Mmbaya','23','Male')
t1.introduce_teacher()

class School:
    def __init__(self):
        self.Student = Student('Reinhard Smith','22','Male')
        self.Teacher = Teacher('Ravin Denish','56','Male')

    def introduce_school(self):
        self.Student.introduce_student()
        self.Teacher.introduce_teacher()

school = School()
school.introduce_school()