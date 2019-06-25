package com.company.browser.Repository;

import com.company.browser.Entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    @Query(value="SELECT * FROM company_project.employee WHERE name=:text OR surname=:text ;", nativeQuery = true)
    Iterable<Employee> findEmployee(@Param("text") String text);

    @Query(value="SELECT * FROM company_project.employee WHERE position=:position ;", nativeQuery = true)
    Iterable<Employee> findEmployeeByPosition(@Param("position") String position);
}
