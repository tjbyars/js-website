function display(button) {
    document.getElementById("result").value += button
}

function clear() {
    // const current = document.getElementById("result").value;
    // const clearVal = "";
    // document.getElementById("result").value = clearVal;
    document.getElementById("result").value = "2"
}

function calculate() {
    const input = document.getElementById("result").value
    const output = eval(input)
    document.getElementById("result").value = output
    
    const compute = (str = "") => {
        let total = 0;
        str = str.match(/[+\−]*(\.\d+|\d+(\.\d+)?)/g) || [];
        while (str.length) {
            total += parseFloat(str.shift());
        };
        return total;
    }
    document.getElementById("result").value = compute(str);
}

function changeDoc(colour) {
    document.getElementById
}