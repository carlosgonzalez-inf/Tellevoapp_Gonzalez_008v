import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicioviaje',
  templateUrl: './inicioviaje.page.html',
  styleUrls: ['./inicioviaje.page.scss'],
})
export class InicioviajePage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
