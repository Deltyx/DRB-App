using drb_app_backend.Models;
using drb_app_backend.Repositories;
using Microsoft.AspNetCore.SignalR;

namespace Hubs
{
    partial class DrbHub : Hub
    {
        private LobbyRepository _lobbyRepository = new LobbyRepository();
        public async Task<Lobby> Create()
        {
            await LeftGroupAsync();
            var lobby = _lobbyRepository.CreateLobby(Context.ConnectionId);
            await Groups.AddToGroupAsync(Context.ConnectionId, lobby.Id);
            return lobby;
        }
        public async Task Left()
        {
            await LeftGroupAsync();
            _lobbyRepository.LeftLobby(Context.ConnectionId);
        }
        public async Task<Lobby> Join(string lobbyId)
        {
            await LeftGroupAsync();
            var lobby = _lobbyRepository.JoinLobby(Context.ConnectionId, lobbyId);
            await Groups.AddToGroupAsync(Context.ConnectionId, lobby.Id);
            return lobby;
        }

        private async Task LeftGroupAsync()
        {
            var lobbiesToLeft = _lobbyRepository.GetLobbyByClient(Context.ConnectionId);
            foreach (var lobbyToLeft in lobbiesToLeft)
            {
                await Groups.RemoveFromGroupAsync(Context.ConnectionId, lobbyToLeft.Id);
            }
        }
    }
}