package com.rays.ctl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.ORSResponseTest;

@RestController
@RequestMapping( value = "Test")
public class Test {

	@PostMapping
	public ORSResponseTest submit() {
     
		ORSResponseTest res = new ORSResponseTest();
		res.setMessage("Hello Rays");
		res.setData("Data om demond");
		
		
		Map m1= new HashMap();
		m1.put("FirstName", "firstName is required");
		
		Map m= new HashMap();
		m.put("Inputerror", m1);
		 
		
		res.setResult(m);
		return res;
	}

	@GetMapping
	public String display() {

		return "Hello Rays Display";
	}

}
