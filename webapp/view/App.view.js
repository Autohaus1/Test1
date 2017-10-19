sap.ui.jsview("view.App", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf view.App
	 */
	getControllerName: function() {
		return "controller.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf view.App
	 */
	createContent: function(oController) {

		var oText1 = new sap.m.Text({
			text: "{path: 'dataModel>/value1'}"   // identisch zu  
		});

		var oSlider1 = new sap.m.Slider({
			value: "{dataModel>/value1}",         // identisch zu  
			change: oController.onSliderChange
		});

		var oText2 = new sap.m.Text({
			text: "{model: 'dataModel', path: '/value2'}"    // identisch zu  beste value: - Zuweisung
		});
 
		var oSlider2 = new sap.m.Slider({
			value: "{model: 'dataModel', path: '/value2'}",   // identisch zu  
			change: oController.onSliderChange
		});

		var oButton = new sap.m.Button({
			tooltip: "Ganz schön schwer ",
			text: " Blödsinn",
			press: function() {
				alert("Button gedrückt");
			}
		});

		var oButton2 = new sap.m.Button({
			tooltip: "Ganz schön leicht",
			text: "nicht Blödsinn",
			press: function() {
				alert("Button gedrückt");
			}
		});

		var oPage = new sap.m.Page({
			title: "Title",
			content: [
				oSlider1,
				oText1,
				oSlider2,
				oText2,
				oButton,
				oButton2
			]
		});
		// Page 
		return new sap.m.App({
			pages: [
				oPage
			]
});
	}

});