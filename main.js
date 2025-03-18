	function mouseOver1() {
		submit.style.background = "red";
		submit.style.color = "white";
	}
	function mouseLeave1() {
		submit.style.background = "red";
		submit.style.color = "black"
	}
	function mouseOver2() {
		ticketprice.style.background = "red";
		ticketprice.style.color = "white";
	}
	function mouseLeave2() {
		ticketprice.style.background = "red";
		ticketprice.style.color = "black"
	}
	function mouseOver3() {
		printticket.style.background = "red";
		printticket.style.color = "black";
	}
	function mouseLeave3() {
		printticket.style.background = "red";
		printticket.style.color = "black"
	}
	function mouseOver4() {
		onemore.style.background = "red";
		onemore.style.color = "white";
	}
	function mouseLeave4() {
		onemore.style.background = "red";
		onemore.style.color = "black"
	}
// changeing to capital letters for the fullname
	function changetoCapital() {
		var fName = document.getElementById("fullName");
		fName.value = fName.value.toUpperCase();
	}
// alert window for the buttons
    function submitInfo() {
    	var fullname = document.getElementById("fullName").value;
    	window.alert("Thank you, " + fullname + "." + " Kindly proceed to the next section.");
    }
    function checkDiscount() {
    	let seatType = document.getElementById("seatArrangment").value;
    	let userType = document.getElementById("options").value;
    	// determins the original prices based on seat type
    	let originalPrice;
    	if (seatType === "premium") {originalPrice = 200;}
    	if (seatType === "patron") {originalPrice = 150;}
    	if (seatType === "economy") {originalPrice = 100;}
    	// adds the discount
    	let discountMultiplier = (userType === "student") * 0.2;
    	let discountedPrice = originalPrice - (originalPrice * discountMultiplier);

    	window.alert('Your total price is ₱' + discountedPrice.toFixed(2) + "." + " Kindly proceed to the next section.");
    }
    function printingTicket() {
    	var emailaddress = document.getElementById("emailAddress").value;
    	window.alert("Your ticket has been sent to your email being: " + emailaddress + ". Thank you for buying!");
    }
	  