import { Tareas } from './../Interface/tareas';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private api = 'https://jsonplaceholder.typicode.com';
  constructor(private https:HttpClient) { }
  getTareas() {
    const path = `${this.api}/posts/`;
    return this.https.get<Tareas[]>(path);
  }

  getTarea(id: string) {
    const path = `${this.api}/posts/${id}`;
    return this.https.get<Tareas>(path);
  }

  Creartaera(Tareas: Tareas) {
    //el dato se guarda en tareas y se usa path para pasar los datos a  Tareas
    const path = `${this.api}/posts`;
    return this.https.post<Tareas>(path, Tareas);
  }

  ActualizarTareas(Tareas: Tareas) {
    const path = `${this.api}/posts/${Tareas.id}`;
    //almacena en la constante path la url con el id para al usar el metodo put se actualize
    return this.https.put<Tareas>(path, Tareas);
  }

  Eliminar(id: string) {
     //almacena en la constante path la url con el id para al usar el metodo delete eliminar
    const path = `${this.api}/posts/${id}`;
    return this.https.delete(path);
  }
}
