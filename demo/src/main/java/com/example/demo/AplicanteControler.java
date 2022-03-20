package com.example.demo;

import java.util.ArrayList;

import com.Aplicante;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class AplicanteControler {
    private ArrayList<Aplicante> aplicantes = new ArrayList<Aplicante>();
    int idAplicante=0;

    @GetMapping("/aplicantes")
    public ResponseEntity<ArrayList<Aplicante>> getContactos() {
        return new ResponseEntity<ArrayList<Aplicante>>(aplicantes, HttpStatus.OK);
    }

    @PostMapping("/aplicantes")
    public ResponseEntity<Aplicante> postContacto(@RequestBody Aplicante aplicante){
        int id = idAplicante;
        idAplicante ++;
        aplicante.setId(id);
        aplicantes.add(aplicante);
        return new ResponseEntity<Aplicante>(aplicante, HttpStatus.OK);
    }

    @DeleteMapping("/aplicantes/{idString}")
    public ResponseEntity<ArrayList<Aplicante>> deleteTask(@PathVariable String idString){
        int id = Integer.parseInt(idString);
        Aplicante clon = new Aplicante(id,"","",25,600000000,"","","","");
        for(Aplicante aplicante2 : aplicantes){
            if(aplicante2.equals(clon)){
                aplicantes.remove(clon);
                return new ResponseEntity<ArrayList<Aplicante>>(new ArrayList<Aplicante>(), HttpStatus.NO_CONTENT);
            }
        }
        return new ResponseEntity<ArrayList<Aplicante>>(new ArrayList<Aplicante>(), HttpStatus.BAD_REQUEST);
    }
}

