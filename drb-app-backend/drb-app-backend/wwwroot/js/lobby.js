"use strict";

var lobbyConnection = new signalR.HubConnectionBuilder().withUrl("https://localhost:44373/lobbyHub").build();

//Disable the send button until connection is established.
document.getElementById("joinLobby").disabled = true;
document.getElementById("createLobby").disabled = true;

lobbyConnection.start().then(function () {
    document.getElementById("joinLobby").disabled = false;
    document.getElementById("createLobby").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("createLobby").addEventListener("click", function (event) {
    var user = "coucou"
    lobbyConnection.invoke("Create", user)
        .then(function (result) {
            document.getElementById("lobbyInfo").innerHTML = JSON.stringify(result)
        })
        .catch(function (err) {
            return console.error(err.toString());
        });
    event.preventDefault();
});
document.getElementById("joinLobby").addEventListener("click", function (event) {
    var user = "coucou2";
    var lobbyId = document.getElementById("joinLobbyId").value;
    lobbyConnection.invoke("Join", user, lobbyId)
        .then(function (result) {
            document.getElementById("lobbyInfo").innerHTML = JSON.stringify(result)
        })
        .catch(function (err) {
            return console.error(err.toString());
        });
    event.preventDefault();
});