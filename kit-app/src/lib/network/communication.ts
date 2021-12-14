import Peer, {DataConnection} from "peerjs";

export interface props {
    connectCallback: () => void;
    dataCallback: () => void;
    peerId?: string;
}

class Communication {

    private peer: Peer;
    private dataConnection: DataConnection;

    constructor(props) {
        this.peer = new Peer();
        if (!props.peerId) {
            this.peer.on('connection', (dataConnection => {
                dataConnection.on('data', props.connectCallback);
                dataConnection.on('open', props.dataCallback);
            }));
        } else {
            this.dataConnection = this.peer.connect(props.peerId, {serialization: 'json'})
        }
    }

    sendData(data: object) {
        this.dataConnection.send(data);
    }
}

export default Communication;