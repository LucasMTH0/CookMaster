import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faBowlFood,
  faDrumstickBite,
  faCow,
  faFish,
  faLeaf,
  faMugHot,
  faCarrot,
  faSeedling,
  faScaleBalanced,
  faIceCream,
  faCakeCandles,
  faBreadSlice,
  faCoffee,
  faHamburger,
  faGlassWater,
  faHotdog,
  faDumbbell,
} from '@fortawesome/free-solid-svg-icons';
// import { provideIcons } from '@fortawesome/angular-fontawesome';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
