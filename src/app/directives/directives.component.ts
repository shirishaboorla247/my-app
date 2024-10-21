import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  age:number=20;
  ages:number[]=[10,20,30,40,50];
  states:string[]=['Telangana','Andhra pradesh','Karnataka'];
  
  users:any=[
    {name:"aaa" ,age:20},
    {name:"ram" ,age:30},
    {name:"ccc" ,age:40},
    {name:"ddd" ,age:50},
  ]
  
  products:any=[
    {name:"pen", price:10, rating:3.5},
    {name:"laptop", price:30000,rating:4.5},
    {name:"mobile", price:10000, rating:4.3},
  ]
}
