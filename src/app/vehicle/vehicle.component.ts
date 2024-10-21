import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  vehicles:any=[];
  term:string="";
  column:string="";
  order:string="";
  page:number=1;

  constructor(private _vehicleService:VehicleService){

    _vehicleService.getVehicle().subscribe(
      (data:any)=>{
        this.vehicles =data;
      },
      (error:any)=>{
        alert("internal server error");
      }
    
    )
  }
  sort(){
    this._vehicleService.getsortedvehicles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (error:any)=>{
        alert(error.error);
      }
    )
  }
  pagination(){
    this._vehicleService.getpagedvehicles(this.page).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        console.log("Internal Server error");
      }
    )
  }
  search(){
    this._vehicleService.getfilteredvehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("err.error");

      }
    )
  }

  delete(id:string){
    this._vehicleService.deletevehicle(id).subscribe(
      (data:any)=>{
        alert("Deleted Succesfully");
        location.reload();
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }

 
}
