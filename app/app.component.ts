import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes: Componente[] =[
    {
      icon: 'car-sport-outline',
      name: 'Home',
      redirecTo: '/index'
    },
    {
      icon: 'person-circle-outline',
      name: 'Iniciar sesión',
      redirecTo: '/login'
    },
    {
      icon: 'person-add-outline',
      name: 'Registro',
      redirecTo: '/registro'
    },
    {
      icon: 'person-add-outline',
      name: 'Registro Cliente',
      redirecTo: '/registrocliente'
    },
    {
      icon: 'car-sport-outline',
      name: 'Home cliente',
      redirecTo: '/inicio-cliente'
    },
    {
      icon: 'car-sport-outline',
      name: 'Home conductor',
      redirecTo: '/inicio-conductor'
    }
  ];

  constructor(private menu: MenuController) {}

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}

