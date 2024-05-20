import { Component } from '@angular/core';
 //import  '../home/';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homeSection={
        name:"Ahmed Gawish",
        postion:"Web Developer",
        contact:"contact me",
        img:"assets/ahmdgawish.jpg"

  }

}
