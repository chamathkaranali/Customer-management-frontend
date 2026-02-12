import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Customer{
  name:string;
  email:string;
  phoneNumber:string;
}

@Component({
  selector: 'app-customer-form',
  imports: [FormsModule],
  templateUrl: './customer-form.html',
  styleUrl: './customer-form.css',

})
export class CustomerForm {
  customer:Customer={
    name:'',
    email:'',
    phoneNumber:''
  } 

}
