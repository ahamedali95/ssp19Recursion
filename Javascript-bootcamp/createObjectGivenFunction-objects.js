// Create the data object that this function is expecting
//
// Example
//
// printUsers(users1)
// 0: UserName1
// 1: UserName2
// ...and so forth, for all the users

var users1 = 
[
	{
	 id: 0, 
	 username: "userName1"
	},

	{
	id: 1, 
	username: "userName2"
    }
]

function printUsers(users) {
  for (var i = 0; i < users.length; i++)
  {
    var user = users[i];
    console.log(user.id + ": " + user.username);
  }
}

 printUsers(users1); // uncomment when ready to test