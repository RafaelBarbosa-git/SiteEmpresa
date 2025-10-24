document.addEventListener("DOMContentLoaded", function(){
    function carregarMenu() {
                fetch('menu.html')
                    .then(response => response.text())
                    .then(data => {
                        document.getElementById('menu').innerHTML = data;
                    })
                    .catch(error => console.error('Erro ao carregar o menu', error));
            }

    carregarMenu();

        function adicionar_jogo_recomendado() {
            // Seleciona o formulario pelo id
            const form = document.getElementById('formulario');

            //Seleciona o elemento <input> pelo Id
            const inputNome = document.getElementById('nome-jogo');
            const inputUrl = document.getElementById('trailer');            

            //Seleciona o espaço a ser manipulado
            const JogosRecomendados = document.getElementById('lista-jogos-recomendados');

            //Adiciona um ouvinte de evento que espera o formulario ser enviado (clicar em enviar)
            form.addEventListener('submit', function(evento) {
                evento.preventDefault();

                const valorPlataforma = form.elements['plataforma'].value;

                //Pega os valores de cada input
                const nomeJogo = inputNome.value;
                const trailerJogo = inputUrl.value;

                //Manipular o html para mostrar os dados
                //Cria os elementos HTML
                const novoItem = document.createElement('li') //<li></li>
                const novoLink = document.createElement('a') //<a></a>

                //Configura os elementos criados
                novoLink.href = trailerJogo; // configura o link - o href
                novoLink.textContent = "Trailer"; // Configura o texto que vai dentro da tag <a></a>
                novoLink.target = '_blank'; // Configura o target do link para abrir em uma nova aba

                //Montar a estrutura
                novoItem.textContent = '(' + valorPlataforma + ')' + ' ' + nomeJogo + ':   ';
                novoItem.appendChild(novoLink);
                
                //Adiciona o novo item a lista
                JogosRecomendados.appendChild(novoItem);

                //Limpa os campos para o proximo envio
                inputNome.value = '';
                inputUrl.value = '';

            })


        }
    
        adicionar_jogo_recomendado()

    });


