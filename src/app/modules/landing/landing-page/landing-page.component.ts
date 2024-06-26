import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit{

  ngOnInit(): void {
  }

  constructor(private router:Router) { }

  //Metodo para redireccionar a la pagina de login
  irAlLogin(){
    this.router.navigate(['/auth/login']);
  }

}
