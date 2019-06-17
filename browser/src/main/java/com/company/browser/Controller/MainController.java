package com.company.browser.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class MainController {

    @RequestMapping(path={"/", ""}, method= RequestMethod.GET)
    public String mainWindow(Model model){
        return "index";
    }
}
