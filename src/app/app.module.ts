import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BookComponent } from './book-list/book.component';
import { BookService } from './service/book.service';
import { BookFormComponent } from './book-form/book-form.component';
import { BookEditFormComponent } from './book-edit-form/book-edit-form.component';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookFormComponent,
    BookEditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
