import 'dart:io';

abstract class MobileDevice {
  void displayInfo();
}

class Phone implements MobileDevice {
  String Brand;
  String Model;
  String Price;

  Phone(this.Brand, this.Model, this.Price);

  void Mobile() {
    print('$Brand (${Model}) is $Price KSHS');
  }

  @override
  void displayInfo() {
    print('$Brand ($Model) is $Price KSHS');
  } 

  @override
  String toString() {
    return '$Brand,$Model,$Price';
  }
}

void main() {
  var smartphone = Phone('Apple', 'iPhone X', '30000');
  var dumbphone = Phone('Nokia', 'Nokia 3310', '2500');

  print('${smartphone.Model} is an ${smartphone.Brand} Phone');
  smartphone.Mobile();

  print('${dumbphone.Model} is a ${dumbphone.Brand} Phone');
  dumbphone.Mobile();

  var phones = <Phone>[smartphone, dumbphone]; 
  
  var file = File('phones.txt');

  var explorer = file.openWrite();

  for (var phone in phones) {
    explorer.writeln(phone.toString());
  }
  explorer.close(); 
  print('Data written to phones.txt');

  
  var lines = file.readAsLinesSync();
  for (var line in lines) {
    var data = line.split(',');
    if (data.length == 3) {
      var phone = Phone(data[0], data[1], data[2]);
      phones.add(phone);
    } else {
      print('Invalid data format: $line');
    }
  }
}
