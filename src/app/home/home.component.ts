import { Component } from '@angular/core';
import { Service2Service } from '../service2.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {  
  name : string| undefined ;
  constructor(private Service: Service2Service) {
  this.name = this.Service.userName;
  }

}
