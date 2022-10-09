import signalR from '@microsoft/signalr';


    export default Singleton = (function () {
        var instance;
    
        function createInstance() {
            var object = new signalR.HubConnectionBuilder().withUrl("https://localhost:44373/drb").build();
            return object;
        }
    
        return {
            getInstance: function () {
                if (!instance) {
                    instance = createInstance();
                }
                return instance;
            }
        };
    })();
    
    function run() {
    
        var instance1 = Singleton.getInstance();
        var instance2 = Singleton.getInstance();
    
        console.log("Same instance? " + (instance1 === instance2));
    }