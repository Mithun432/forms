import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
title="task8";
myform:any={
  username:'',
  email:'',
  address:'',
  dob:'',
  password:'',
  phone:''
};
  onSubmit(){
    console.log(this.myform);
    alert("Successfully Submitted");
  }
}
