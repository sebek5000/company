package com.company.browser.Controller;

import com.company.browser.Entity.Employee;
import com.company.browser.Entity.Team;
import com.company.browser.Repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/team")
public class TeamController {
    @Autowired
    private TeamRepository teamRepository;

    @GetMapping(path="/all")
    public @ResponseBody
    Iterable<Team> getAllTeams() {
        // This returns a JSON or XML with the users
        return teamRepository.findAll();
    }

    @PostMapping(path="/add", consumes = "application/json", produces = "application/json")
    public Team addNewTeam (@RequestBody Team team) {

        teamRepository.save(team);
        return team;
    }

    @GetMapping(path="/employee/{id}")
    public @ResponseBody Iterable<Team> getTeamsByEmployee(@PathVariable String id) {
        return teamRepository.findTeamsByEmployee(id);
    }
}
