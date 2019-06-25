$(document).ready(
    function() {
        // GET REQUEST
        $("#getEmployee").click(function(event) {
            event.preventDefault();
            ajaxGet();
        });

        // DO GET
        function ajaxGet() {

            var textFromBrowser = $("#browser").val();
            $.ajax({
                type : "GET",
                url : "employee/text/"+ textFromBrowser,
                success : function(result) {
                    
                    if (result) {
                        var $table = $('<table class="table">');
                        $table.append('<thead><tr>')
                        $table.append('<th scope="col">id</th><th scope="col">Name</th>')
                        $table.append('<th scope="col">Surname</th><th scope="col">Boss Id</th>')
                        $table.append('<th scope="col">Salary</th><th scope="col">Position</th>')
                        $table.append('<th scope="col">Competences</th><th scope="col">Teams</th></tr></thead>')
                        $table.append('<tbody>')
                        var buttonsIds = [];
                        $.each(result,
                            function(i, employee) {
                                var id = employee.employeeId;
                                var insideTableString ='<tr><th scope="row">' + employee.employeeId + '</th>'
                                insideTableString+='<td>' + employee.name + '</td>' +'<td>' + employee.surname + '</td>'
                                insideTableString+='<td>' + employee.bossId + '</td>' + '<td>' + employee.salary + '</td>'
                                insideTableString+='<td>' + employee.position + '</td>' + '<td>' + competencesFromPosition[employee.position] + '</td>'
                                insideTableString+='<td><button id="'+ id + '">Teams</button></td></tr>'
                                $table.append( insideTableString );
                               buttonsIds.push(id);
                        });
                        $table.append('</tbody>')    
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
        $.ajax({
            type : "GET",
            url : "team/employee/"+ id,
            success : function(result) {
                if (result) {
                    var $teams=$('<table class="table">');
                    $teams.append('<thead><tr>');
                    $teams.append('<th scope="col">id</th><th scope="col">Name</th>');
                    $teams.append('<th scope="col">PO id</th><th scope="col">PM id</th>');
                    $teams.append('<th scope="col">Scrum Master id</th><th scope="col">Project</th></tr></thead>)');
                    $teams.append('<tbody>');
                    $.each(result,
                        function(i, team) {
                            var insideTeamsString = '<tr><th scope="row">' + team.teamId + '</th>'
                            insideTeamsString += '<td>' + team.name + '</td>' +'<td>' + team.poid + '</td>'
                            insideTeamsString += '<td>' + team.pmid + '</td>' +'<td>' + team.scrumMasterId + '</td>'
                            insideTeamsString += '<td>' + team.project  +'</td></tr>';
                            $teams.append(insideTeamsString);
                        });
                    $teams.append('</tbody></table>');    
                    $('div#modalWindow').html($teams);
                    $('div#modalWindow').dialog('open');
                } else {
                    console.log("Fail: ", result);
                    
                }
            },
            error : function(e) {
                console.log("ERROR: ", e);
                
            }
        });}
