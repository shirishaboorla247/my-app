import { Component } from '@angular/core';
import { BankAccountsService } from '../bank-accounts.service';

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.css']
})
export class BankAccountsComponent {
  bankaccounts: any = [];
  term: string = "";
  column: string = "";
  order: string = "";
  page: number = 1;
  constructor(private _bankaccountsService: BankAccountsService) {
    _bankaccountsService.getbankaccounts().subscribe(
      (data: any) => {
        this.bankaccounts = data;
      },
      (err: any) => {
        alert("internal server error");
      }

    )
  }
  search(){
    this._bankaccountsService.getfilteredbanksaccounts(this.term).subscribe(
      (data:any)=>{
        this.bankaccounts=data;
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }
  sort(){
    this._bankaccountsService.getsortedbankaccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.bankaccounts=data;
      },
      (err:any)=>{
        alert("err.error");
      }
    )
  }
  pagination(){
    this._bankaccountsService.getpagedbankaccounts(this.page).subscribe(
      (data:any)=>{
        this.bankaccounts=data;
      },
      (err:any)=>{
      console.log("Internal Server error");
      }
    )
  }
  delete(id:string){
    this._bankaccountsService.deletebankaccounts(id).subscribe(
      (data:any)=>{
        alert("Deleted Succesfully!!");
        location.reload();
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }
  
}
