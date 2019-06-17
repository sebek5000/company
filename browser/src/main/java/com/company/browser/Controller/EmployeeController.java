package com.company.browser.Controller;

import com.company.browser.BadSalaryValueException;
import com.company.browser.Entity.Employee;
import com.company.browser.Entity.Position;
import com.company.browser.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(path="/employee")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    @PostMapping(path="/add", consumes = "application/json", produces = "application/json")
    public Employee addNewEmployee (@RequestBody Employee employee) {
        if(employee.getSalary()<0)
            throw new BadSalaryValueException();
        employeeRepository.save(employee);
        return employee;
    }

    @GetMapping(path="/name/{name}")
    public @ResponseBody Iterable<Employee> getEmployeeByName(@PathVariable String name) {
        return employeeRepository.findEmployeeByName(name);
    }

    @GetMapping(path="/surname/{surname}")
    public @ResponseBody Iterable<Employee> getEmployeeBySurname(@PathVariable String surname) {
        return employeeRepository.findEmployeeBySurname(surname);
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

    @GetMapping(path="/positions")
    public Position[] getPosition(){
        return Position.values();
    }
    @GetMapping(path="/all")
    public @ResponseBody Iterable<Employee> getAllEmployees() {
        // This returns a JSON or XML with the users
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
