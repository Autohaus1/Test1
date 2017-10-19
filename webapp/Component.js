sap.ui.define([
	"sap/ui/core/UIComponent"
], function(UIComponent) {
	"use strict";

	return UIComponent.extend("de.Test_OSZ.schul02.Component", {

		metadata: {
			name: "Meine App",
			version: "0.5",
			dependencies: {
				libs: ["sap.m"]
			},
			rootView: {
				viewName: "de.Test_OSZ.schul02.view.App",
				type: "XML"
			}
		},
		init: function() {
			UIComponent.prototype.init.apply(this, arguments);

			var i18nModel = new sap.ui.model.resource.ResourceModel({     
				bundleUrl: "i18n/i18n.properties"
			});
			this.setModel(i18nModel, "i18n");
			
			var oData = {
				value1: 50,
				value2: 90
			};

			var oModel = new sap.ui.model.json.JSONModel(oData); // Variable Model anlegen

			this.setModel(oModel, "dataModel"); // Model einbinden  dadurch Model in der App überall verfügbar

		}
	});
});