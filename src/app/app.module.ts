import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { ContainerComponent } from './container/container.component';
import { TypeComponent } from './type/type.component';
import { ButtonsBackgroundDirective } from './Directives/buttons-background.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FilterComponent,
    ContainerComponent,
    TypeComponent,
    ButtonsBackgroundDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
