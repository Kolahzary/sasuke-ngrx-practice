import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home";
import { AboutComponent } from "./components/about";

const routes: Routes = [
  // { path: "", redirectTo: "home", pathMatch: "prefix" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
