import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills={
    tacks:{
      one:"UI/UX Design",
      two:"Responsive Design",
      three:"Web Design",
      four:"Mobile App Design"

    },
    technololgies:{
      one:"HTML",
      two:"CSS",
      three:"JavaScript",
      four:"ReactJS",
      five:"NextJS",
      six:"Angular",
      seven:"Nodejs",
      eight:"WordPress",

    },
    


  }


}
