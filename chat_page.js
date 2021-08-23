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
  room_name=localStorage.getItem("room_name")
  console.log(room_name);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
name_tag="<h4>"+name+"<img class='user_tick' g ysr SorryForShutdowns˙ƒ÷c='tick.png'> </h4>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button><hr>";
row=name_tag+message_tag+like_button+span_tag;
document.getElementById("output").innerHTML+=row;
    } });  }); }
getData();
function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
    });
    document.getElementById("msg").value="";
}
function updateLike(message_id){
    console.log(message_id)
    button_id=message_id;
    likes=document.getElementById(button_id).value;
    updated_like=Number(likes)+1;
    firebase.database().ref(room_name).child(message_id).update({
          like: update_like
    });
}
function logOut(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}