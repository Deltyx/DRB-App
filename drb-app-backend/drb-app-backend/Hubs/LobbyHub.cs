using drb_app_backend.Repositories;
using Microsoft.AspNetCore.SignalR;

namespace Hubs
{
    public class LobbyHub : Hub
    {
        private LobbyRepository _lobbyRepository = new LobbyRepository();
        public async Task<drb_app_backend.Models.Lobby> Create(string userId)
        {
            return _lobbyRepository.CreateLobby(userId);
        }
        public async Task<drb_app_backend.Models.Lobby> Join(string userId, string lobbyId)
        {
            return _lobbyRepository.JoinLobby(lobbyId, userId);
        }
    }
}