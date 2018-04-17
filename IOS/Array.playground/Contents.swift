//Arrays - a collection of things

import UIKit

var employee1Salary = 45000.00
var employee2Salary = 54000.00
var employee3Salary = 100000.00
var employee4Salary = 2000.00

var employeeSalaries : [Double] = [45000.00, 54000.00, 100000.00, 2000.00];

print(employeeSalaries.count);

employeeSalaries.append(39000.00);

print(employeeSalaries.count);

employeeSalaries.remove(at: 1);

print(employeeSalaries.count);

var students = [String]();

print(students.count);

students.append("John");
students.append("Ahamed");
students.append("Baasha");
students.append("Heimer");

students.remove(at: 2);

students.count;


