
document.addEventListener('DOMContentLoaded', function(){
    const backdrop = document.getElementById('menu_backdrop');

    backdrop.addEventListener('click', function(){
            show_menu()
        });
     });


    function show_menu(){
    document.querySelector('.navigation').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('hide');
    document.querySelector('.close').classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function(){
    const slider = document.querySelector('.description.slider');
    const dots = document.querySelectorAll('.slider_dots .dot'); 
    const cards = document.querySelectorAll('.description.slider li');

    let currentIndex = 0;
    const slideTime = 6000;
    
    const centeringOffsetVW = 0.5; 

    function updateSlider(newIndex){
        
        const offsetVW = newIndex * -100;
        
        const finalTransformVW = offsetVW - centeringOffsetVW;
        
        slider.style.transform = `translateX(${finalTransformVW}vw)`; 

        
        dots.forEach(dot => dot.classList.remove('active'));
        if(dots[newIndex]){
            dots[newIndex].classList.add('active');
        }

        currentIndex = newIndex;
    }

    function autoSlide(){
        updateSlider(currentIndex); 
        
        setInterval(() => {
            const nextIndex = (currentIndex + 1) % cards.length;
            updateSlider(nextIndex);
        }, slideTime);
    }
    
    autoSlide();
});