import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name = new FormControl();
  email = new FormControl();

  employee = {
    id: '',
    description: '',
    email: '',
    password: '',
    published: false
  };
  submitted = false;


  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }
  showName(){
    alert('My name is Mila');
  }
  save(){
    alert(this.name.value);
  }

  saveTutorial() {
    const data = {
      name: this.name.value,
      email: this.email.value
    };

    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newTutorial() {
    this.submitted = false;
    this.employee = {
      id: '',
      description: '',
      email: '',
      password: '',
      published: false
    };
  }

}
