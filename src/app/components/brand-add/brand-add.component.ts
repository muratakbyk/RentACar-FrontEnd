import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {
    
  brandAddForm : FormGroup;

  constructor(private formBuilder:FormBuilder, private brandService:BrandService, private toastrService:ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.createBrandAddForm();
  }
  createBrandAddForm(){
    this.brandAddForm = this.formBuilder.group({
      brandName : ["", Validators.required]
    })
  }
  add(){
    if(this.brandAddForm.valid){
      let brandModel = Object.assign({},this.brandAddForm.value) 
      console.log(brandModel)
      this.brandService.add(brandModel).subscribe(response=>{
        console.log(response)
        this.toastrService.success(response.message,"Successful")
        this.router.navigate(["brands"])
      },responseError=>{
        if(responseError.error.ValidationErrors.length>0){
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
          this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage, "Validation Error")
          }
        }
      })
    } else {
      this.toastrService.error("Missing Form","Warning")
    }    
  }

}
