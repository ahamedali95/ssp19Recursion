//: Playground - noun: a place where people can play

import UIKit

var namesOfIntegers = [Int: String]();

namesOfIntegers[3] = "Three";
namesOfIntegers[44] = "Fourty Four";

namesOfIntegers = [:]

var airport: [String: String] = ["MCT": "Muscat", "JFK": "New York"];

print("The aiports dictionary has: \(airport.count) items");

airport["LHR"] = "London"
airport["LHR"] = "London Heathrow"
airport["MCT"] = nil;

for (airportCode, airportName) in airport
{
    print("\(airportCode) : \(airportName)");
}

for key in airport.keys
{
    print("Keys: \(key)")
}

for value in airport.values
{
    print("Values: \(value)");
}

