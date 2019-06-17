

 $(document).ready(
    function() {

        // GET REQUEST
        $("#getEmployeeByPosition").click(function(event) {
            event.preventDefault();
            ajaxGet();
        });

        // DO GET
        function ajaxGet() {

            var nameFromBrowser = $("#browser").val(); 

            $.ajax({
                type : "GET",
                url : "employee/position/"+ nameFromBrowser,
                success : function(result) {
                    
                    if (result) {
                        var $table = $('<table>');
                      
                        $.each(result,
                            function(i, employee) {
                                $table.append( '<tr><td>' + employee.employeeId + ' ' + employee.surname + '</td></tr>' );
                                
                            });


                        //console.log("Success: ", result);                 
                        $table.append('</table>')
                    $('#tableWithResults').html($table);
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
    })