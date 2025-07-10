//criando regras para player
class Player{
   constructor(nome,velocidade,manobrabilidade,poder){
        this.nome = nome;
        this.velocidade = velocidade;
        this.manobrabilidade = manobrabilidade;
        this.poder = poder;
        this.pontos = 0;
    }

    async rollDice(){
        return Math.floor(Math.random() * (6 - 1 + 1) + 1);
    }
}

//definindo regras da pista/partida
class Pista{
    constructor(p1,p2){
        this.player1 =  p1;
        this.player2 = p2
    }

    async sortearBloco(){
        let number = Math.floor(Math.random() * (3 - 1 + 1) + 1);
        switch(number){
            case 1:
                this.bloco = "RETA";
                break;
            case 2: 
                this.bloco = "CURVA";
                break;
            case 3:
                this.bloco = "CONFRONTO"
        }
    }

    novaRodada(){
        this.sortearBloco();
        let pontosPlayer1 = 0;
        let pontosPlayer2 = 0;

        switch(this.bloco){
            case "RETA":
                pontosPlayer1 = player1.rollDice() + player1.velocidade; 
                pontosPlayer2 = player2.rollDice() + player2.velocidade;
            break;
            case "CURVA": 
                pontosPlayer1 = player1.rollDice() + player1.manobrabilidade;
                pontosPlayer2 = player2.rollDice() + player2.manobrabilidade;
            break;
            case "CONFRONTO":
                pontosPlayer1 = player1.rollDice() + player1.poder;
                pontosPlayer2 = player2.rollDice() + player2.poder;
        }
        
         if(pontosPlayer1 > pontosPlayer2){
            player1.pontos++;
        }else{
            player2.pontos++;
        }
    }
}

//criando pista e jogando
let player2 = new Player('Luigi',3,4,4);
let player1 = new Player('Mario',4,3,3)
let pista1 = new Pista(player1,player2)

function declararVencedor(){
    if(pista1.player1.pontos > player2.pontos){
        console.log(player1['nome'] + " venceu a partida!")
        console.log(`Pontos ${player1['nome']} : ${player1['pontos']}`)
        console.log(`Pontos ${player2['nome']} : ${player2['pontos']}`)
    }else{
        console.log(player2['nome'] + " venceu a partida!")
        console.log(`Pontos ${player1['nome']} : ${player1['pontos']}`)
        console.log(`Pontos ${player2['nome']} : ${player2['pontos']}`)
    }
}

function jogar(){
        for(let i=0;i<5;i++){
        pista1.novaRodada();
    }
    declararVencedor();
}

jogar();



