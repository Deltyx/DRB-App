using drb_app_backend.Models;
using Microsoft.Extensions.Caching.Memory;

namespace drb_app_backend.Repositories
{
    public class LobbyRepository
    {
        private static List<Lobby> _lobbies = new List<Lobby>();

        public LobbyRepository()
        {
        }
        internal Lobby CreateLobby(string clientId)
        {
            Lobby lobby = new Lobby(clientId);
            _lobbies.Add(lobby);
            return lobby;
        }

        internal Lobby JoinLobby(string lobbyId, string clientId)
        {
            var lobby = _lobbies.FirstOrDefault(l => l.Id == lobbyId);
            if(lobby != null)
            {
                lobby.ClientIds.Add(clientId);
            }
            return lobby;
        }
    }
}
