import { NgModule } from "@angular/core";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { IonicModule, IonicApp } from "ionic-angular";

import { TabsPage } from "./pages/tabs/tabs";
import { HomePage } from "./pages/home/home";
import { AboutPage } from "./pages/about/about";
import { ContactPage } from "./pages/contact/contact";
import { WhiteScreenPage } from "./pages/white-screen/white-screen";
import { deepLinkConfig } from "./shared/route.config";
import { MyApp } from "./app";

@NgModule({
	declarations: [
		MyApp,
		TabsPage,
		HomePage,
		ContactPage,
		AboutPage,
		WhiteScreenPage
	],
	imports: [
		IonicModule.forRoot(MyApp, {
			pageTransition: "md-transition"
		}, deepLinkConfig)
	],
	bootstrap: [
		IonicApp
	],
	entryComponents: [
		TabsPage,
		HomePage,
		ContactPage,
		AboutPage,
		WhiteScreenPage
	],
	providers: [
		{ provide: LocationStrategy, useClass: PathLocationStrategy }
	]
})

export class AppModule {
}
