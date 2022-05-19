import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  allownewapp = false;
  servercreationstatus = 'server eas not created';
  serverName= "";
  ServerCreated =false;
  servers = ['Testserver', 'Testserver2']

  constructor() { 
    setTimeout(() => {
      this.allownewapp =true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreatServer() { 
    this.ServerCreated = true;
    this.servers.push(this.serverName)
    this.servercreationstatus = 'server was created and the name is ' + this.serverName;

    }
    
  onCreatServerName(event:Event) {
    this.serverName = (<HTMLInputElement> event.target).value;
  }
  serverID = 10;
  status = 'offline';

}
