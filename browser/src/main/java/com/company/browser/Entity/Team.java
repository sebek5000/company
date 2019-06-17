package com.company.browser.Entity;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


@Entity
public class Team {

    @Column
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int teamId;

    @Column
    private String name;

    public int getTeamId() {
        return teamId;
    }

    public void setTeamId(int teamId) {
        this.teamId = teamId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProject() {
        return project;
    }

    public void setProject(String project) {
        this.project = project;
    }

    public int getPOId() {
        return POId;
    }

    public void setPOId(int POId) {
        this.POId = POId;
    }

    public int getPMId() {
        return PMId;
    }

    public void setPMId(int PMId) {
        this.PMId = PMId;
    }

    public int getScrumMasterId() {
        return scrumMasterId;
    }

    public void setScrumMasterId(int scrumMasterId) {
        this.scrumMasterId = scrumMasterId;
    }


    @Column
    private String project;

    public Team() {
    }

    public Team(String id){
        setTeamId(Integer.parseInt(id));
    }

    @Column
    private int POId;

    @Column
    private int PMId;

    @Column
    private int scrumMasterId;

}
