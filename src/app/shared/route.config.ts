import { DeepLinkConfig } from "ionic-angular";

import { TabsPage } from "../pages/tabs/tabs";
import { HomePage } from "../pages/home/home";
import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { WhiteScreenPage } from "../pages/white-screen/white-screen";


export const deepLinkConfig: DeepLinkConfig = {
	links: [
		{ component: HomePage, name: "home" },
		{ component: TabsPage, name: "tabs" },
		{ component: ContactPage, name: "contact" },
		{ component: AboutPage, name: "about" },
		{ component: WhiteScreenPage, name: "white-screen" }
	]
};
