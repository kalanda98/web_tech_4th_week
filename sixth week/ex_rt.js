$(document).ready(function(){
    $("#press").click(function(){
    const key = "5f38d96db10a194c9b652ba10ecc98dd"
    $.ajax({
      url: 'http://data.fixer.io/api/latest?access_key=' + key,
      dataType: 'jsonp',
      success: function(json) {
        
        var gbpRate = json.rates.GBP;
        var usdRate = json.rates.USD;

        if($("select.kupiura").val()==="EUR" && $("select.kupiura2").val()==="GBP")
        {
            var converted = $("#giros").val()*gbpRate;
        }

        if($("select.kupiura").val()==="EUR" && $("select.kupiura2").val()==="USD")
        {
            var converted = $("#giros").val()*usdRate;
        }

        if($("select.kupiura2").val()==="USD" && $("select.kupiura").val()==="EUR")
        {
            var converted = $("#giros").val()/usdRate;
        }

        if($("select.kupiura2").val()==="GBP" && $("select.kupiura").val()==="EUR")
        {
            var converted = $("#giros").val()/gbpRate;
        }

        $("#converted").html(converted);

        console.log(' ' + converted);
        console.log(json);
      },
      fail: function(xhr, statusText, body) {
        console.log(body);
      }
    });
  });
}); 


  /*

  $(document).ready(function(){
    $("#submit").click(function(){
        const key ="2e417dea562dc5ecca82b02ab8c20a89"
        $.ajax({
            url: 'http://data.fixer.io/api/latest?access_key='+key,
            dataType: 'jsonp',
            success: function (json){
                var usdRate = json.rates.USD;
                var gbpRate = json.rates.GBP;
                
                if($("select.currency1").val()==="EUR" && $("select.currency2").val()==="USD"){
                    var converted = $("#input").val()*usdRate;
                }
                if($("select.currency1").val()==="EUR" && $("select.currency2").val()==="GBP"){
                    var converted = $("#input").val()*gbpRate;
                }
                if($("select.currency1").val()==="USD" && $("select.currency2").val()==="EUR"){
                    var converted = $("#input").val()/usdRate;
                }
                if($("select.currency1").val()==="GBP" && $("select.currency2").val()==="EUR"){
                    var converted = $("#input").val()/gbpRate;
                }
                
                $("output").html(converted);
                
                console.log("converted money "+converted);
                console.log(json);
            },
            fail: function(xhr, statusText, body){
                console.log(body);
            }
        });
    });
    
});

  */