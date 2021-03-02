import { Tareas } from './../Interface/tareas';
import { TareasService } from './../Service/tareas.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  tareas: Tareas[] = [];
  constructor(
    private TareasService: TareasService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) {}

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando..',
    });
    await loading.present();
    this.TareasService.getTareas().subscribe(async (tareas) => {
      console.log(tareas);
      this.tareas = tareas;
      await loading.dismiss();
    });
  }

  async AbrirAlerta() {
    const alert = await this.alertCtrl.create({
      header: 'Nueva tarea!',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Escriba su nombre y apellido',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        },
        {
          text: 'Crear',
          handler: (data) => {
            this.CrearTarea(data.title);
          },
        },
      ],
    });
    await alert.present();
  }

  CrearTarea(title: string) {
    const tarea = {
      userId: '1',
      title:'',
      body: '',
      id:'',

};
      this.TareasService.Creartaera(tarea)
    .subscribe((newtareas) => {
       this.tareas.unshift(newtareas);
   });
  }

  Eliminart(id: string, index: number) {
    this.TareasService.Eliminar(id).subscribe(() => {
      this.tareas.splice(index, 1);
      this.presentToast('Su tarea fue eliminada correctamente');
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
    });
    await toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando..',
      duration: 2000,
    });
    await loading.present();
    return loading;
  }
}
