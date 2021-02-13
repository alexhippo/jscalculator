function reset() {
    document.getElementById("display").value = "0";
    document.getElementById("result").value = "0";
}

function input(id) {
    //no multiple 0s
    //don't apply operators if initial value is 0. if decimal add 0
    if ((document.getElementById("display").value == 0) && (document.getElementById(id).className !== "number"))    {
        return false;
    } else if ((document.getElementById("display").value == 0) && (id === "decimal")) {
        document.getElementById("display").value = "0.";
        document.getElementById("result").value = "0.";
    } else if ((document.getElementById("display").value == "0") && (document.getElementById(id).className == "number")) { 
        document.getElementById("display").value = document.getElementById(id).value;
        document.getElementById("result").value = document.getElementById(id).value;
    } 
    else {
        //if last character is an operator - replace it
        if ((/(-$)|(\+$)|(\/$)|(\*$)/gm.test(document.getElementById("display").value)) && (document.getElementById(id).className == "operations")){
            document.getElementById("display").value = document.getElementById("display").value.replace(/(-$)|(\+$)|(\/$)|(\*$)/gm, document.getElementById(id).value);
            document.getElementById("result").value = document.getElementById("result").value.replace(/(-$)|(\+$)|(\/$)|(\*$)/gm, document.getElementById(id).value);
        } else {
            if ((id === "decimal") && (document.getElementById("display").value.split('.').length === 2)) { //if there is already a decimal point, do not put another decimal point
                return false;
            } else if (document.getElementById("display").value.length >= 20) { //avoiding large numbers
                return false;
            } else {
                document.getElementById("display").value += document.getElementById(id).value; 
                document.getElementById("result").value += document.getElementById(id).value; 
            }
        } 
    }
}

function execute() {
    calculation = eval(document.getElementById("display").value);
    document.getElementById("result").value = calculation;
}
