$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:false,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
});


/////////////////////

// $(document).ready(function(){
//     $(".navigation__item").click(function(){
//         $(input[type="checkbox"]).prop("checked", false);
//     });
//     // $(".uncheck").click(function(){
//     //     $("#myCheck").prop("checked", false);
//     // });
// });
