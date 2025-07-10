# Simulador de Mario Kart no Terminal 
## Descrição
O código trata-se de um projeto simples com o propósito puramente de aprendizado, criado como uma das atividades do Bootcamp da plataforma de aprendizagem DIO (desenvolvimento mobile). O módulo do desafio possui o objetivo de apresentar NodeJS e testar os níveis de conhecimentos de lógica de programação do estudante.
A proposta foi criar um jogo de Mario Kart com resultados apresentados no terminal, de acordo com as regras a seguir: 
</br>
</br>
🕹️ Regras & mecânicas:
</br>
Jogadores:

O Computador deve receber dois personagens para disputar a corrida em um objeto cada
Pistas:

Os personagens irão correr em uma pista aleatória de 5 rodadas
A cada rodada, será sorteado um bloco da pista que pode ser uma reta, curva ou confronto
Caso o bloco da pista seja uma RETA, o jogador deve jogar um dado de 6 lados e somar o atributo VELOCIDADE, quem vencer ganha um ponto
Caso o bloco da pista seja uma CURVA, o jogador deve jogar um dado de 6 lados e somar o atributo MANOBRABILIDADE, quem vencer ganha um ponto
Caso o bloco da pista seja um CONFRONTO, o jogador deve jogar um dado de 6 lados e somar o atributo PODER, quem perder, perde um ponto
Nenhum jogador pode ter pontuação negativa (valores abaixo de 0)
Condição de vitória:

Ao final, vence quem acumulou mais pontos
</br>
## Funcionamento
O meu objetivo foi tentar pensar em uma solução somente com os conhecimentos prévios que eu possuia em Javascript. Resolvi apresentar a solução utilizando classes para Player e Pista, com o objetivo de organizar melhor as funcionalidades para cada papel.
</br>
### Atributos das classes: 
Player   | Pista
------- | ------
nome | player1
velocidade | player2
manobrabilidade | 
poder| 
pontos|
</br>
O player possui a responsabilidade de jogar o dado e obter um número aleatório de 1 a 6, enquanto na pista acontece a definição do bloco e as rodadas (com distribuição de pontos de rodada para cada jogador). 
</br>
Os pontos finais são armazenados na própria classe Player, como mostrado na tabela acima. 
</br>
O método 'jogar' é responsável por rodar a partida e por chamar o método que verifica o vencedor. 
Caso o jogador deseje mudar de personagem ou seus atributos, deve mudar na instância da classe player.
</br>
O código foi desenvolvido na linguagem de programação Javascript.



