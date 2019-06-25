package com.company.browser.Controller;

import com.company.browser.BadSalaryValueException;
import com.company.browser.Entity.Employee;
import com.company.browser.Entity.Position;
import com.company.browser.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.thymeleaf.context.Context;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(path="/employee")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    @PostMapping(path="/add", consumes = "application/json", produces = "application/json")
    public Employee addNewEmployee (@Valid @RequestBody  @ModelAttribute("employee") Employee employee,
                                    HttpServletRequest request, BindingResult bindingResult, Model model) {
       model.addAttribute("employee", employee);

        Context templateContext = new Context();
        templateContext.setVariable("employee", employee);
        if(employee.getSalary()<0)
            throw new BadSalaryValueException();
        employeeRepository.save(employee);
        return employee;
    }

    @GetMapping(path="/position/{position}")
    public @ResponseBody Iterable<Employee> getEmployeeByPosition(@PathVariable String position) {
        int numberPosition =-1;
        for(Position elem : Position.values()){
            if(elem.name().equals(position))
                 numberPosition = elem.ordinal();
        }
        return employeeRepository.findEmployeeByPosition(Integer.toString(numberPosition));
    }


        @GetMapping(path="/text/{text}")
    public @ResponseBody Iterable<Employee> getEmployee(@PathVariable String text) {
        int numberPosition;
        for(Position elem : Position.values()){
            if(elem.name().equals(text)) {
                numberPosition = elem.ordinal();
                return employeeRepository.findEmployeeByPosition(Integer.toString(numberPosition));
            }
        }
        return employeeRepository.findEmployee(text);
    }

    @GetMapping(path="/positions")
    public Position[] getPosition(){
        return Position.values();
    }
    @GetMapping(path="/all")
    public @ResponseBody Iterable<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @GetMapping(path="competences")
    public @ResponseBody
    Map<String, String> getCompetences(){
        Map<String, String> map = new HashMap<>();
        for(Position elem : Position.values()){
            map.put(elem.name(), elem.competence());
        }
        return map;
    }
}
