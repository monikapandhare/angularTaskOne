import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostsComponent } from './share/component/posts/posts.component';
import { MobilesComponent } from './share/component/mobiles/mobiles/mobiles.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    MobilesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
