package com.inesdemo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.inesdemo.entities.Category;
import com.inesdemo.repositories.CategoryRepository;
import com.inesdemo.requests.CategoryModel;
import com.inesdemo.responses.JsonResponse;

@RestController
@RequestMapping("/api/categories")
public class CategroryController {

	
	@Autowired
	CategoryRepository cr;
	
	
	@GetMapping("/list")
	public ResponseEntity<?> getAll(){
		return ResponseEntity.ok().body( this.cr.findAll() ); 
	}
	
	
	@PostMapping("/add")
	public ResponseEntity<?> add(@RequestBody CategoryModel model){
		Category c = new Category();
		
		c.setName( model.getName() );
		
		
		cr.save(c);
		
		

		// LET THE USER KNOW THAT EVERYTHING IS OK
		JsonResponse res = new JsonResponse();
		res.setMessage("category inserted successfully !!");
		res.setSuccess(true);
		
		
		// SEND THE RESPONSE !!
								
		return ResponseEntity.ok().body(res);
		
	}
	
}
