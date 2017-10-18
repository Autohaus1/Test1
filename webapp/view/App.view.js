sap.ui.jsview("view.App", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.App
	*/ 
	getControllerName : function() {
		return "controller.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.App
	*/ 
	createContent : function(oController) {
		
		var oSlider1 = new sap.m.Slider({
		        change: oController.onSliderChange 		
	        	});
	 
		var oSlider2 = new sap.m.Slider({
		        change: oController.onSliderChange 		
	        	});
	
		var oButton = new sap.m.Button({
		  tooltip:"Ganz schön schwer ", 
	    	text:" Blödsinn",
	    	press: function() {
	     		alert("Button gedrückt");
		    }
		   });
     
		var oButton2 = new sap.m.Button({
		   tooltip:"Ganz schön leicht",
		   text:"nicht Blödsinn"
		   });
      
	 		return new sap.m.Page({
			title: "Meine 1. APP",
			content: [oSlider1,
			          oSlider2,
			          oButton,
			          oButton2
			
			]
		});
	}

});