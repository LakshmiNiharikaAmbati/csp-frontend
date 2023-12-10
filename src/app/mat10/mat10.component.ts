import { Component,OnInit,OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  Interface1,
  UniqueConstraintError,
  Read
} from '../interface1';
import { Subscription } from 'rxjs';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-mat10',
  templateUrl: './mat10.component.html',
  styleUrls: ['./mat10.component.css']
})
export class Mat10Component implements OnInit{
  constructor(private Service: Service1Service) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: Interface1 = {
    Unitname:'',
    Unitlink:''
  }; 
  d = [];
  canShowData=false;
  SuccessMsg = '';
  ErrorMsg = '';
  Insertmat() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.canShowData=false;
    this.Subscription = this.Service.Insertmat(this.User).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.Unitname} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.User.Unitname} Inserted Succesfully`;
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
    // this the another syntax for the Subscribe Its advanced Handling everything
  }
  Deletemat() { 
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.canShowData=false;

    this.Subscription = this.Service.Deletemat(this.User.Unitname).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.Unitname} not Exists`;
        } else {
          this.SuccessMsg = `${this.User.Unitname} Deleted Succesfully`;
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
  Updatemat() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.canShowData=false;
    const Data = {
      Unitname: this.User.Unitname,
      Unitlink: this.User.Unitlink,

    };
      
    this.Subscription = this.Service.Updatemat(this.User.Unitname,Data).subscribe({
      next: (Data: any) => {
        console.log(`Updated values: Unitname=${this.User.Unitname}, Unitlink=${this.User.Unitlink}`);
        this.SuccessMsg = `Updated data for Unit name ${this.User.Unitname} successfully`;
      },
      error: (error: any) => {
        console.log(error);
        this.ErrorMsg = '';
      }
    });
}
Readmat() { 
  this.ErrorMsg = '';
  this.SuccessMsg = '';
 
  this.Subscription = this.Service.Readmat(this.User.Unitname).subscribe({
    next: (Data: Read) => {
      if ('errornum' in Data){ 
        this.ErrorMsg = `The ${this.User.Unitname} not Exists`;
      } else {   
        this.canShowData=true; 
        this.d = Data.Result; 
      }
    },
    error: (error:any) => { 
      //  console.log(error);
       this.ErrorMsg = `The ${this.User.Unitname} not Exists`;
    },
  });
}

}




