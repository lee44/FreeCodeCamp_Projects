$(document).ready(function(){
  
  $('#search').click(function(){
    var searchWord = $('#searchBox').val();
    var url = 'http://en.wikipedia.org/w/api.php?action=opensearch&search='+searchWord+ '&format=json&callback=?';
    
    $.ajax({
      type:'GET',
      url:url,
      asyn:false,
      dataType:'json',
      success: function(data){
        //console.log(url);
        $('#results').html('');
        for(var i = 0; i<data[1].length;i++)
        {
          $('#results').prepend('<li class=\'resultBox\'><a href=' +data[3][i]+'>'+data[1][i]+'</a><p>'+data[2][i]+'</p></li>');
        }
      },
      error: function(errorMessage){
        alert('Error');
      }   
    });  
  });
  $('#searchBox').keypress(function(e){
    if(e.which==13)
      $('#search').click();
  });
  
});