var firebaseConfig = {
    apiKey: "AIzaSyBDHlVlh37BQiGtPHdYUms2kmJXD61OiVY",
    authDomain: "kwitter-f1ceb.firebaseapp.com",
    databaseURL: "https://kwitter-f1ceb-default-rtdb.firebaseio.com",
    projectId: "kwitter-f1ceb",
    storageBucket: "kwitter-f1ceb.appspot.com",
    messagingSenderId: "708038707534",
    appId: "1:708038707534:web:c40b17b29693caf42bf61f"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("username");
  document.getElementById("user_name").innerHTML="Welcome "+user_name +"!";
  function addRoom(){
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({purpose :"adding room name"});
        localStorage.setItem("room_name", room_name);
        window.location="chat_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;

row="<div class='room_name' id="+Room_names+"onclick='redirectToRoom(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
    });});}
getData();
function redirectToRoom(name){
localStorage.setItem("room_name", name);
console.log(name);
window.location="index.html";
}
function logOut(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location="index.html";
}