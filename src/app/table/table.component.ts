










// import { Component } from '@angular/core';
// import {
//   InsertedSuccess,
//   Interface1,
//   UniqueConstraintError,
//   Read
// } from '../interface1';
// import { Subscription } from 'rxjs';
// import { Service1Service } from '../service1.service';
// @Component({
//   selector: 'app-table',
//   templateUrl: './table.component.html',
//   styleUrls: ['./table.component.css']
// })




// export class TableComponent {
//   i: any; 
//   constructor(private Service: Service1Service) {}
  
//   Subscription: Subscription = new Subscription();
//   User: Interface1= {
//     Unitname: '',
//     Unitlink: '',
//   };  
//   d = [];  
//   d1 = [];   
//   d2 = [];
//   canShowData=false;
//   match = false;
//   match1 = false;
//   status = false;
//   SuccessMsg = '';
//   ErrorMsg = '';
//   close(){ 
//     this.match = false;
//     this.match1 = false;
   
//   }
//   ReadAll(Detail:String) { 
//     this.ErrorMsg = '';
//     this.SuccessMsg = '';
//     this.Subscription = this.Service.Readmat(Detail).subscribe({
//       next: (Data: Read) => {
//         if ('errorNum' in Data) {
//           this.ErrorMsg = `${this.User.Unitname} not Exists`;
//         } else {
//           this.d = Data.Result;  
//           console.log(this.d);
//         }
//       },
//       error: (Error) => {
//         console.log(Error);
//       },
//     });
//   }  
//   Get(i:any){
//     const Unitname = i[0];
//     this.canShowData=false;
//     this.Subscription = this.Service.Readmat(Unitname).subscribe({
//       next: (Data: Read) => {
//         if ('errorNum' in Data) {
//           this.ErrorMsg = `${this.User.Unitname} not Exists`;
//         } else {
     
//           this.status = true;
//           this.match1 = true;  
//           this.d2 = Data.Result;    
   
//           this.User.Unitname = this.d2[0][0];
//           this.User.Unitlink = this.d2[0][1]; 
//           this.close();
          
//         }
//       },
//       error: (Error) => {
//         console.log(Error);
//       },
//     });
//   }
//   Update(){
//     this.SuccessMsg = '';
//       this.ErrorMsg = ''; 
//       const Data = {
//         Unitname: this.User.Unitname,
//         Unitlink: this.User.Unitlink,
        
//       };
        
//       this.Subscription = this.Service.Updatemat(this.User.Unitname,Data).subscribe({
//         next: (data: any) => {
//           console.log(`Updated values: Unitname=${this.User.Unitname}, Unitlink=${this.User.Unitlink}`);
//           this.SuccessMsg = `Updated data for Unitname ${this.User.Unitname} successfully`;  
//           this.close();
//           this.ReadAll('All');
//         },
//         error: (error: any) => {
//           console.log(error)
//           this.ErrorMsg = '';
//         }
//       })
//   }
  
//   Read(i:any) {  
//     const Unitname = i[0];
//     this.ErrorMsg = '';
//     this.SuccessMsg = '';
  
//     this.Subscription = this.Service.Readmat(Unitname).subscribe({
//       next: (Data: Read) => {
//         if ('errorNum' in Data) {
//           this.ErrorMsg = `${this.User.Unitname} not Exists`;
//         } else {
//           this.status = true;
//           this.match = true;  
//           this.d1 = Data.Result; 
//           console.log(this.d1)
//           this.canShowData=true;
//         }
//       },
//       error: (Error) => {
//         console.log(Error);
//       },
//     });
//   }

//   Delete(i:any) { 
//     this.ErrorMsg = '';
//     this.SuccessMsg = '';
//     this.canShowData=true;
//     const Unitname = i[0];
//     this.Subscription = this.Service.Deletemat(Unitname).subscribe({
//       next: (Data: InsertedSuccess | UniqueConstraintError) => {
//         if ('errorNum' in Data) {
//           this.ErrorMsg = `${this.User.Unitname} not Exists`;
//         } else {
//           this.SuccessMsg = `${this.User.Unitname} Deleted Succesfully`;
//           this.ReadAll('All');
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
// } 















import { Component } from '@angular/core';
import {
  InsertedSuccess,
  Interface1,
  UniqueConstraintError,
  Read
} from '../interface1';
import { Subscription } from 'rxjs';
import { Service1Service } from '../service1.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})




export class TableComponent {
  i: any; 
  constructor(private Service: Service1Service) {}
  
  Subscription: Subscription = new Subscription();
  User: Interface1= {
    Unitname: '',
    Unitlink: '',
  };  
  d = [];  
  d1 = [];   
  d2 = [];
  canShowData=false;
  match = false;
  match1 = false;
  hide=false;
  SuccessMsg = '';
  ErrorMsg = '';
  close(){
    this.hide=false;
    this.match = false;
    this.match1 = false;
    // this.canShowData=true;
  }
  
  ReadAll(Detail:String) { 
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.Subscription = this.Service.Readmat(Detail).subscribe({
      next: (Data: Read) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.Unitname} not Exists`;
        } else {
          this.d = Data.Result;  
          console.log(this.d);
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }  
  Get(i:any){
    const Unitname = i[0];
    this.canShowData=false;
    this.Subscription = this.Service.Readmat(Unitname).subscribe({
      next: (Data: Read) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.Unitname} not Exists`;
        } else {
    
          this.d2 = Data.Result;   
          this.User.Unitname = this.d2[0][0];
          this.User.Unitlink = this.d2[0][1];  
          this.match1 = true;  
          this.match = false; 
          this.hide=true;
          
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }
  Update(){
    this.SuccessMsg = '';
      this.ErrorMsg = ''; 
      const Data = {
        Unitname: this.User.Unitname,
        Unitlink: this.User.Unitlink,
        
      };
        
      this.Subscription = this.Service.Updatemat(this.User.Unitname,Data).subscribe({
        next: (data: any) => {
          console.log(`Updated values: Unitname=${this.User.Unitname}, Unitlink=${this.User.Unitlink}`);
          this.SuccessMsg = `Updated data for Unitname ${this.User.Unitname} successfully`;  
          // this.close(); 
          this.match1 = true;  
          this.match = false; 
          this.ReadAll('All');
        },
        error: (error: any) => {
          console.log(error)
          this.ErrorMsg = '';
        }
      })
  }
  
  Read(i:any) {  
    const Unitname = i[0];
    this.ErrorMsg = '';
    this.SuccessMsg = '';
  
    this.Subscription = this.Service.Readmat(Unitname).subscribe({
      next: (Data: Read) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.Unitname} not Exists`;
        } else {
          this.match = true;  
          this.match1 = false;  
          this.d1 = Data.Result; 
          this.hide=true;
          console.log(this.d1)
          
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }

  Delete(i:any) { 
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.canShowData=true;
    const Unitname = i[0];
    this.Subscription = this.Service.Deletemat(Unitname).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.Unitname} not Exists`;
        } else {
          this.SuccessMsg = `${this.User.Unitname} Deleted Succesfully`;
          this.ReadAll('All');
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
}