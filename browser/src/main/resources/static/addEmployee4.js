

 $(document).ready(
    function() {

        $("#addEmployee").click(function(event) {
            event.preventDefault();
            ajaxPost();
        });

        function ajaxPost() {

            var name = $("#employeeName").val(); 
            var surname = $("#employeeSurname").val();
            var salary = $("#employeeSalary").val();
            var boss = $("#bossSelector").val();
            var position = $("#positionSelector").val();
            var selectedTeams = $("#teamSelector option:selected");
            var teams =[];

            selectedTeams.each(function(){
                teams.push($(this).val());
            });
            console.log("Salary: " + salary);
            if(salary===""){
                throw error("The salary can't be blank.");
            }
            if(boss==="-1"){
                var employee = {
                    name: name,
                    surname: surname,
                    salary: salary,
                    position: position,
                    teams: teams
                }
            } else {
            var employee = {
                name: name,
                surname: surname,
                salary: salary,
                bossId: boss,
                position: position,
                teams: teams
            }
            }

            $.ajax({
                type : "POST",
                contentType : "application/json",
                url : "employee/add",
                data : JSON.stringify(employee),
					dataType : 'json',
                success : function(result) {
                    
                    if (result) {
                        window.location = '/';
                    } else {

                        console.log("Fail: ", result);
                    }
                },
                error : function(e) {

                    console.log("ERROR: ", e);
                }
            });
        }
    })