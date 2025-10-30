document.addEventListener("DOMContentLoaded", function(){
    function carregarMenu() {
                fetch('../menu.html')
                    .then(response => response.text())
                    .then(data => {
                        document.getElementById('menu').innerHTML = data;
                    })
                    .catch(error => console.error('Erro ao carregar o menu', error));
            }

    carregarMenu();

    });


