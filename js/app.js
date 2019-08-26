var calculadora = {
    operando1: null,
    operando2: null,
    ultimaOperacion: " ",


    eventoClick: () => {

        //var botones = document.getElementsByClassName('tecla');
        var botones = document.querySelectorAll('.teclado  img');


        for (i = 0; i < botones.length; i++) {

            botones[i].addEventListener('mousedown', function () {

                this.style.padding = "1%"

            });
            botones[i].addEventListener('mouseup', function () {


                this.style.padding = "0%"

            });
        }


        for (i = 0; i < botones.length; i++) {


            botones[i].addEventListener('click', (e) => {



                display = document.getElementById('display');



                switch (e.target.id) {

                    case "mas":

                        this.calculadora.operando1 = display.textContent;
                        this.calculadora.ultimaOperacion = "+";
                        display.textContent = "";
                        break;

                    case "menos":

                        this.calculadora.operando1 = display.textContent;
                        this.calculadora.ultimaOperacion = "-";
                        display.textContent = "";
                        break;

                    case "por":


                        this.calculadora.operando1 = display.textContent;
                        this.calculadora.ultimaOperacion = "*";
                        display.textContent = "";
                        break;


                    case "dividido":
                        this.calculadora.operando1 = display.textContent;
                        this.calculadora.ultimaOperacion = "/";
                        display.textContent = "";
                        break;


                    case "sign":
                        display.textContent = -parseFloat(display.textContent);
                        break;

                    case "raiz":
                        display.textContent = display.textContent + "";
                        break;

                    case "on":
                        display.textContent = "0";
                        this.calculadora.operando1 = null;
                        this.calculadora.operando2 = null;
                        this.calculadora.ultimaOperacion = " ";
                        break;



                    case "igual":
                        if (this.calculadora.ultimaOperacion != " ") {
                            var res = 0;
                            switch (this.calculadora.ultimaOperacion) {
                                case "+":
                                    this.calculadora.operando2 = display.textContent;
                                    res = parseFloat(this.calculadora.operando1) + parseFloat(this.calculadora.operando2);
                                    break;
                                case "-":
                                    this.calculadora.operando2 = display.textContent;
                                    res = parseFloat(this.calculadora.operando1) - parseFloat(this.calculadora.operando2);
                                    break;
                                case "*":
                                    this.calculadora.operando2 = display.textContent;
                                    res = parseFloat(this.calculadora.operando1) * parseFloat(this.calculadora.operando2);
                                    break;
                                case "/":
                                    this.calculadora.operando2 = display.textContent;
                                    res = parseFloat(this.calculadora.operando1) / parseFloat(this.calculadora.operando2);
                                    break;
                            }

                            display.textContent = res;
                            this.calculadora.operando1 = 0;
                            if (display.textContent.length > 8) {
                                display.textContent = display.textContent.substring(0, 8);
                            }

                        }

                        break;

                    case "punto":
                        if (display.textContent.includes(".") == true) {
                            display.textContent = display.textContent + "";
                        } else {
                            display.textContent = display.textContent + ".";
                        }

                        break;

                    default:

                        if (display.textContent.length <= 8) {
                            if (display.textContent == "0") {
                                if (e.target.id == "0") {
                                    display = 0;
                                }
                                display.textContent = " "

                            }

                            display.textContent = display.textContent + e.target.id;
                            //console.log(e.target)
                        }


                }


            });

        }

    }

}

calculadora.eventoClick();
