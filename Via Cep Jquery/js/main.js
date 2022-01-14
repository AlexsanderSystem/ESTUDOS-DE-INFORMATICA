function consultaCep(){
    $.ajax({
        url: "https://viacep.com.br/ws/01001000/json/",
        type: "GET",
        sucess: function(response){
            console.log(response);
        }
    })
}