var competencesFromPosition;


$( document ).ready(function() {
    console.log( "Start" );

    $.ajax({
        type : "GET",
        url : "employee/position/PM",
        success : function(result) {
            
            if (result) {
                              
                $.each(result,
                    function(i, employee) {
                        $('#bossSelector')
                        .append( '<option value=' + employee.employeeId + '> ' +employee.name + ' ' + employee.surname + '</option>' );
                        $('#pmSelector')
                        .append( '<option value=' + employee.employeeId + '> ' +employee.name + ' ' + employee.surname + '</option>' );
                        
                    });

            } else {
                console.log("Fail: ", result);
            }
        },
        error : function(e) {
            console.log("ERROR: ", e);
        }
    });
    $.ajax({
        type : "GET",
        url : "employee/positions",
        success : function(result) {
            
            if (result) {
                               
                $.each(result,
                    function(i, position) {
                       
                        $('#positionSelector')
                        .append( '<option value=' + i + '> '  + position + '</option>' );
                    });

            } else {
                console.log("Fail: ", result);
            }
        },
        error : function(e) {
            console.log("ERROR: ", e);
        }
    });


    $.ajax({
        type : "GET",
        url : "team/all",
        success : function(result) {
            
            if (result) {
                          
                $.each(result,
                    function(i, team) {
                       
                        $('#teamSelector')
                        .append( '<option value=' + team.teamId + '> '  + team.name + '</option>' );
                        
                    });

            } else {
                console.log("Fail: ", result);
            }
        },
        error : function(e) {
            console.log("ERROR: ", e);
        }
    });

    $.ajax({
        type : "GET",
        url : "employee/position/PO",
        success : function(result) {
            
            if (result) {
                              
                $.each(result,
                    function(i, employee) {
                        $('#poSelector')
                        .append( '<option value=' + employee.employeeId + '> ' +employee.name + ' ' + employee.surname + '</option>' );
                        
                    });

            } else {
                console.log("Fail: ", result);
            }
        },
        error : function(e) {
            console.log("ERROR: ", e);
        }
    });

    $.ajax({
        type : "GET",
        url : "employee/position/SCRUMMASTER",
        success : function(result) {
            
            if (result) {
                              
                $.each(result,
                    function(i, employee) {
                        $('#scrumMasterSelector')
                        .append( '<option value=' + employee.employeeId + '> ' +employee.name + ' ' + employee.surname + '</option>' );
                        
                    });

            } else {
                console.log("Fail: ", result);
            }
        },
        error : function(e) {
            console.log("ERROR: ", e);
        }
    });

    $.ajax({
        type : "GET",
        url : "employee/competences",
        success : function(result) {
            
            if (result) {
                          
                competencesFromPosition = result;

            } else {
                console.log("Fail: ", result);
            }
        },
        error : function(e) {
            console.log("ERROR: ", e);
        }
    });

    $('div#modalWindow').dialog({ autoOpen: false });
  

});

