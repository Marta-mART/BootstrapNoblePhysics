//gdy strona jest załadowana
$(document).ready(function() {
    //ustaw interwał karuzeli na 2000 ms
    $('#mycarousel').carousel({interval: 2000 });
    //jeśli ktoś kliknie na guzik karuzeli - pausę
    $('#carouselButton').click(function() {
        //to jeśli ten guzik ma ustawioną klasę fa-pasue (pochodzącą z dodatku font-awesome)
        if($('#carouselButton').children('span').hasClass('fa-pause'))
        {
            //pausujemy karuzelę
            $('#mycarousel').carousel('pause');
            //usuwamy klasę pausę
            $('#carouselButton').children('span').removeClass('fa-pause');
            //nadajemy klasę play - zmienia się ikonka
            $('#carouselButton').children('span').addClass('fa-play');
        }
        //sytuacja analogicznie odwrotna
        else if ($('#carouselButton').children('span').hasClass('fa-play'))
        {                    
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
       
    });          
})    

//uruchomienie modalu logowania
$('#loginButton').on('click', function(event) {
    $("#loginModal").modal()
})

//uruchomienie modalu rezerwacji
$('#reserveButton').on('click', function(event) {
    $("#formModal").modal()
})

//Dla porównania czysty JavaScript
//Funkcja dzwonienia po naciśnięciu przycisku Zadzwoń w podstronie Kontakt (metoda onlick)
function Call() 
{
    //1 komunikat
     alert("Dzwonienie...");
    
     //2 komunikat po 3 s
     setTimeout(function(){ alert("Zajęte..."); }, 3000);
}