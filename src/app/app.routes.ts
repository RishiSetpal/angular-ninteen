import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CounterComponent } from './counter/counter.component';
import { LayoutComponentComponent } from './layout-component/layout-component.component';

// export const routes: Routes = [
//   // { path: '', component: AppComponent },
//   { path: '', redirectTo: 'counter', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent },
//   { path: 'counter', component: CounterComponent },
//   { path: 'about', component: AboutComponent },
//   { path: '**', component: PageNotFoundComponent },
// ];

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponentComponent, // Use layout for shared UI
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];
