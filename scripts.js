$(function(){
    $('#add').click(function(){
        let task = $('#new-task').val();
        if (task.length == ''){
            alert("Task name required");
        }else{
            $('.selected-item').append(`<li>${task}<i class="far remove fa-window-close fa-2x"></i></li>`)
            $('.remove').click(function(){
               $(this).closest('li').remove(); 
            });
            $("#new-task").val(''); //allows you to add new task name
        }
    });

    $('.clear').click(function(){
        $('li').remove()
    });
});