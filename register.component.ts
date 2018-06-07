import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient_Reg_Model } from './patient_Reg.model';
import { Doctor_Reg_Model } from './doctor_Reg.model';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  providers: [],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
      patient_Reg_Form: FormGroup;
      doctor_Reg_Form: FormGroup;
      pa_Name: string;
      pa_Title: string;
      pa_Age: number;
      pa_Dob: Date;
      pa_Gen: string;
      pa_Height: number;
      pa_Weight: number;
      pa_BloodGroup: string;
      pa_Street: string;
      pa_State: string;
      pa_City: string;
      pa_Zipcode: number;
      pa_Email: string;
      pa_PWD: string;
      pa_Home_Number: number;
      pa_Mobile_Number: number; 

      doc_Name: string;
      doc_Title: string;
      doc_Gen: string;
      doc_Age: number;
      doc_DOB: Date;
      doc_DOA: Date;
      doc_Special: string;
      doc_EXP: number;
      doc_EDU: string;
      doc_Street: string;
      doc_State: string;
      doc_City: string;
      doc_Zipcode: number;
      doc_Email: string;
      doc_PWD: string;
      doc_Home_Number: number;
      doc_Mobile_Number: number;

   constructor(private fb:FormBuilder, private route:ActivatedRoute) {}
    
   ngOnInit() {
    this.patient_Reg_Form=this.fb.group({
      'pa_Name': new FormControl(''),
      'pa_Title': new FormControl(''),
      'pa_Age':  new FormControl(''),
      'pa_DOB': new FormControl(''),
      'pa_Gen': new FormControl(''),
      'pa_Height': new FormControl(''),
      'pa_Weight': new FormControl(''),
      'pa_BloodGroup': new FormControl(''),
      'pa_Street': new FormControl(''),
      'pa_State': new FormControl(''),
      'pa_City': new FormControl(''),
      'pa_Zipcode': new FormControl(''),
      'pa_Email': new FormControl(''),
      'pa_PWD': new FormControl(''),
      'pa_Home_Number': new FormControl(''),
      'pa_Mobile_Number': new FormControl(''),
    }),
    this.doctor_Reg_Form=this.fb.group({
      'doc_Name': new FormControl(''),
      'doc_Title': new FormControl(''),
      'doc_Age':  new FormControl(''),
      'doc_DOB': new FormControl(''),
      'doc_Gen': new FormControl(''),
      'doc_DOA': new FormControl(''),
      'doc_Special': new FormControl(''),
      'doc_EXP': new FormControl(''),
      'doc_EDU': new FormControl(''),
      'doc_Street': new FormControl(''),
      'doc_State': new FormControl(''),
      'doc_City': new FormControl(''),
      'doc_Zipcode': new FormControl(''),
      'doc_Email': new FormControl(''),
      'doc_PWD': new FormControl(''),
      'doc_Home_Number': new FormControl(''),
      'doc_Mobile_Number': new FormControl(''),
    });
  }
  valueSubmission(register:Patient_Reg_Model){
    alert('form submission happened: '+register.pa_Name);
  }

}

