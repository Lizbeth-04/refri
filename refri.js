'use strict'


class Refrigerador {
    constructor(marca, capacidad, temperaturaActual) {
        this.marca = marca;
        this.capacidad = capacidad;
        this.temperaturaActual = temperaturaActual;
        this.alimentos = []; 
    }

    ajustarTemperatura(nuevaTemperatura) {
        this.temperaturaActual = nuevaTemperatura;
      alert(`La temperatura del refrigerador se ajustó a ${nuevaTemperatura} grados Celsius.`);
    }

    nuevosProductos(alimento) {
        this.alimentos.push(alimento);
        alert(`Se agregó ${alimento} al refrigerador.`);
    }

    mostrarContenido() {
        alert(`Refrigerador ${this.marca}, Capacidad: ${this.capacidad} litros, Temperatura: ${this.temperaturaActual} grados Celsius.`);
     alert("Contenido:");
        this.alimentos.forEach((alimento, index) => {
            alert(`${index + 1}. ${alimento}`);
        });
    }
}


const miRefrigerador = new Refrigerador("Indurama", 500, 4);
miRefrigerador.nuevosProductos("Queso");
miRefrigerador.nuevosProductos("carnes");
miRefrigerador.nuevosProductos("Verduras");
miRefrigerador.mostrarContenido();
miRefrigerador.ajustarTemperatura(8);
miRefrigerador.mostrarContenido();