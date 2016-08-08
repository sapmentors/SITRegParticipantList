jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"com/sap/sapmentors/sitreg/participantlist/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"com/sap/sapmentors/sitreg/participantlist/test/integration/pages/Worklist",
		"com/sap/sapmentors/sitreg/participantlist/test/integration/pages/Object",
		"com/sap/sapmentors/sitreg/participantlist/test/integration/pages/NotFound",
		"com/sap/sapmentors/sitreg/participantlist/test/integration/pages/Browser",
		"com/sap/sapmentors/sitreg/participantlist/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.sap.sapmentors.sitreg.participantlist.view."
	});

	sap.ui.require([
		"com/sap/sapmentors/sitreg/participantlist/test/integration/WorklistJourney",
		"com/sap/sapmentors/sitreg/participantlist/test/integration/ObjectJourney",
		"com/sap/sapmentors/sitreg/participantlist/test/integration/NavigationJourney",
		"com/sap/sapmentors/sitreg/participantlist/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});
