export { dungeon1, descansar, jogador, desc, distribuiExp }

let jogador = {
    hp: 100,
    mana: 100,
    stg: 10,
    def: 10,
    dex: 10,
    charm: 10,
    gold: 0,
    exp: 0,
};

let desc = 0;

function sorteiaDescanso(){
    let rest = Math.floor(Math.random() * 22) + 1;
    if (rest%2 == 0){
        return desc ++;
    }
}

function dungeon1 (player){
    let dano = Math.floor(Math.random() * 30) + 10;
    let money = Math.floor(Math.random() * 20) + 1;
    let res = player.hp - (dano-player.def);
    if (res > player.hp){
        player.hp = player.hp;
    }
    else{
        player.hp = res;
    }
    sorteiaDescanso ();
    verificaVida(player);
    player.exp += 1;
    player.gold += money;
    //console.log ("DEU " + player.hp);
    atualizaStatus (player, desc);
}



function descansar (player, descanso){
    if (descanso > 0){
        player.hp += Math.floor(Math.random() * 15) + 10;
        if (player.hp > 100){
            player.hp = 100;
        }
        //console.log ("REC " + player.hp);
        desc --;
        console.log(desc);
        atualizaStatus (player, desc);
    }
}

function verificaVida(player){
    if (player.hp > 0){
        return;
    }
    else{
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
}

function distribuiExp (player, n){
    if (n===1 & player.exp > 0){
        player.stg ++;
        player.exp --;
        atualizaStatus (player, desc);
    }
    if (n===2 & player.exp > 0){
        player.def ++;
        player.exp --;
        atualizaStatus (player, desc);
    }
    if (n===3 & player.exp > 0){
        player.dex ++;
        player.exp --;
        atualizaStatus (player, desc);
    }
    if (n===4 & player.exp > 0){
        player.charm ++;
        player.exp --;
        atualizaStatus (player, desc);
    }
}

import { atualizaStatus } from "./index.js";


