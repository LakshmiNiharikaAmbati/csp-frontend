import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-che10',
  templateUrl: './che10.component.html',
  styleUrls: ['./che10.component.css']
})
export class Che10Component {
  userForm: FormGroup;
  listdata: any;


  constructor(private fb:FormBuilder){
   this.listdata=[];
   this.userForm = this.fb.group({
    Unitname:['',Validators.required],
    Unitlink:['',Validators.required],
   })
  }
public additem(): void{
  this.listdata.push(this.userForm.value);
  this.userForm.reset();
}

reset(){
  this.userForm.reset();
}

removeItem(element: number) {
  this.listdata.forEach((value: any, index: any) => {
    if (value == element)
      this.listdata.splice(index, 1);
  });
}


// removeItem(element: number){
//   this.listdata.forEach((value,index)=>{
//     if(value==element)
//     this.listdata.splice(index,1);
//   });
// }
  ngOnInit(){
   
  }

}
