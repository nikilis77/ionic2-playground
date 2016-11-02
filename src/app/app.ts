import { Component, ViewChild, OnInit } from "@angular/core";
import { Nav } from "ionic-angular";

import { HomePage } from "./pages/home/home";
import { ContactPage } from "./pages/contact/contact";
import { WhiteScreenPage } from "./pages/white-screen/white-screen";

@Component({
	moduleId: module.id,
	templateUrl: "app.html"
})
export class MyApp implements OnInit{

	@ViewChild("myNav")nav: Nav;

	rootPage: any;
	contactPage = ContactPage;
	whiteScreenPage = WhiteScreenPage;

	ngOnInit() {
		this.nav.setRoot(HomePage);
	}

	gotoPage(page: any) {
		this.nav.setRoot(page, null, { animate: true, direction: "forward" });
	}
}







