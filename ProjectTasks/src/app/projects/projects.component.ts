import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),

    
    address : new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    }),
  });

  constructor(
    private rout : Router
  ) { }

  ngOnInit(): void {
  }
onSubmit() {
    console.log(this.profileForm);
    console.warn(this.profileForm.value);
  }
NaviHome() {
  //Url to Navigate to
  this.rout.navigate([''])
}
}
