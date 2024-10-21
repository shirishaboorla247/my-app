import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankAccountsService } from '../bank-accounts.service';

@Component({
  selector: 'app-create-bankaccounts',
  templateUrl: './create-bankaccounts.component.html',
  styleUrls: ['./create-bankaccounts.component.css']
})
export class CreateBankaccountsComponent {

  public bankaccountsForm:FormGroup = new FormGroup({
    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city:new FormControl(),
    profile_picture: new FormControl(),
    id: new FormControl(),

  }
);
  constructor(private _bankaccountsService: BankAccountsService){}
  submit(){
    console.log(this.bankaccountsForm.value);
    this._bankaccountsService.createbankaccounts(this.bankaccountsForm.value).subscribe(
      (data:any)=>{
        alert("Create Succesfully!!");
      },
      (err:any)=>{
        alert(err.error);
      }
        )
      }
    
  }

