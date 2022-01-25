import Peer, {DataConnection} from "peerjs";
import type {ClickMessage, Message} from "$lib/network/messages";

export interface props {
    connectCallback: () => void;
    dataCallback: (data: Message) => void;
    peerId?: string;
}

class Communication {

    private peer: Peer;
    private dataConnection: DataConnection;

    constructor(props) {
        this.peer = new Peer();
        if (!props.peerId) {
            this.peer.on('connection', (dataConnection => {
                dataConnection.on('data', props.dataCallback);
                dataConnection.on('connection', props.connectCallback);
            }));
        } else {
            this.dataConnection = this.peer.connect(props.peerId, {serialization: 'json'})
        }
    }

    sendClickMessage(message: ClickMessage) {
        this.dataConnection.send(message);
    }

    getPeerId(): string {
        return this.peer.id;
    }
}

export default Communication;