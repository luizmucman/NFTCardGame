// Moralis.initialize("<%=moralisAppKey%>");

// Moralis.serverURL = "<%=moralisServerUrl%>";

// const user = Moralis.User.current();
// console.log(user)
// $(document).ready(async function () {

//   //console.log("ready!");

//   if (user == null) {
//     Moralis.Web3.authenticate().then(function (user) {
//       alert(user.get("ethAddress"));
//       $("#upload-section").show(100);
//     });
//   }
//   else {
//     //console.log("Authenticated User:"+user.get("ethAddress"));
//     $("#userId").val(user.get("ethAddress"));
//   }
//   });
// console.log(user, 'user')

const serverUrl = "https://pem4qirz3pbi.usemoralis.com:2053/server";
const appId = "rludMzCkRUGgVhhFkiQWVG0NdCJI4qi4Jcqrvh4v";
Moralis.start({ serverUrl, appId });

/** Add from here down */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    try {
      user = await Moralis.authenticate({ signingMessage: "Hello World!" });
      console.log(user);
      console.log(user.get("ethAddress"));
      $('#userId').val(user.get("ethAddress"));
    } catch (error) {
      console.log(error);
    }
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;
