import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }


];

@NgModule({
  imports: [
    //CommonModule,
    //BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
