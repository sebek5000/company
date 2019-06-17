package com.company.browser.Entity;

import javax.persistence.*;


@Entity
public class Team {

    @Column(nullable=false)
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer teamId;

    @Column
    private String name;

    @Column(nullable=false)
    private String project;


    @Column(nullable=false)
    private Integer POId;

    @Column(nullable=false)
    private Integer PMId;

    @Column(nullable=false)
    private Integer scrumMasterId;

    public Team(String id){
        setTeamId(Integer.parseInt(id));
    }

    public Team(){}

    public Integer getTeamId() {
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

    public Integer getPOId() {
        return POId;
    }

    public void setPOId(int POId) {
        this.POId = POId;
    }

    public Integer getPMId() {
        return PMId;
    }

    public void setPMId(int PMId) {
        this.PMId = PMId;
    }

    public Integer getScrumMasterId() {
        return scrumMasterId;
    }

    public void setScrumMasterId(int scrumMasterId) {
        this.scrumMasterId = scrumMasterId;
    }

}
