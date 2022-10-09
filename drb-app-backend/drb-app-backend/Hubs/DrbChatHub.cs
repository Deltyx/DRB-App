using Microsoft.AspNetCore.SignalR;

namespace Hubs
{
    partial class DrbHub : Hub
    {
        public async Task SendMessage(string message)
        {
            var lobby = this._lobbyRepository.GetLobbyByClient(Context.ConnectionId).FirstOrDefault();
            if (lobby == null) return;
            await Clients.Group(lobby.Id).SendAsync("ReceiveMessage", Context.ConnectionId, message);
        }
    }
}