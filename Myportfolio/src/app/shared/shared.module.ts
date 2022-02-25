import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { SidenavHeaderComponent } from './components/sidenav-header/sidenav-header.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { SidenavContentComponent } from './components/sidenav-content/sidenav-content.component';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { WorkInProgressComponent } from './components/work-in-progress/work-in-progress.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavHeaderComponent,
    SidenavContentComponent,
    WorkInProgressComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatListModule,
    MatExpansionModule,
    RouterModule,
    MatDialogModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavHeaderComponent,
    SidenavContentComponent,
    WorkInProgressComponent,
  ],
})
export class SharedModule {}
