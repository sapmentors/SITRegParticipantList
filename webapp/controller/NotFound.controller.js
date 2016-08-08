sap.ui.define([
		"com/sap/sapmentors/sitreg/participantlist/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("com.sap.sapmentors.sitreg.participantlist.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);