$('.owl-carousel').owlCarousel({
    loop:false,
    margin:5,
    nav:false,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})

const nav=document.getElementsByTagName("nav")[0];
const topoNav=nav.offsetTop;


window.onscroll=FixarMenuNoTopo();
    FixarMenuNoTopo()

function FixarMenuNoTopo(){
    if(window.pageYOffset >= topoNav){
        nav.classList.add("FixoNoTopo");
    }else{
        nav.classList.remove("fixoNoTopo");
    }
}

