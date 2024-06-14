package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class controller {

	@Autowired
	Interface i1;
	
	@GetMapping("/get")
	public List<model> getDetails()
	{
		System.out.println("All the details are present in the table");
		return i1.findAll();
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteDetails(@PathVariable("id") int id)
	{
		i1.deleteById(id);
		return "Id : "+id+" is deleted";
	}
	
	@PostMapping("/post")
	public String postDetails(@RequestBody model t1)
	{
		i1.save(t1);
		return "Details are saved";
	}
	
	@PutMapping("/put/{id}")
	public model updateTravelDetails(@RequestBody model t)
	{
		System.out.println("Changes updated");
		return i1.save(t);
	}
}
