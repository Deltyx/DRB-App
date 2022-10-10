
import { HubConnectionBuilder } from '@microsoft/signalr';

export default class SignalRConnection{
    static connection = null;

    static getInstance(){
        if (!this.instance) {
            this.instance = new HubConnectionBuilder()
            .withUrl('https://localhost:44373/drb')
            .withAutomaticReconnect()
            .build();
            this.instance.start();
        }
        return this.instance;
    }
    
}
