import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostCreateComponent } from './post-create/post-create.component';
import { CommentCreateComponent } from './comment-create/comment-create.component';
import { DetailDisplayComponent } from './detail-display/detail-display.component';
import { EditCakeComponent } from './edit-cake/edit-cake.component';

const routes: Routes = [
  { path: '', component: DetailDisplayComponent},
  { path: 'create', component: PostCreateComponent },
  { path: 'edit/:cakeId', component: EditCakeComponent },
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: 'edit/post/:cakeId', component: CommentCreateComponent },
  { path: '**', component: DetailDisplayComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
