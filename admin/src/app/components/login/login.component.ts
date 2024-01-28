import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any;
declare var iziToast:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:any = {};

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  login(loginForm:any){
    if(loginForm.valid){
      alert('valido');
      console.log(this.user);
    } else {
      iziToast.show({
        title:'Error',
        icon: 'fa-solid fa-triangle-exclamation',
        iconColor:'#FF0000',
        titleColor: '#FF0000',
        color: '#FFFF',
        class: 'text-danger',
        position: 'topRight',
        message: 'Los datos del formulario no son validos'
      });
    }
  };

}
