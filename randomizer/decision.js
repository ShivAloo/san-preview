

function generaterand() {
    var element = document.getElementById("opacityd");
    element.style.opacity = "1";
    let first = document.querySelector(".first").value;
    let second = document.querySelector(".second").value;
    let third = document.querySelector(".third").value;

   let randnum = Math.floor(Math.random() * (4));



    if (randnum==1){
        let preview = document.querySelector(".decisionword");
        preview.innerHTML = first;

        console.log(first);
    }

    else if (randnum==2){
        let preview = document.querySelector(".decisionword");
        preview.innerHTML = second;


        console.log(second);
    }

    else if (randnum==3){
        let preview = document.querySelector(".decisionword");
        preview.innerHTML = third;


        console.log(third);
    }

    else{
        let preview = document.querySelector(".decisionword");
        preview.innerHTML = second;


        console.log(second);
    }

}

// Copyright © 2022 Shiven Mathur. All rights reserved. 