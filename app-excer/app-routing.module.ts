import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './common/aboutus/aboutus.component';
import { ParentComponent } from './common/parent/parent.component';
import { ContactusComponent } from './common/contactus/contactus.component';
import { ArticleComponent } from './common/article/article.component';
import { CommentsComponent } from './common/comments/comments.component';
import { AppComponent } from './app.component';
import { FileuploadComponent } from './module/fileupload/fileupload.component';

const routes: Routes = [
  { path: "", component: ParentComponent },
  { path: "aboutus", component: AboutusComponent },
  {
    path: "article", component: ArticleComponent, children: [{
      path: "comments", component: CommentsComponent
    }
    ]
  },
  { path: "contactus", component: ContactusComponent },
  { path: "upfiles", component: FileuploadComponent },
  { path: "block", loadChildren: 'src/app/module/block/block.module#BlockModule' },
  { path: "contact", loadChildren: 'src/app/module/contact/contact.module#ContactModule' },
  { path: "post", loadChildren: 'src/app/module/post/post.module#PostModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
