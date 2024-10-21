import { Component } from '@angular/core';

@Component({
  selector: 'app-website1',
  templateUrl: './website1.component.html',
  styleUrls: ['./website1.component.css']
})
export class Website1Component {
  productName:string='';
  price:number=0;
  rating:number=0;
  deliveryDate:any;
  freedelivery: boolean=true;
  products:any=[];

  submit(){
    let product= {
      name:this.productName,
      price:this.price,
      rating:this.rating,
      deliveryDate:this.deliveryDate,
      freedelivery:this.freedelivery,
    }
    this.products.push(product);
  }
  delete(i:number){
    this.products.splice(i,1)
  }
}
