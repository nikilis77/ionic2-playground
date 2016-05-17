import {ViewChild} from "@angular/core";
import {App, IonicApp, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {ListPage} from './pages/list/list';
import {ItemDetailsPage} from './pages/item-details/item-details';
import {RouteConfig} from '@angular/router-deprecated';
import {LOGGER_PROVIDERS, LoggerFactory, ILog} from "ssv-ng2-core";
import consts from "./app.const";

@App({
  templateUrl: `${consts.basePath}/app.html`,
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  providers: [
    LOGGER_PROVIDERS
  ]
})
@RouteConfig([
  { path: '/', component: HelloIonicPage },
  { path: '/items', component: ListPage },
  { path: '/items/:item', component: ItemDetailsPage },
])
class MyApp {
  // make HelloIonicPage the root (or first) page
  //rootPage: any;
  rootPage: any = HelloIonicPage;
  pages: Array<{ title: string, component: any }>;
  private logger: ILog;
  @ViewChild(Nav) nav: Nav;

  constructor(
    private app: IonicApp,
    private platform: Platform,
    private menu: MenuController,
    private loggerFactory: LoggerFactory
  ) {
    this.logger = loggerFactory.getInstance("app");
    this.initializeApp();
    this.logger.debug("ctor", "App initialized...");
    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
