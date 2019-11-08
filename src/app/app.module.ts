import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PmDragAndDropModule } from './modules/pm-drag-and-drop/pm-drag-and-drop.module';
import { ExampleComponent } from './example/example.component';
import { PmDraggableDirective } from './modules/pm-drag-and-drop/pm-draggable.directive';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    PmDragAndDropModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
