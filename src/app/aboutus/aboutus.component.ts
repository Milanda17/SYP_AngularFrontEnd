import { Component, OnInit } from '@angular/core';

export interface Employee{
  id:string;
  name:string;
  email:string;
  password:string; 
}

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  employees:Employee[] = [

    {id:"1", name:"Mila1", email:"Mila1@gmail.com", password:"123"},
    {id:"2", name:"Mila2", email:"Mila2@gmail.com", password:"123"},
    {id:"3", name:"Mila3", email:"Mila3@gmail.com", password:"123"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
