function compute() {
    // 2.
    var principal = document.getElementById("principal").value;
    // 3.
    var rate = document.getElementById("rate").value;
    // 4.
    var year = parseInt(document.getElementById("years").value);    
    // 5.
    var interest = principal * year * rate / 100;
    // 6.
    var today = new Date();
    var actualYear = parseInt(today.getFullYear());
    var futureYear = year + actualYear;
    // 10.
    var result = document.getElementById("result");
    // 11.-14.   
    var firstRow = "If your deposit <mark>" +  principal + "</mark>,<br>";
    var secondRow = "at an interest rate of <mark>" + rate + "</mark>%.<br>";
    var thirdRow = "You will receive an amount of <mark>" + interest + "</mark>,<br>";
    var fourthRow = "in the year <mark>" + futureYear +"</mark>";
    //15.
    if(principal > 0) {
        result.innerHTML = firstRow + secondRow + thirdRow + fourthRow;    
    }else {
        alert("Enter a positive number");
        // 16.
        document.getElementById("principal").focus();
    }
}
// 7. - 9.
function rateChange() {
    var rate = document.getElementById("rate").value;    
    document.getElementById("rateSpan").innerHTML=rate + "%";
    // I would like to use this way, but then the txt ist added every time...
    //var span = document.getElementById("rateSpan");    
    //txt = document.createTextNode(rate + "%");
    //span.appendChild(txt);
}
        