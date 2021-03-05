$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:false,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
});