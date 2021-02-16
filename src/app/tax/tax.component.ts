import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.scss']
})
export class TaxComponent implements OnInit {

  title = 'form';
  constructor(private formBuilder:FormBuilder) { }

  profileForm = this.formBuilder.group({
    TaxId:[''],
    TaxName:[''],
    TaxType:[''],
    TaxRate:['']
  });

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('Form date is', this.profileForm.value);
  }

}

