
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBNbrsHsGJYh4wu-7pI2E_0651ZdHwKvEM",
      authDomain: "kwitter-a2d54.firebaseapp.com",
      databaseURL: "https://kwitter-a2d54-default-rtdb.firebaseio.com",
      projectId: "kwitter-a2d54",
      storageBucket: "kwitter-a2d54.appspot.com",
      messagingSenderId: "40413689435",
      appId: "1:40413689435:web:dbee812226f7fbdc53b17e"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML=username;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -" +Room_names);
row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"
+Room_names+"</div><hr>";
document.getElementById("output").innerHTML=row;
 
     //End code

      });});}
getData();
function addRoom()
{
room_name =document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);

window.location="kwitter_room.html";

}
function redirectToRoomName(name)
{

      console.log(name);
      localStorage.setItem("room_name",name);
      window.location ="kwitter_page.html"
}
function logout() {
localStorage.remove("user_name");
localStorage.remove("room_name");
window.location="index.html";
}