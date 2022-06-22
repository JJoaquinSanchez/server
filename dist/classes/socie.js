"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Socie = exports.Domicilio = exports.Tutor = void 0;
class Tutor {
    constructor(nombre, apellido, vinculo, telefono, documento, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.vinculo = vinculo;
        this.telefono = telefono;
        this.documento = documento;
        this.edad = edad;
    }
}
exports.Tutor = Tutor;
class Domicilio {
    constructor(direccion, barrio, localidad) {
        this.direccion = direccion;
        this.barrio = barrio;
        this.localidad = localidad;
    }
}
exports.Domicilio = Domicilio;
class Socie {
    constructor(nombre, apellido, fechaDeNacimiento, documento, pronombre, escuela, carrera, telefono, redes, email) {
        this.tutor = Tutor;
        this.domicilio = Domicilio;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha_de_nacimiento = fechaDeNacimiento;
        this.documento = documento;
        this.pronombre = pronombre;
        this.escuela = escuela;
        this.carrera = carrera;
        this.telefono = telefono;
        this.redes = redes;
        this.email = email;
    }
}
exports.Socie = Socie;
