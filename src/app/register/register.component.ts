import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
// import { Validators} from '@angular/forms';
import {
  InsertedSuccess,
  Interface2,
  UniqueConstraintError,
  Read
} from '../interface2';
import { Subscription } from 'rxjs';
import { Service2Service } from '../service2.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
}) 

export class RegisterComponent implements OnInit {
  constructor(private Service: Service2Service) {}
  ngOnInit(): void {
    
  }
  registerForm = new FormGroup({
    firstname: new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    lastname: new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl('',[Validators.required,Validators.email]),
    mobile: new FormControl('',[Validators.required,Validators.pattern("[0-9]*"),Validators.minLength(10),Validators.maxLength(10)]),
    gender: new FormControl('',[Validators.required]),
    pwd: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
    // rpwd: new FormControl(''),
  });

  registerSubmited(){
    // if(this.Pwd.value == this.Rpwd.value){
    //   console.log(this.registerForm.valid);
    //   // this.repeatPass='none'
    //   // console.log("Submitted");
    // }else{
    //   this.repeatPass = 'inline';
    // }
  
  }

  get FirstName(): FormControl{
    return this.registerForm.get("firstname") as FormControl;
  }
  
  get LastName(): FormControl{
    return this.registerForm.get("lastname") as FormControl;
  }
  
  get Email(): FormControl{
    return this.registerForm.get("email") as FormControl;
  }

  get Mobile(): FormControl{
    return this.registerForm.get("mobile") as FormControl;
  }

  get Gender(): FormControl{
    return this.registerForm.get("gender") as FormControl;
  }

  get Pwd(): FormControl{
    return this.registerForm.get("pwd") as FormControl;
  }
  Subscription: Subscription = new Subscription();
  User: Interface2 = {
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    gender:'',
    pwd: ''
  }; 
  d = [];
  canShowData=false;
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.Subscription = this.Service.Insertreg(this.User).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.email} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.User.email} Inserted Succesfully`;
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
    // this the another syntax for the Subscribe Its advanced Handling everything
  }
  Delete() { 
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.Subscription = this.Service.Deletereg(this.User.email).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.email} not Exists`;
        } else {
          this.SuccessMsg = `${this.User.email} Deleted Succesfully`;
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }
  
  Update() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';
      
    const Data = {
      firstname: this.User.firstname,
      lastname: this.User.lastname,
      email: this.User.email,
      mobile: this.User.mobile,
      gender: this.User.gender,
      pwd: this.User.pwd

    };
      
    this.Subscription = this.Service.Updatereg(this.User.email,Data).subscribe({
      next: (Data: any) => {
        console.log(`Updated values:  firstname=${this.User.firstname}, lastname=${this.User.lastname}, email=${this.User.email}, mobile=${this.User.mobile},gender=${this.User.gender},pwd=${this.User.pwd},`);
        this.SuccessMsg = `Updated data for Unit name ${this.User.email} successfully`;
      },
      error: (error: any) => {
        console.log(error);
        this.ErrorMsg = '';
      }
    });
}
Read() { 
  this.ErrorMsg = '';
  this.SuccessMsg = '';
 
  this.Subscription = this.Service.Readreg(this.User.email).subscribe({
    next: (Data: Read) => {
      if ('errornum' in Data){ 
        this.ErrorMsg = `The ${this.User.email} not Exists`;
      } else {   
        this.canShowData=true; 
        this.d = Data.Result; 
      }
    },
    error: (error:any) => { 
      //  console.log(error);
       this.ErrorMsg = `The ${this.User.email} not Exists`;
    },
  });
  
 
}

ngOnDestroy(){
  this.Subscription.unsubscribe();
}
}


  // repeatPass:string = 'none';


  

  







// import { Component, OnInit, OnDestroy } from '@angular/core';
// import {
//   InsertedSuccess,
//   Interface2,
//   UniqueConstraintError,
//   Read
// } from '../interface2';
// import { Subscription } from 'rxjs';
// import { Service2Service } from '../service2.service';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit,OnDestroy{
//   constructor(private Service: Service2Service) {}
//   ngOnInit() {}
//   Subscription: Subscription = new Subscription();
//   User: Interface2 = {
//     username:'',
//     fullname:'',
//     password:'',
//     phonenumber:'',
//     address:''
//   }; 
//   d = [];
//   canShowData=false;
//   SuccessMsg = '';
//   ErrorMsg = '';
//   Insertreg() {
//     this.ErrorMsg = '';
//     this.SuccessMsg = '';
//     this.Subscription = this.Service.Insertreg(this.User).subscribe({
//       next: (Datar: InsertedSuccess | UniqueConstraintError) => {
//         if ('errorNum' in Datar) {
//           this.ErrorMsg = `${this.User.username} alredy Exists`;
//         } else {
//           this.SuccessMsg = `${this.User.username} Inserted Succesfully`;
//         }
//       },
//       error: (Error) => {
//         console.log(Error);
//       },
//     });
//     // this the another syntax for the Subscribe Its advanced Handling everything
//   }
//   Deletereg() { 
//     this.ErrorMsg = '';
//     this.SuccessMsg = '';
//     this.Subscription = this.Service.Deletereg(this.User.username).subscribe({
//       next: (Datar: InsertedSuccess | UniqueConstraintError) => {
//         if ('errorNum' in Datar) {
//           this.ErrorMsg = `${this.User.username} not Exists`;
//         } else {
//           this.SuccessMsg = `${this.User.username} Deleted Succesfully`;
//         }
//       },
//       error: (Error) => {
//         console.log(Error);
//       },
//     });
//   }
//   ngOnDestroy() {
//     this.Subscription.unsubscribe();
//   }
//   Updatereg() {
//     this.ErrorMsg = '';
//     this.SuccessMsg = '';
      
//     const Datar = {
//       username: this.User.username,
//       fullname: this.User.fullname,
//       password: this.User.password,
//       phonenumber: this.User.phonenumber,
//       address: this.User.address

//     };
      
//     this.Subscription = this.Service.Updatereg(this.User.username,Datar).subscribe({
//       next: (Datar: any) => {
//         console.log(`Updated values: username=${this.User.username}, fullname=${this.User.fullname}, password=${this.User.password}, phonenumber=,username=${this.User.username}${this.User.phonenumber},address=${this.User.address}`);
//         this.SuccessMsg = `Updated data for Unit name ${this.User.username} successfully`;
//       },
//       error: (error: any) => {
//         console.log(error);
//         this.ErrorMsg = '';
//       }
//     });
// }
// Readreg() { 
//   this.ErrorMsg = '';
//   this.SuccessMsg = '';
 
//   this.Subscription = this.Service.Readreg(this.User.username).subscribe({
//     next: (Datar: Read) => {
//       if ('errornum' in Datar){ 
//         this.ErrorMsg = `The ${this.User.username} not Exists`;
//       } else {   
//         this.canShowData=true; 
//         this.d = Datar.Result; 
//       }
//     },
//     error: (error:any) => { 
//       //  console.log(error);
//        this.ErrorMsg = `The ${this.User.username} not Exists`;
//     },
//   });
// }


// } 







