package com.example.demo;

import java.io.Serializable;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.PositiveOrZero;
import javax.validation.constraints.Size;

public class Contacto implements Serializable{
    @NotEmpty
    private String empresa;
    @NotEmpty
    private String nombre;
    @Email
    private String correoElec;
    @Size(min = 10)
    private String mensaje;
    @PositiveOrZero
    private int id;


    
    public Contacto(int id,String empresa, String nombre, String correoElec, String mensaje) {
        this.setId(id);
        this.setEmpresa(empresa);
        this.setCorreoElec(correoElec);
        this.setNombre(nombre);
        this.setMensaje(mensaje);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmpresa() {
        return empresa;
    }
    public String getMensaje() {
        return mensaje;
    }
    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }
    public String getCorreoElec() {
        return correoElec;
    }
    public void setCorreoElec(String correoElec) {
        this.correoElec = correoElec;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public void setEmpresa(String empresa) {
        this.empresa = empresa;
    }

    @Override
    public boolean equals(Object obj) {
        if(obj instanceof Contacto){
            Contacto otro = (Contacto) obj;
            if(otro.getId() == this.getId()) {
                return true;
            }
        }
        return false;
    }
}
