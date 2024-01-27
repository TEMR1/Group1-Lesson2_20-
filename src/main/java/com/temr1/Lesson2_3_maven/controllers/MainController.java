package com.temr1.Lesson2_3_maven.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/mySite")
    public String mySite() {
        return "mySite";
    }
}