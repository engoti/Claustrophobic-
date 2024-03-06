//Data of Type Number
void num() {
// Declaring Variables  
  int num1 = 90; // int value.
  double num2 = 66.1; // float value.
// Printing 
  print("Num 1 is $num1");
  print("Num 2 is $num2");  
}

//Data of type string
void string() {
// Declaring Values     
  String schoolName = "Powerlearn Project Academy";
  String address = "AFRICA";   

// Printing Values
  print("My School name is $schoolName and the address is $address");   
}

//Data of type List
void list() {
  //Creation of List 
  List<String> names = ["Engel", "Samuel", "Otieno"];
  //Printing list values
  print("Value of names is $names");
  print("Value of names[0] is ${names[0]}"); // index 0
  print("Value of names[1] is ${names[1]}"); // index 1
  print("Value of names[2] is ${names[2]}"); // index 2

 
  print(names);
}

//Data of type map
void map() {
// Creating a Map with String keys and int values
  Map<String, int> ages = {'Steve': 23,
  'Sam': 20,
  'Silas': 27,
};
  print("Ages of students: $ages");
}

//Calling out and running the anonymous functions
void main() {
  num();
  string();
  list();
  map();
}