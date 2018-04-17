//Optionals

import UIKit

var lotterWinnings: Int? //anytime we don't know the value of some variable, we put ?

lotterWinnings = 500;

if(lotterWinnings != nil)
{
    print(lotterWinnings!);
}

if let winnings = lotterWinnings
{
    print(winnings);
}

class Car
{
    var model: String?
}

var vehicle: Car?


//if let v = vehicle
//{
//    if let m = v.model
//    {
//        print(m);
//    }
//}

vehicle = Car();
vehicle?.model = "Lexus";


if let v = vehicle , let m = v.model
{
    print(m);
}


var cars: [Car]()












