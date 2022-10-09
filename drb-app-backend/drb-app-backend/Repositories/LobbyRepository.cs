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
            this.LeftLobby(clientId);
            Lobby lobby = new Lobby(clientId);
            _lobbies.Add(lobby);
            return lobby;
        }

        internal Lobby JoinLobby(string clientId, string lobbyId)
        {
            this.LeftLobby(clientId);
            var lobby = _lobbies.FirstOrDefault(l => l.Id == lobbyId);
            if(lobby != null)
            {
                lobby.ClientIds.Add(clientId);
            }
            return lobby;
        }

        internal IEnumerable<Lobby> GetLobbyByClient(string clientId)
        {
            return _lobbies.Where(l => l.ClientIds.Contains(clientId));
        }

        internal void LeftLobby(string clientId)
        {
            var loggiesToLeft = _lobbies.Where(l => l.ClientIds.Contains(clientId));
            foreach (var lobbyToLeft in loggiesToLeft)
            {
                lobbyToLeft.ClientIds.Remove(clientId);
            }
        }
    }
}
