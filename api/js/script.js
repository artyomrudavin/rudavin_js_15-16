$(function() {


  $('#pixabay-form').on('submit', function(e) {
    e.preventDefault();
    $('.result').empty();
    
    $.ajax({

      url: "https://pixabay.com/api/?key=3016079-fefc63f6a15de741383d3cc03&q="+$("#search").val()+"&per_page=25",
      dataType : "jsonp",

      success: function (data) {
        if (parseInt(data.totalHits) > 0)
          $.each(data.hits, function(i, hit){ 
            $('.result').append('<img src="' + hit.previewURL + '" alt="" class="result-img">');
          });
        else
          console.log('No hits');
      }
    });

  });

});