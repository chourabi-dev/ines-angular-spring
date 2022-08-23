package com.inesdemo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.inesdemo.requests.ProductRequest;
import com.inesdemo.responses.JsonResponse;

@RestController
@RequestMapping("/main")
public class AppController {

	
	@GetMapping("/welcome")
	public JsonResponse sayHello() {
		
		
		
		// traitment...
		
		
		
		JsonResponse res = new JsonResponse();
		
		res.setSuccess(true);
		res.setMessage("first api response");
		
		
		return res;
	}
	
	
	
	
	
	// request query
	
	// somme x et y
	
	@GetMapping("/somme")
	public int sommme( @RequestParam( required=true ) int x, @RequestParam( required=true ) int y ) {
		return ( x + y );
	}
	
	
	// path variable
	
	@GetMapping("/user/{id}")
	public String getUserById( @PathVariable( name="id" )  int id ) {
		
		System.out.println( id );
		return "User data";
	}
	
	
	
	/****************************************************************************************************************/
	
	
	@PostMapping("/product/add") 
	public void addProduct( @RequestBody ProductRequest model ) {
		System.out.println( model.getPrice() );
		System.out.println( model.getTitle());
		System.out.println( model.getQuantity());
		
		
		// insert DB
		
		// ...
		
	}
	
	/*******************************************************************************************************************/
	
	
}
