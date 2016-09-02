sap.ui.define([
	] , function () {
		"use strict";

		return {

			eventValue : function (sValue) {
				
				var sResult = new sap.ui.model.type.String();
				
				if (sValue === "Y") {
					sResult = "Yes";
				}
				else if(sValue === "N"){
					sResult = "No";
				}
				else if(sValue === "M" || sValue === null){
					sResult = "Maybe";
				}
				return sResult;
				
			},
			/**
			 * Rounds the number unit value to 2 digits
			 * @public
			 * @param {string} sValue the number string to be rounded
			 * @returns {string} sValue with 2 digits rounded
			 */
			numberUnit : function (sValue) {
				if (!sValue) {
					return "";
				}
				return parseFloat(sValue).toFixed(2);
			}

		};

	}
);