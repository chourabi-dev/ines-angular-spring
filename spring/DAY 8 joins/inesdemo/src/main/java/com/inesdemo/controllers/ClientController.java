package com.inesdemo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.inesdemo.entities.Client;
import com.inesdemo.repositories.CategoryRepository;
import com.inesdemo.repositories.ClientRepository;
import com.inesdemo.requests.ClientModel;
import com.inesdemo.responses.JsonResponse;

@RestController
@RequestMapping("/api/clients")
public class ClientController {

	
	
	
	
	@Autowired
	ClientRepository cr;
	
	
	@GetMapping("/list")
	public ResponseEntity<?> getAll(){
		return ResponseEntity.ok().body( this.cr.findAll() ); 
	}
	
	
	
	@PostMapping("/add")
	public ResponseEntity<?> add(@RequestBody ClientModel model){

		Client c = new Client();
		
		c.setFullname(model.getFullname());
		c.setEmail(model.getEmail());
		c.setAddress(model.getAddress());
		c.setPhone(model.getPhone());
		
		
		this.cr.save(c);
		
		
		// LET THE USER KNOW THAT EVERYTHING IS OK
		JsonResponse res = new JsonResponse();
		res.setMessage("client inserted successfully !!");
		res.setSuccess(true);
		
		
		// SEND THE RESPONSE !!
								
		return ResponseEntity.ok().body(res);

		
		
	}
	
	
	
	
	/*********************************************** sells  *****************************************************/
	
	
	
	
	
	
	
	
	
	
}
