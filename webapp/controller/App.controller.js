sap.ui.controller("de.Test_OSZ.schul02.controller.App", {

	/**
	 * Called     when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf controller.App
	 */
	onInit: function() {
		var oData = {
			value1: 50,
			value2: 90
		};

		var oModel = new sap.ui.model.json.JSONModel(oData); // Variable Model anlegen

		sap.ui.getCore().setModel(oModel, "dataModel"); // Model einbinden
	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf controller.App
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf controller.App
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf controller.App
	 */
	//	onExit: function() {
	//
	//	}
	onSliderChange: function(oEvent) {
		alert("Verschoben von " +
			oEvent.getSource().getId() +
			"Verschoben auf " +
			oEvent.getSource().getValue() +
			" verschoben");
	},
    onButton: function(oEvent) {
		alert("{i18n>pressButton}");}
});