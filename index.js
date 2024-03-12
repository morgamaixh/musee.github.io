
        const toggleBtn = document.getElementById('toggleButton');
        const navLinks = document.getElementById('navLinks');
        const btn = document.getElementById("tgbtn");
        const x = document.getElementById("link");


        toggleButton.style.marginLeft = "90%"



        toggleBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

            btn.addEventListener('click', () => {
                x.classList.toggle('active');
            });

            function ridirect(){
                window.location.href = "https://github.com/morgamaixh.github.io/miniprojects.github.io/";
            }
  
