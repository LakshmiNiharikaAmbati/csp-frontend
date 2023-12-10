import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  InsertedSuccess,
  Login,
  UniqueConstraintError,
  Read
} from '../login';
import { Subscription } from 'rxjs';
import { LoginsService } from '../logins.service';
import{Router} from '@angular/router'
import { Service2Service } from '../service2.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy{
  constructor(private Service: Service2Service,private router:Router) {}
  Subscription: Subscription = new Subscription();
  User: Login = {
    email:'',
    pwd:''
  }; 
error=false;
d=[];
  SuccessMsg = '';
  ErrorMsg = '';
  ngOnInit(): void {
    
  }
  loginForm=new FormGroup({
    email: new FormControl("",[Validators.required,Validators.email]),
    pwd: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(15)])
  });


  loginSubmitted(){
    console.log(this.loginForm);
  }

  get Email():FormControl{
    return this.loginForm.get('email') as FormControl;
  }

  get Pwd():FormControl{
    return this.loginForm.get('pwd') as FormControl;
  }

  Read() {
    this.Subscription = this.Service.Readreg(this.User.email).subscribe(
      (data: any) => {
        this.d = data.Result[0];
        console.log(this.d);
        if (data.Result[0]) {
          if (this.d[5] == this.User.pwd) { 
            this.Service.userName = this.d[0];
            this.router.navigate(['/home'])
                      }
          else {
            this.error = true;
          }
        }
        else {
          this.error = true;

        }
      })
  }
 ngOnDestroy(): void {
   this.Subscription.unsubscribe();
 }    
}
