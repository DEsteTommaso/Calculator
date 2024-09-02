let number1 = "";
let number2 = "";
let res = 0;

let sumBool = false;
let oddBool = false;
let divBool = false;
let mulBool = false;

let n = document.querySelector("#numero");

function p(){
    console.log("Number 1: " + number1);
    console.log("Number 2: " + number2);
    console.log("Res: " + res);
    console.log("---------");
}

function sum(){
    res = parseFloat(number1) + parseFloat(number2);
    p();
}

function odd(){
    res = parseFloat(number1) - parseFloat(number2);
    p();
}

function division(){
    res = parseFloat(number1) / parseFloat(number2);
    p();
}

function multiplication(){
    res = parseFloat(number1) * parseFloat(number2);
    p();
}

function clear(){
    number1 = "";
    number2 = "";
    res = 0;
    n.innerHTML = "0";
    p();
}

function refresh(element){
    if(res == 0)
        number1 += element.textContent;
    else
        number2 += element.textContent;

}

let btn = document.querySelectorAll("button");

btn.forEach((element) => {

    element.addEventListener("click", function() {
        //item.getElementById("demo").innerHTML = "Hello World";
            if(element.id == "ac"){
                clear();
                res = 0;
            }
            else if(element.id == "eliminare"){

                if(res == 0){
                    number1 = number1.slice(0, -1); 
                    n.innerHTML = number1;
                }
                else {
                    number2 = number2.slice(0, -1);
                    n.innerHTML = number2;
                }

            }
            else if(element.id == "punto"){

                if(res == 0){
                    number1 += ".";
                    n.innerHTML = number1;
                }
                else {
                    number2 += ".";
                    n.innerHTML = number2;
                }



            }
            else if(element.id == "divisione"){
                
                sumBool = false;
                oddBool = false;
                divBool = true;
                mulBool = false;

                //devo fare anche il caso se si ha più di due operazioni
                
                //salvo il valore
                res = parseFloat(number1);
            }
            else if(element.id == "moltiplicazione"){

                sumBool = false;
                oddBool = false;
                divBool = false;
                mulBool = true;

                //salvo il valore
                res = parseFloat(number1);
            }
            else if(element.id == "sottrazione"){

                sumBool = false;
                oddBool = true;
                divBool = false;
                mulBool = false;

                //salvo il valore
                res = parseFloat(number1);
            }
            else if(element.id == "somma"){

                sumBool = true;
                oddBool = false;
                divBool = false;
                mulBool = false;

                //salvo il valore
                res = parseFloat(number1);

            }
            else if(element.id == "uguale"){

                //incomplete operation
                if(number2 == "" || number1 == "" && number2 == ""){
                    clear();
                    return;
                }
                    

                if(sumBool)
                    sum();
                else if(oddBool)
                    odd();
                else if(divBool)
                    division()
                else if(mulBool)
                    multiplication();

                number1 = res;
                number2 = "";

                n.innerHTML = res;

            }
            else if(element.id == "zero" || element.id == "uno" || element.id == "due" || element.id == "tre" || element.id == "quattro" ||
            element.id == "cinque" || element.id == "sei" || element.id == "sette" || element.id == "otto" || element.id == "nove"){
                refresh(element);
                if(res == 0)
                    n.innerHTML = number1;
                else 
                    n.innerHTML = number2;

            }
            
      });

});



