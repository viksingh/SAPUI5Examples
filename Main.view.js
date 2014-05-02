sap.ui.jsview("helloworlddesktop.Main", {

      getControllerName : function() {
         return "helloworlddesktop.Main";
      },

      createContent : function(oController) {

    	  var myButton = new sap.ui.commons.Button("btn");

          // set properties, e.g. the text (there is also a shorter way of setting several properties)
          myButton.setText("Hello World!");

          // attach an action to the button's "press" event (use jQuery to fade out the button)
          myButton.attachPress(function(){$("#btn").fadeOut()});

          // place the button into the HTML element defined below
          myButton.placeAt("content");    	  
    	  
    	  
      }

});
