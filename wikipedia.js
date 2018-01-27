$(function () {
    // click event function
      $(".icon").click(function () {
          var input = $("#search").val();
          var searchApi = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + input ;
        console.log(searchApi);
          $.ajax(searchApi, {
        dataType: "json",
        data: {
          origin: "*"
        },
        type: "GET",
        success: function(data) {
          console.log(data);
                //clearing the output for every entery
                  $(".output").html(" ");
                //appending the search outputs to a ul element
                  for (var i = 0; i <= data[1].length; i++) {
                      $('.output').prepend("<li><a href = " + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
                  }
                  $(".output").find("li:first").remove();
              }
          });
      });
    // for enter keypess, the function is called...
      $("#search").keyup(function(e){
          if(e.keyCode === 13){
              $(".icon").click();
          }
      });
  });
  