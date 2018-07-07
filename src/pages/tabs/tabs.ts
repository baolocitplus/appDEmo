import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { JsonPage } from '../json/json';
import { GuidePage } from '../guide/guide';
import { NumberPage } from '../number/number';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NumberPage;
  tab3Root = JsonPage;
  tab4Root = LoginPage;
  tab5Root = GuidePage;

  constructor() {

  }
}
