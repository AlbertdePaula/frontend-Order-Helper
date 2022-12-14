import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EngineListComponent } from './components/engines/engine-list/engine-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/template/nav-bar/nav-bar.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { EngineCreateComponent } from './components/engines/engine-create/engine-create.component';
import { EngineDeleteComponent } from './components/engines/engine-delete/engine-delete.component';
import { EngineUpdateComponent } from './components/engines/engine-update/engine-update.component';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { OrdersCreateComponent } from './components/orders/orders-create/orders-create.component';
import { PartsListComponent } from './components/parts/parts-list/parts-list.component';
import { PartsCreateComponent } from './components/parts/parts-create/parts-create.component';
import { PartUpdateComponent } from './components/parts/part-update/part-update.component';
import { OrdersExecutingComponent } from './components/orders/orders-executing/orders-executing.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    EngineListComponent,
    NavBarComponent,
    EngineCreateComponent,
    EngineDeleteComponent,
    EngineUpdateComponent,
    OrdersCreateComponent,
    PartsListComponent,
    PartsCreateComponent,
    PartUpdateComponent,
    OrdersExecutingComponent
  ],
  imports: [
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    NgbModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    AccordionModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
