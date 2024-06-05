const hamburger = document.querySelector(".hamburguer")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


$(function(){

    function autualizar(){
        let prodPrice =  parseFloat($(".slick-center").data("price")).toLocaleString("pt-BR", {style: "currency", currency:"BRL", minimumFractionDigits: 2});
        
        $("#prod-name").text( $(".slick-center").data("name") ); 
        $("#prod-price").text( prodPrice);
    }

    $(".produtos").on('init', function(){
        
        autualizar();
     })

    $(".produtos").slick({
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 1,
        centerMode: true,
        nextArrow:$("#arrow-next"),
        prevArrow:$("#arrow-prev"),
        responsive: [
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                
              }
            }
           
            
          ]
    });

    $(".produtos").on('afterChange', function(){
        
       autualizar();
    })
})