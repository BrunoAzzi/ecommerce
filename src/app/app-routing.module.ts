import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./views/login/login.component";
import { AuthGuard } from "./guards/login/auth.guard";
import { AuthService } from "./services/firebase/auth.service";

export const routes: Routes = [
  { path: '', redirectTo: 'asd', pathMatch: 'full' },
  {
    path: '', canActivate: [ AuthGuard ], children: [
      { path: 'asd', component: LoginComponent },
    ]
  },
  {
    path: '', children: [
    { path: 'login', component: LoginComponent },
  ]
  },
  { path: '**', redirectTo: 'asd', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
  providers: [ AuthGuard, AuthService ]
})
export class AppRoutingModule { }
