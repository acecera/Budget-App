//Budget Controller 
var budgetController = (function() {

})();

//UI Controller 
var UIController = (function() {
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, //This will either be inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    };
})();

//Global App Controller
var appController = (function(budgetCtrl, UICtrl) {
    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function() {
         //Get the filled input data
         var input = UICtrl.getInput();
         console.log(input);

        //Add input to budget controller

        //Add item to the UI

        //Calculate budget

        //Display budget on the UI


    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);