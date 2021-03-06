import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SigninModel } from './signin.model';
@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  providers: [],
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm:FormGroup;
  usrName:string;
  pwd:string;
  constructor(private fb:FormBuilder, private route:ActivatedRoute) {}

  ngOnInit() {
    this.signinForm=this.fb.group({
      'usrName':new FormControl(''),
      'pwd': new FormControl('')
    });
  }
  valueSubmission(signin:SigninModel){
    alert('form submission happened'+signin.usrName);
  }
}
