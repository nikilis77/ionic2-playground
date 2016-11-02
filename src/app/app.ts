import { Component, ViewChild } from "@angular/core";
import { Nav } from "ionic-angular";

import { HomePage } from "./pages/home/home";
import { ContactPage } from "./pages/contact/contact";
import { WhiteScreenPage } from "./pages/white-screen/white-screen";

@Component({
	moduleId: module.id,
	templateUrl: "app.html"
})
export class MyApp {

	@ViewChild("mycontent")nav: Nav;

	rootPage = HomePage;
	contactPage = ContactPage;
	whiteScreenPage = WhiteScreenPage;

	gotoPage(page: any) {
		this.nav.setRoot(page, null, { animate: true, direction: "forward" });
	}
}