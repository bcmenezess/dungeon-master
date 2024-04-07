import { dungeon1, descansar, jogador, desc, distribuiExp } from "./jogo.js";

let botao = document.querySelectorAll("button");


botao[0].addEventListener("click", function() {
    dungeon1(jogador);
});


botao[1].addEventListener("click", function() {
    descansar(jogador, desc);
});



function atualizaStatus(player, descanso){
    const sttsPersonagem = document.querySelectorAll("li");
    sttsPersonagem[0].innerHTML = "HP: " + player.hp;
    sttsPersonagem[1].innerHTML = "MANA: " + player.mana;
    sttsPersonagem[2].innerHTML = "STG: " + player.stg;
    sttsPersonagem[3].innerHTML = "DEF: " + player.def;
    sttsPersonagem[4].innerHTML = "DEX: " + player.dex;
    sttsPersonagem[5].innerHTML = "CHARM: " + player.charm;
    sttsPersonagem[6].innerHTML = "GOLD: " + player.gold;
    sttsPersonagem[7].innerHTML = "EXP: " + player.exp;
    sttsPersonagem[8].innerHTML = "POÇÃO DE CURA: " + descanso;
    
    for (let i=2; i < sttsPersonagem.length - 3; i++){
        let b = document.createElement('button');
        b.id = "plus";
        b.innerHTML = "+";
        sttsPersonagem[i].append(" ",b);
    }

    const bt = document.querySelectorAll ("#plus");
    bt[0].addEventListener("click", function() {
        distribuiExp (player, 1);
    });
    
    bt[1].addEventListener("click", function() {
        distribuiExp (player, 2);
    });
    
    bt[2].addEventListener("click", function() {
        distribuiExp (player, 3);
    });
    
    bt[3].addEventListener("click", function() {
        distribuiExp (player, 4);
    });

    
    if (player.hp <= 0){
        botao[0].disabled = true;
        botao[1].disabled = true;
        const header = document.querySelector ("h1");
        const p = document.querySelector ("p");
        header.innerHTML = "Você morreu."
        p.innerHTML = "Fraco."
        for (let i=0; i<sttsPersonagem.length; i++){
            sttsPersonagem[i].innerHTML = "";
        }
    }
}


export {atualizaStatus};



