sap.ui.define([
		"de/Test_OSZ/schul02/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("de.Test_OSZ.schul02.controller.List", {
			onItemPress: function(oEvent){
				var oItem = oEvent.getSource();
				
				this.getRouter().navTo("customerDetails", {
					customerId : oItem.getBindingContext("flugkundenModel").getProperty("Customerid")
				}, true);
			}
		});
	}
);