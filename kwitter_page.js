//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCJ8cWgut9ZKOpSsawxzcl0aKV5WFmrmUw",
      authDomain: "kwitter-a3393.firebaseapp.com",
      databaseURL: "https://kwitter-a3393-default-rtdb.firebaseio.com",
      projectId: "kwitter-a3393",
      storageBucket: "kwitter-a3393.appspot.com",
      messagingSenderId: "728506808639",
      appId: "1:728506808639:web:6614f683b8372acea3fb8a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send()
    {
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
             name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
          
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
