//Boolean operators and comparison operators

import UIKit

var amIgoodPerson = true;

amIgoodPerson = false;

var hadDataFinishedDownloading: Bool = false;
//..
//..
hadDataFinishedDownloading = true;
//Load UI and other app features

if 1 == 1
{
    print("Should see this");
}

if(2 != 1)
{
    print("2 is not equal to 1")
}

if(200 > 2)
{
    print("should see this");
}

var bankAccountBalance = 500;
var itemToBuy = 500;

if(bankAccountBalance >= itemToBuy)
{
    print("purchased item");
}

if(bankAccountBalance < itemToBuy)
{
    print("you need more money");
}

if(bankAccountBalance == itemToBuy)
{
    print("you have zero balance");
}

var title: String = "zero";
var title2: String = "zero";

if(title == title2)
{
    print(title + " is equal to " + title2);
}




