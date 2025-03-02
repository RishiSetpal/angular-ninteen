# AngularNinteen

This project was generated using Angular CLI(https://github.com/angular/angular-cli) version 19.0.6.
(Angular Shared Documentation:)[https://chatgpt.com/share/67a87b2c-405c-8001-86bb-ceab69745f5a]

## Development server

To start a local development server, run:

```bash
ng serve
npx nx serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

Component Creation with flags

npx ng g c component-name --inline-template --inline-style --skip-tests
npx ng g c home --inline-template --inline-style --skip-tests
npx ng g c about --inline-template --inline-style --skip-tests

---

npx ng new smart-tast-manager --routing --style=scss

npx ng g c admin/dashboard
npx ng g c admin/settings
npx ng g c admin/users

npx ng g c auth/login
npx ng g c auth/register

npx ng g c shared/footer
npx ng g c shared/navbar

npx ng g c tasks/task-details
npx ng g c tasks/task-form
npx ng g c tasks/task-list

Admin_Routes add same in all routes.
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';
export const routes: Routes = [
{ path: '', component: DashboardComponent, children: [
{ path: 'users', component: UsersComponent },
{ path: 'settings', component: SettingsComponent }
]}
];
