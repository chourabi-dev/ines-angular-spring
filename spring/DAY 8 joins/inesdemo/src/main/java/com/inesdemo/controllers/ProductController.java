package com.inesdemo.controllers;

import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.inesdemo.entities.Product;
import com.inesdemo.repositories.CategoryRepository;
import com.inesdemo.repositories.ProductRepository;
import com.inesdemo.requests.ProductRequest;
import com.inesdemo.responses.JsonResponse;

@RestController
@RequestMapping("/api/products")
public class ProductController {
	
	
	@Autowired
	ProductRepository productRepository;
	
	@Autowired
	CategoryRepository cr;
	
	
	// INSERT !!
	@PostMapping("/add")
	public ResponseEntity<?> add(@RequestBody ProductRequest model){
		
		// CREATE THE ENTITY !!!
		Product p = new Product();
		
		p.setTitle( model.getTitle() );
		p.setQuantity( model.getQuantity() );
		p.setPrice( model.getPrice() );
		
		p.setCategory( this.cr.findById(model.getCategory()).get() );
		
		//SAVE THE ENTITY !!!
		
		this.productRepository.save(p);
		
		
		// LET THE USER KNOW THAT EVERYTHING IS OK
		JsonResponse res = new JsonResponse();
		res.setMessage("product inserted successfully !!");
		res.setSuccess(true);
		
		
		// SEND THE RESPONSE !!
								
		return ResponseEntity.ok().body(res);
	}
	
	
	
	// LIST !!!!!
	
	@GetMapping("/list")
	public ResponseEntity<?> list(){
		return ResponseEntity.ok().body(this.productRepository.findAll());
	}
	
	
	
	// update
	
	@PostMapping("/update/{id}")
	public ResponseEntity<?> update(@RequestBody ProductRequest model, @PathVariable( name="id") long id){
		
		try {
			// SEARCH FOR THE RPRODUCT BY ID ( has an ID  )
			Product p = this.productRepository.findById(id).get();
			
			
			p.setTitle( model.getTitle() );
			p.setQuantity( model.getQuantity() );
			p.setPrice( model.getPrice() );
			p.setCategory( this.cr.findById(model.getCategory()).get() );
			
			//SAVE THE ENTITY !!!
			
			this.productRepository.save(p);
			
			
			// LET THE USER KNOW THAT EVERYTHING IS OK
			JsonResponse res = new JsonResponse();
			res.setMessage("product updated successfully !!");
			res.setSuccess(true);
			
			
			// SEND THE RESPONSE !!
									
			return ResponseEntity.ok().body(res);
		}catch(NoSuchElementException e) {
			JsonResponse res = new JsonResponse();
			res.setMessage("product not found");
			res.setSuccess(false);
			
			
			// SEND THE RESPONSE !!
									
			return ResponseEntity.ok().body(res);

		}
	
	}
	
	
	
	// DELETE !!
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> delete(@PathVariable( name="id") long id){
		
		try {
			// SEARCH FOR THE RPRODUCT BY ID ( has an ID  )
			Product p = this.productRepository.findById(id).get();
			
			  
			//DELETE THE ENTITY !!!
			
			this.productRepository.delete(p);
			
			
			// LET THE USER KNOW THAT EVERYTHING IS OK
			JsonResponse res = new JsonResponse();
			res.setMessage("product deleted successfully !!");
			res.setSuccess(true);
			
			
			// SEND THE RESPONSE !!
									
			return ResponseEntity.ok().body(res);
		}catch(NoSuchElementException e) {
			JsonResponse res = new JsonResponse();
			res.setMessage("product not found");
			res.setSuccess(false);
			
			
			// SEND THE RESPONSE !!
									
			return ResponseEntity.ok().body(res);

		}
	
	}

}
