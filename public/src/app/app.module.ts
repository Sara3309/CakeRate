import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule,MatSelectModule, MatProgressSpinnerModule } from "@angular/material";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { HttpService } from './http.service';
import { PostCreateComponent } from './post-create/post-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommentCreateComponent } from './comment-create/comment-create.component';
import { DetailDisplayComponent } from './detail-display/detail-display.component';
import { HeaderComponent } from './header/header.component';
import { EditCakeComponent } from './edit-cake/edit-cake.component';


@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    CommentCreateComponent,
    DetailDisplayComponent,
    HeaderComponent,
    EditCakeComponent
  ],
  imports: [
    ScrollingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
