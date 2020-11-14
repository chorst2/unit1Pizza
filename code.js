$(document).ready(
    function () {
        //add all event listener (clicks, etc.)
        $("#tabs a").click(showTab);
        $("#delivery input").change(showOrder);

        //any other functions (calculate trip, roll die, etc.)
        function showTab(event)
        {
            event.preventDefault();
            $(this).tab("show");
        }
        function showOrder()
        {
            //create subtotal variable
            var subtotal = 0;

            //make a meat toppings variable
            var meatToppings = "";

            //make a veggie toppings variable
            var veggieToppings = "";

            //ask jquery for all selected meat topping checkboxes
            var selectedMeatBoxes = $("input[name=meat]:checked");

            //ask jquery for all selected veggie topping checkboxes
            var selectedVeggieBoxes = $("input[name=veggies]:checked");

            selectedMeatBoxes.each(function ()
            {
                //get each boxes data price value
                subtotal += $(this).data("price");
                //get each selected meat topping name
                meatToppings += $(this).val();
                meatToppings += "<br>";
            });

            selectedVeggieBoxes.each(function ()
            {
                //get each boxes data price value
                subtotal += $(this).data("price");
                //get each selected meat topping name
                veggieToppings += $(this).val();
                veggieToppings += "<br>";
            });

            //output meat toppings to table
            $("#meatToppingsOutput").html(meatToppings);

            //output veggie toppings to table
            $("#veggieToppingsOutput").html(veggieToppings);

            //ask jquery for selected pizza size
            var selectedPizzaSize = $("input[name=size]:checked");

            //get the name from the selected checkbox
            var displayPizzaSize = selectedPizzaSize.data("size");

            //display the pizza size
            $("#pizzaSizeOutput").text(displayPizzaSize);

            //find its data-price value
            var pizzaSizeCost = selectedPizzaSize.data("price");

            //ask jquery for selected pizza crust
            var selectedPizzaCrust = $("input[name=crust]:checked");

            //get the name from the selected checkbox
            var displayPizzaCrust = selectedPizzaCrust.data("crust");

            //display the pizza crust
            $("#pizzaCrustOutput").text(displayPizzaCrust);

            //getting the users first and last name
            var userFirstName = $("#firstName").val();
            var userLastName = $("#lastName").val();

            //displaying the user's name together
            $("#customerNameOutput").text(`${userFirstName} ${userLastName}`);

            //getting the users address, city,state, and zip
            var userAddressOne = $("#address").val();
            var userCity = $("#city").val();
            var userState = $("#state").val();
            var userZip = $("#zip").val();

            //display address all together
            $("#addressOutput").text(`${userAddressOne} ${userCity} ${userState} ${userZip}`);

            //get users phone number
            var userPhoneNum = $("#phone").val();

            //display phone number
            $("#phoneNumOutput").text(userPhoneNum);


            //turn subtotal into a number
            subtotal = parseFloat(subtotal);

            //add up the cost of the toppings and the pizza size
            var subtotalOutput = subtotal + pizzaSizeCost;

            //display the subtotal
            $("#subtotalOutput").text(`$${subtotalOutput.toFixed(2)}`);

            //calculate the tax
            var calculatedTax = subtotalOutput * .051

            //display the tax
            $("#calculatedTaxOutput").text(`$${calculatedTax.toFixed(2)}`);

            //make a variable for the delivery fee
            var deliveryFee = 2.00;

            //display the delivery fee
            $("#deliveryFeeOutput").text(`$${deliveryFee.toFixed(2)}`);

            //calculate the total
            var grandTotal = subtotalOutput + calculatedTax + deliveryFee;

            //display the total
            $("#grandTotalOutput").text(`$${grandTotal.toFixed(2)}`);

        }

    }
);