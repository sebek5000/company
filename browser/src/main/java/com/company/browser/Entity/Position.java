package com.company.browser.Entity;

public enum Position {
    PO{
        public String competence(){
            return "Competences of PO.";
        }
    },
    PM{
        public String competence(){
            return "Competences of PM.";
        }
    },
    SCRUMMASTER{

            public String competence(){
            return "Competences of Scrum Master.";
        }
    },
    DEVOPS{

        public String competence(){
            return "Competences of DevOps.";
        }
    },
    DEVELOPER{
        public String competence(){
            return "Competences of Developer.";
        }
    },
    TESTER{
        public String competence(){
            return "Competences of Tester.";
        }
    },
    ANALYST{
        public String competence(){
            return "Competences of Analyst.";
        }
    };

    public abstract String competence();
}
