
        var docH = window.innerHeight;
        const business = document.querySelector('.business');
        const headMenu = document.querySelector('.menu');
        const fold = document.querySelector('.fold');
        var shut = document.querySelector('.shut');
        var headContent= document.querySelector('.headContent');
        var businessUl = document.querySelector('.business ul');
        business.addEventListener('mouseover',businessShow);
        business.addEventListener('mouseleave',businessShow);
        business.addEventListener('click',businessShow);
        function businessShow(e){
            if (e.type == 'mouseover'){
                businessUl.style.display = "block"
            }
            if (e.type == 'mouseleave'){
                businessUl.style.display = "none"
            }
            if (e.type == 'click'){
                businessUl.style.display = "none"
            }
        }
        fold.addEventListener('click',foldMenuShow);
        var isClick = true;
        function foldMenuShow(){
            if (isClick){
                shut.style.height = docH + 200 + 'px';
                shut.classList.remove("foldMenuHidden");
                shut.classList.add("foldMenuShow");
                isClick = false;
                setTimeout(() => {
                    isClick = true;
                }, 1000);
            }
        }
        shut.addEventListener('click',foldMenuHidden);
        shut.addEventListener('touchmove',foldMenuHidden);
        function foldMenuHidden(e){
            if (isClick){
                shut.classList.remove("foldMenuShow");
                shut.classList.add("foldMenuHidden");
                isClick = false;
                setTimeout(() => {
                    shut.style.height = 'auto';
                    isClick = true;
                }, 1000);
            }
            if (e.type == 'touchmove') {
                e.preventDefault();
            }
        }
        headContent.style.height = (docH-69.73) + 'px';

        var officialWeb = document.getElementById('official');
        var officialWebW = parseInt(getComputedStyle(officialWeb).width);
        
        console.log(officialWebW)