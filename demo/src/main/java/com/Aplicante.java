package com;

import java.io.Serializable;

import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.PositiveOrZero;

public class Aplicante implements Serializable{
    @PositiveOrZero
    private int id;
    @NotBlank
    private String nombre;
    @NotBlank
    private String sexo;
    @Min(18)
    @Max(90)
    private int edad;
    @Min(600000000)
    private int telef;
    @Email
    private String correo;
    @NotBlank
    private String dispon;
    @NotBlank
    private String depart;
    @NotBlank
    private String fecha;


    public Aplicante(int id, String nombre,String sexo, int edad, int telef, String correo, String dispon, String depart, String fecha) {
        this.setId(id);
        this.setNombre(nombre);
        this.setSexo(sexo);
        this.setEdad(edad);
        this.setTelef(telef);
        this.setCorreo(correo);
        this.setDispon(dispon);
        this.setDepart(depart);
        this.setFecha(fecha);
    }

    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public String getFecha() {
        return fecha;
    }
    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public String getDepart() {
        return depart;
    }
    public void setDepart(String depart) {
        this.depart = depart;
    }

    public String getDispon() {
        return dispon;
    }
    public void setDispon(String dispon) {
        this.dispon = dispon;
    }

    public String getCorreo() {
        return correo;
    }
    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public int getTelef() {
        return telef;
    }
    public void setTelef(int telef) {
        this.telef = telef;
    }

    public int getEdad() {
        return edad;
    }
    public void setEdad(int edad) {
        this.edad = edad;
    }
    
    public String getSexo() {
        return sexo;
    }
    public void setSexo(String sexo) {
        this.sexo = sexo;
    }


    @Override
    public boolean equals(Object obj) {
        if(obj instanceof Aplicante){
            Aplicante otro = (Aplicante) obj;
            if(otro.getId() == this.getId()) {
                return true;
            }
        }
        return false;
    }
}
