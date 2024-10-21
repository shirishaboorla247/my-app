import { Component } from '@angular/core';
import { Flipkart1Service } from '../flipkart1.service';

@Component({
  selector: 'app-flipkart1',
  templateUrl: './flipkart1.component.html',
  styleUrls: ['./flipkart1.component.css']
})
export class Flipkart1Component {
  flipkart:any =[];

  constructor(private _flipkartService:Flipkart1Service){
_flipkartService.getflikarts().subscribe(
  (data:any)=>{
    this.flipkart=data;
  }
)
  }

}
