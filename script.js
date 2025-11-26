
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