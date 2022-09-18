namespace drb_app_backend.Models
{
    public class Lobby
    {
        public Lobby(string clientId)
        {
            this.Id = Guid.NewGuid().ToString();
            this.ClientIds = new List<string>()
            {
                clientId
            };
        }
        public string Id { get; set; }
        public List<string> ClientIds { get; set; }
    }
}
