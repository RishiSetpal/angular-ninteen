import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-layout-component',
  imports: [HeaderComponent, FooterComponent, RouterModule, RouterOutlet],
  templateUrl: './layout-component.component.html',
  styleUrl: './layout-component.component.css',
})
export class LayoutComponentComponent {}
