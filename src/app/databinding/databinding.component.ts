import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  age:number=0;
  name:string="ramesh";
  phone:string='+91';

  isInvalid:boolean=true;
  submit(){
    alert("submit clicked");
  }
  typing(){
    alert("typing");
  }
}
