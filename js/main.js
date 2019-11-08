{
    $(document).ready(function () {
        $('.slider').bxSlider({
            auto: false,
            controls: true,
            pager: false,
            nextText: '<i class="fa fa-arrow-right"></i>',
            prevText: '<i class="fa fa-arrow-left"></i>'
        });
    });
}

{
    //Showing logo descripting on hover
    let partnerBlock = document.querySelectorAll('.partner-list a');
    partnerBlock.forEach((item) => {
        item.addEventListener('mouseover', (event) => {
            let img = item.querySelector('img');
            let p = item.querySelector('p');

            p.style.opacity = '1';
            img.style.display = 'none';
        });

        item.addEventListener('mouseleave', (event) => {
            let img = item.querySelector('img');
            let p = item.querySelector('p');

            p.style.opacity = '0';
            img.style.display = 'block';
        });
    });

    document.querySelector('#call-me-btn').addEventListener('click', togglePopUp);

    document.querySelector('.bg-popup').addEventListener('click', togglePopUp);
    document.querySelector('.submit-button').addEventListener('click', togglePopUp);


    function togglePopUp() {
        document.querySelector('.popup-fast').classList.toggle('active');
        document.querySelector('.bg-popup').classList.toggle('active');
    }
}

{
    let commentHeaders = document.querySelectorAll('.comment-block-list li');
    commentHeaders.forEach(item => {
        item.addEventListener('click', function () {
            let activeItem = document.querySelector('.comment-block-list li.active');

            for (elem of commentHeaders) {
                if (elem == item) {
                    elem.classList.add('active');
                } else {
                    elem.classList.remove('active');
                }
            }

            let step = activeItem.getAttribute('data-id') - item.getAttribute('data-id');           
            
            if (step < 0) {
                for (let i = 0; i < Math.abs(step); i++) {
                    $('.comment-lists .fa-arrow-right').click();
                }
            } else {                
                for (let i = 0; i < Math.abs(step); i++) {                   
                    $('.comment-lists .fa-arrow-left').click();                    
                }
            }
        });
    })



    //Click on arrow - making active class to li
    $(document).ready(function () {
        document.querySelector('.comment-lists .fa-arrow-right').addEventListener('click', function () {
            let activeItem = document.querySelector('.comment-block-list li.active');
            activeItem.classList.remove('active');

            if (activeItem.nextElementSibling == null)
                activeItem.parentNode.children[0].classList.add('active');
            else
                activeItem.nextElementSibling.classList.add('active');
        });

        document.querySelector('.comment-lists .fa-arrow-left').addEventListener('click', function () {
            let activeItem = document.querySelector('.comment-block-list li.active');
            activeItem.classList.remove('active');

            if (activeItem.previousElementSibling == null)
                activeItem.parentNode.children[5].classList.add('active');
            else
                activeItem.previousElementSibling.classList.add('active');
        });

    });

}