import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-viajecliente',
  templateUrl: './viajecliente.page.html',
  styleUrls: ['./viajecliente.page.scss'],
})
export class ViajeclientePage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Desea cancelar el viaje?',
      subHeader: 'Si cancela se le cobrara un monto extra en el siguiente viaje',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
        },
      ],
    });

    await alert.present();
  }

}
