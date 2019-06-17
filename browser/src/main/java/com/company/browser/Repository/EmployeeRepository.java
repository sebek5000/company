package com.company.browser.Repository;

import com.company.browser.Entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    @Query(value="SELECT * FROM company_project.employee WHERE name=:name ;", nativeQuery = true)
    Iterable<Employee> findEmployeeByName(@Param("name") String name);

    @Query(value="SELECT * FROM company_project.employee WHERE surname=:surname ;", nativeQuery = true)
    Iterable<Employee> findEmployeeBySurname(@Param("surname") String surname);

    @Query(value="SELECT * FROM company_project.employee WHERE position=:position ;", nativeQuery = true)
    Iterable<Employee> findEmployeeByPosition(@Param("position") String position);
}
