import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { InputTopComponent } from './components/input-top/input-top.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoxTasksComponent } from './components/box-tasks/box-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    InputTopComponent,
    BoxTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
