double addTwo(double x, double y) {
  double addition = x + y;
  return addition;
}

double subtractTwo(double a, double b) {
  double difference = a - b;
  return difference;
}

double multiplyTwo(double i, double j) {
  double multiplication = i * j;
  return multiplication;
}

double divideTwo(double q, double w) {
  double division = q / w;
  return division;
}

int stringLength(String inputString) {
  return inputString.length;
}

dynamic getFirstElement(List inputList) {
  if (inputList.isNotEmpty) {
    return inputList[0];
  } else {
    return null;
  }
}

void main() {
  double x = 200;
  double y = 300;
  double result = addTwo(x, y);
  print("The sum between variable x and y is $result.");

  double a = 60;
  double b = 50;
  double outcome = subtractTwo(a, b);
  print("The difference between variable a and b is $outcome.");

  double i = 70;
  double j = 5;
  double solution = multiplyTwo(i, j);
  print("Multiplication of variable i and j is $solution.");

  double q = 9;
  double w = 3;
  double calculation = divideTwo(q, w);
  print("Division of variable q and w is $calculation.");

  String myString = "Engel Otieno";
  int length = stringLength(myString);
  print("Length of the string is: $length");

  List<int> myList = [1, 2, 3, 4, 5];
  var firstElement = getFirstElement(myList);
  print("The First element of the list is: $firstElement");
}


