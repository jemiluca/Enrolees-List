import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemcounter: number;
  projectText: string = "Angular project";
  projects = [];

  constructor() { }

  ngOnInit(): void {
    this.itemcounter = this.projects.length
  }

  additem()
  {
    this.projects.push(this.projectText);
    this.projectText = '';
    this.itemcounter = this.projects.length;
  }

  removeitem(i)
  {
    //this.projects.pop();
    this.projects.splice(i,1)
    this.itemcounter = this.projects.length

  }
}
