

 $(document).ready(
    function() {

        $("#addTeam").click(function(event) {
            event.preventDefault();
          
            ajaxPost();
            
        });

        function ajaxPost() {

            var name = $("#teamName").val(); 
            var project = $("#teamProject").val();
            var po = $("#poSelector").val();
            var pm = $("#pmSelector").val();
            var scrumMaster = $("#scrumMasterSelector").val();

            var team = {
                name: name,
                project: project,
                poid: po,
                pmid: pm,
                scrumMasterId: scrumMaster,
            }
   

            $.ajax({
                type : "POST",
                contentType : "application/json",
                url : "team/add",
                data : JSON.stringify(team),
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