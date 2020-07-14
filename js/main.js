;(function($){
         
    //DOM initializer when the Website Loads
    document.addEventListener('DOMContentLoaded', init)
    "use strict"
    var nav_offset_top = $('.header_area').height()+50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();

    //* Typing effect

    const Typing = function(txtElement, words, wait=3000){

        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.type();
        this.wait = parseInt(wait, 10);
        this.isDeleting = false;
    }
    Typing.prototype.type = function() {
        const current = this.wordIndex;
         
        const fullTxt = this.words[current]
    
        if(this.isDeleting){
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        }
        else{
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        //Insert new span tag into the tagline element for the Cursor
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    
        //Set typing speed for the Timeout below
        let typingSpeed = 150;
    
        if(this.isDeleting){
            typingSpeed = typingSpeed /2;
        }
    
        //When the one of the Texts in the words array has been completely typed
        if(!this.isDeleting && this.txt === fullTxt){
            typingSpeed = this.wait;
            this.isDeleting = true;
            
        }
        else if(this.isDeleting && this.txt === ''){
            this.isDeleting = false;
    
            this.wordIndex++;
            typingSpeed = 200;
        }
       
    if((this.wordIndex==4) && (this.txt === '')){
        this.wordIndex = 0;
    }
        setTimeout(() => this.type(), typingSpeed);
    }
    
   

    function init(){
        const txtElement = document.querySelector('#banner-header');
        const words = JSON.parse(txtElement.getAttribute('data-words'));
        const wait = txtElement.getAttribute('data-wait');
        new Typing(txtElement, words, wait);
    }
    
    
    // gallery
    var $projects = $('.projects');

    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('ul.filters > li').on('click', function(e){

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');

        $projects.isotope({filter: filter});

    });

    $('.card').mouseenter(function(){

        $(this).find('.card-overlay').css({'top': '-100%'});
        $(this).find('.card-hover').css({'top':'0'});

    }).mouseleave(function(){

        $(this).find('.card-overlay').css({'top': '0'});
        $(this).find('.card-hover').css({'top':'100%'});

    });

    function testimonialSlider(){
        if ( $('.testimonial_slider').length ){
            $('.testimonial_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 2,
                nav:false,
                autoplay: true,
                dots: true,
                smartSpeed: 1500,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 2,
                    },
                }
            })
        }
    }
    testimonialSlider();
    

	
	

})(jQuery)