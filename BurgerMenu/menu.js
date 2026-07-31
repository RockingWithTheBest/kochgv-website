const burgerMenu = document.getElementById("burgerMenu")
            const mobileNav = document.getElementById("mobileNav")
            const body = document.body;


            //toggle menu on click
            burgerMenu.addEventListener('click', function(e){
                e.stopPropagation()
                this.classList.toggle('active')
                mobileNav.classList.toggle('active')
                body.classList.toggle('no-scroll')
            })

            //close menu when clicked 'a'
            const mobileLinks = document.querySelectorAll('a')
            mobileLinks.forEach(link=>{
                link.addEventListener('click', ()=>{
                    burgerMenu.classList.remove('active')
                    mobileNav.classList.remove('active')
                    body.classList.remove('no-scroll')
                })
            })

            mobileNav.addEventListener('click', function(e){
                e.stopPropagation()
                this.classList.remove('active')
                burgerMenu.classList.remove('active')
                body.classList.remove('no-scroll')
            })