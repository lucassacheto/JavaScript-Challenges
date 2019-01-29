


// ghost, crow, spider, cat, dog, fish, frog, dove, horse, hippo, otter, spider

var playerAvatars = ["ghost", "crow", "hat-wizard", "mask", "skull-crossbones", "spider", "cat", "dog", "fish", "frog", "dove", "horse", "hippo", "otter", "spider"];

var i = 0;
while(i < 1){

    var playerOne = prompt("Player 1: ");
    var playerTwo = prompt("Player 2: ");

    if(playerOne != "" && playerTwo != ""){
        document.getElementById("playerOne").textContent = "P1: " + playerOne;
        document.getElementById("playerTwo").textContent = "P2: " + playerTwo;
        
        document.getElementById("avatar1").className = "fa fa-" + playerAvatars[getNum()];
        document.getElementById("avatar2").className = "fa fa-" + playerAvatars[getNum()];
        //console.log(playerAvatars[getNum()]);
        
        if(document.getElementById("avatar1").className == document.getElementById("avatar2").className){
            document.getElementById("msg").classList.add("alert-primary");
            document.getElementById("msg").textContent = "YOU GUYS TIED!!!";
        }else{
            
            var playerRandom = Math.floor( Math.random() * 2 ) + 1 ;
            document.getElementById("msg").classList.add("alert-secondary");
            document.getElementById("msg").innerHTML = 'PLAYER <b>'+ playerRandom  + '</b> WON !!!';
        }

        i = 1;

    }else{
        alert("You have to fill up all the player's name");
        i = 0;
    }

}

function getNum(){
    return Math.floor( Math.random() * playerAvatars.length);
    //return 2;
};


    





