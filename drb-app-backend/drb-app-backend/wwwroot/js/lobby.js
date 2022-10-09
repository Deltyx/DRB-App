"use strict";

//Disable the send button until connection is established.
document.getElementById("joinLobby").disabled = true;
document.getElementById("createLobby").disabled = true;

document.getElementById("createLobby").addEventListener("click", function (event) {
    drbConnection.invoke("Create")
        .then(function (result) {
            document.getElementById("displayLobbyId").innerHTML = result.id
        })
        .catch(function (err) {
            return console.error(err.toString());
        });
    event.preventDefault();
});
document.getElementById("joinLobby").addEventListener("click", function (event) {
    var lobbyId = document.getElementById("joinLobbyId").value;
    drbConnection.invoke("Join", lobbyId)
        .then(function (result) {
            document.getElementById("displayLobbyId").innerHTML = result.id
        })
        .catch(function (err) {
            return console.error(err.toString());
        });
    event.preventDefault();
});