package com.example.demo;

import java.util.ArrayList;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class ContactoControler {
    private ArrayList<Contacto> contactos = new ArrayList<Contacto>();

    @GetMapping("/contactos")
    public ResponseEntity<ArrayList<Contacto>> getContactos() {
        return new ResponseEntity<ArrayList<Contacto>>(contactos, HttpStatus.OK);
    }

    @PostMapping("/contactos")
    public ResponseEntity<Contacto> postContacto(@RequestBody Contacto contacto){
        int id = contactos.size();
        contacto.setId(id);
        contactos.add(contacto);
        return new ResponseEntity<Contacto>(contacto, HttpStatus.OK);
    }

    @DeleteMapping("/contactos/{idString}")
    public ResponseEntity<ArrayList<Contacto>> deleteTask(@PathVariable String idString){
        int id = Integer.parseInt(idString);
        Contacto clon = new Contacto(id,"","","","");
        for(Contacto contacto2 : contactos){
            if(contacto2.equals(clon)){
                contactos.remove(clon);
                return new ResponseEntity<ArrayList<Contacto>>(new ArrayList<Contacto>(), HttpStatus.NO_CONTENT);
            }
        }
        return new ResponseEntity<ArrayList<Contacto>>(new ArrayList<Contacto>(), HttpStatus.BAD_REQUEST);
    }
}


