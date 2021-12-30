import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators, NgForm } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('myForm1', { static: false }) myForm1: NgForm;

  username: string = '';
  password: string = '';
  hide = true;
  checked = false;


  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  login(form1: NgForm) {
    if (form1.valid) {
      console.log("success");
      this.router.navigate(['home']);
    }
    else {
      console.log("error");
    }
  }


}
