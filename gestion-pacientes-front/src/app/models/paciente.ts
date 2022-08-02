export class Paciente {
    id?: number;
    dni: string;
    nombre: string;
    apellido: string;
    localidad: string;
    direccion: string;
    telefono: string;

    constructor(dni: string, nombre: string, apellido: string, localidad: string, direccion: string, telefono: string ) {
    
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.localidad = localidad;
        this.direccion = direccion;
        this.telefono = telefono;
    
    }
    
}

