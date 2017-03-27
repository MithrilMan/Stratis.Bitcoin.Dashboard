import { Component } from "@angular/core";

@Component({
   selector: 'peerlist',
   template: require('./peer-list.component.html')
})



export class PeerList {
   public peers: PeerItem[];
}

interface PeerItem {
   EndPoint: string;
   PeerUserAgent: string;
   PeerVersion: string;
   NegotiatedVersion: string;
   ConnectedAt: number;
   Read: number;
   Written: number;
}