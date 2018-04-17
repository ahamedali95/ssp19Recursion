// Create the data object that this function is expecting
//
// Example
//
// printUsersWebsitesInfo(users3)
// ~~UserName1~~
//   -siteName1.com
//     -load: 21%
//     -# of users: 210000
//     -popularity score: 32
//   -siteName2.com
//     -load: 21%
//     -# of users: 210000
//     -popularity score: 32
// ~~UserName2~~
//   -siteName3.com
//     -load: 21%
//     -# of users: 210000
//     -popularity score: 32
//   -siteName4.com
//     -load: 21%
//     -# of users: 210000
//     -popularity score: 32
//   -siteName5.com
//     -load: 21%
//     -# of users: 210000
//     -popularity score: 32
// ...and so forth, for all the users

var users3 = 
[
  {
    username: "Ranjit",
    sites: 
    [
      {url: "google.com", load: 21, userCount: 10000, pop: 32},
      {url: "haiku.com", load: 41, userCount: 14000, pop: 90},
    ]
  },
  {
    username: "Ranjit",
    sites: 
    [
      {url: "google.com", load: 21, userCount: 10000, pop: 32},
      {url: "haiku.com", load: 41, userCount: 14000, pop: 90},
    ]
  }
]

function printUsersWebsitesInfo (users) 
{
  for (var i = 0; i < users.length; i++) 
  {
    var user = users[i];
    console.log("~~" + user.username + "~~");

    for (var j = 0; j < user.sites.length; j++)
    {
      var site = user.sites[j];
      console.log("  -" + site.url);
      console.log("    -load: " + site.load + "%");
      console.log("    -# of users: " + site.userCount);
      console.log("    -popularity score: " + site.pop);
    }
  }
}
printUsersWebsitesInfo(users3); // uncomment when ready to test