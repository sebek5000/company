

 $(document).ready(
    function() {


        $("#getEmployeeBySurname").click(function(event) {
            event.preventDefault();
            ajaxGet();
        });


        function ajaxGet() {
            var nameFromBrowser = $("#browser").val(); 

            $.ajax({
                type : "GET",
                url : "employee/surname/"+ nameFromBrowser,
                success : function(result) {
                    
                    if (result) {
                        var $table = $('<table>');
                        var buttonsIds = [];
                        $.each(result,
                            function(i, employee) {
                                var id = employee.employeeId;
                                $table.append( '<tr><td>' + employee.employeeId + ' '+employee.name + ' ' + employee.surname + ' '+ employee.bossId + ' ' + employee.salary + ' ' + employee.position+' '+ competencesFromPosition[employee.position]  +'</td></tr>' );
                                $table.append('<button id="'+ id + '">Click</button>');
                                buttonsIds.push(id);
                            });
            
                        $table.append('</table>');
                        $('#tableWithResults').html($table);
                        $.each(buttonsIds, function(i, elem){
                            console.log(elem);
                            $('#'+elem).dblclick(function(){
                                getTeam(elem);
                             });
                        });
                   
                    } else {
                        $("#getResultDiv").html("<strong>Error</strong>");
                        console.log("Fail: ", result);
                    }
                },
                error : function(e) {
                    $("#getResultDiv").html("<strong>Error</strong>");
                    console.log("ERROR: ", e);
                }
            });
        }
    });
