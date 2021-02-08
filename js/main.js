var slides = document.getElementsByName ('slide');
var currentSlide = 0;
//var slideInterval = setInterval(nextSlide,6000);

function nextSlide() {
    slides[currentSlide].className = 'banner';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'active';
}
var prevBtn = document.getElementById('prev');
var nextBtn = document.getElementById('next');

nextBtn.onclick = function(){
    if(nextBtn.className == 'next available'){
        slides[currentSlide].className = 'banner'
        currentSlide = (currentSlide+1)%slides.length;
        slides[currentSlide].className = 'active';
        if(currentSlide == slides.length - 1){
            nextBtn.className = 'next';
        }else{
            nextBtn.className = 'next available';
        }
        if(currentSlide > 0){
            prevBtn.className = 'prev available';
        }else{
            prevBtn.className = 'prev';
        }
    }    
}

prevBtn.onclick = function(){   
    if(prevBtn.className == "prev available"){         
        slides[currentSlide].className = 'banner'
        currentSlide = (currentSlide-1)%slides.length;
        slides[currentSlide].className = 'active';
        if(currentSlide <= 0){
            prevBtn.className = 'prev';
        }
        if(currentSlide == slides.length - 1){
            nextBtn.className = 'next';
        }else{
            nextBtn.className = 'next available';
        }
            
    }
}
