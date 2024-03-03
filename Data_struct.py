#Creation of empty list
my_list= []

#Append(add)Items to a list
my_list.append(10)
my_list.append(20)
my_list.append(30)
my_list.append(40)

#Using The .insert method
my_list.insert(1, 15)

#Creating another List
another_list=[50, 60, 70]

my_list.extend(another_list)

my_list.remove(70)

my_list.sort()

print(my_list[3])