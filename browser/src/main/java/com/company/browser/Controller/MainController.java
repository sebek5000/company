package com.company.browser.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MainController {

    @RequestMapping(path={"/", ""}, method= RequestMethod.GET)
    public String mainWindow(Model model){
        return "index";
    }

    @RequestMapping(path={"/addEmployee"}, method= RequestMethod.GET)
    public String addEmployeeWindow(Model model){
        return "addEmployee";
    }

    @RequestMapping(path={"/addTeam"}, method= RequestMethod.GET)
    public String addTeamWindow(Model model){
        return "addTeam";
    }
}
