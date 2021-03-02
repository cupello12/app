export interface Tareas {
  userId: string;
  id?: string;
  title: string;
  body:string;
  //la idea es que como se esta usando un api que no tiene numero de telefono como dato se usa body para agregar un numero de telefono pero almacenandolo como string
  //el titulo es el nombre y apellido
}
