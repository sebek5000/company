package com.company.browser.Repository;

import com.company.browser.Entity.Employee;
import com.company.browser.Entity.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamRepository extends JpaRepository<Team, Integer> {

    @Query(value="SELECT * FROM company_project.team WHERE team_id IN (SELECT team_id FROM company_project.team_employee WHERE employee_id=:id);", nativeQuery = true)
    Iterable<Team> findTeamsByEmployee(@Param("id") String id);
}
