

 $(document).ready(
    function() {
        // GET REQUEST
        $("#getEmployeeByName").click(function(event) {
            event.preventDefault();
            ajaxGet();
        });

        // DO GET
        function ajaxGet() {

            var nameFromBrowser = $("#browser").val(); 
            $.ajax({
                type : "GET",
                url : "employee/name/"+ nameFromBrowser,
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
               
                        $table.append('</table>')
                    $('#tableWithResults').html($table);
                    $.each(buttonsIds, function(i, elem){
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

    function getTeam(id){
        var teams="";

        $.ajax({
            type : "GET",
            url : "team/employee/"+ id,
            success : function(result) {
                
                if (result) {
                    $.each(result,
                        function(i, team) {
                            teams +='<tr><td>' + team.teamId + ' ' + team.name +''+team.poid + ' '+ team.pmid + ' ' + team.scrumMasterId + ' ' + team.project  +'</td></tr>';
                        });
                        $('div#modalWindow').html(teams);
                        $('div#modalWindow').dialog('open');
                } else {
                    console.log("Fail: ", result);
                    
                }
            },
            error : function(e) {
                console.log("ERROR: ", e);
                
            }
        });}
