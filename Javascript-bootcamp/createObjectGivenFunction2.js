// Create the data object that this function is expecting
//
// Example
//
// printUsersWebsites(users2)
// ~~UserName1~~
//   -siteName1
//   -siteName2
// ~~UserName2~~
//   -siteName3
//   -siteName4
//   -siteName5
// ...and so forth, for all the users

var users2 = 
[
  {
    username: "Ranjit", 
    sites: 
    [
      {
        url: "google.com"
      },
      {
        url:"yahoo.com"
      }
    ]
  }
]

function printUsersWebsites (users)
{
  for (var i = 0; i < users.length; i++)
  {
    var user = users[i];
    console.log("~~" + user.username + "~~");

    for (var j = 0; j < user.sites.length; j++) 
    {
      var site = user.sites[j];
      console.log("  -" + site.url);
    }
  }
}

printUsersWebsites(users2); // uncomment when ready to test