import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';
import { FooListComponent } from './foo-list/foo-list.component';
import { FooService } from './services/foo.service';

@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    FooListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FooService],
  bootstrap: [AppComponent]
})
export class AppModule { }
