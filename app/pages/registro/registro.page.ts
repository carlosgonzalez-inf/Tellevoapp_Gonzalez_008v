import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
}from '@angular/forms';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder,public alertController:AlertController,private menuController: MenuController) { 
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required),
      'modelo': new FormControl("",Validators.required),
      'patente': new FormControl("",Validators.required),
      'carrera': new FormControl("",Validators.required)
    });
  }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header:'Datos incompletos',
        message: 'Tienes que llenar todos los campos',
        buttons: ['Aceptar'],
      });

      await alert.present();
      return;
    }

    var usuario = {
      nombre: f.nombre,
      password: f.password,
      modelo: f.modelo,
      patente:f.patente,
      carrera:f.carrera,
    }

    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

}
