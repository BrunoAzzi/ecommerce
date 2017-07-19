import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./views/login/login.component";
import { AuthGuard } from "./guards/login/auth.guard";
import { AuthService } from "./services/firebase/auth.service";
import { BasicLayout } from "./components/layouts/basic/layout/layout.component"
import { BlankLayout } from "./components/layouts/blank/blank.component"
import { OverviewComponent } from "./views/overview/overview.component"

export const routes: Routes = [
    { path: '', redirectTo: 'asd', pathMatch: 'full' },
    {
        path: '', component: BlankLayout, children: [
            {
                path: '', component: BasicLayout, canActivate: [ AuthGuard ], children: [
                    { path: 'asd', component: OverviewComponent }
                ]
            },
            {
                path: '', children: [
                    { path: 'login', component: LoginComponent },
                ]
            },
        ]
    },
    { path: '**', redirectTo: 'asd', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard, AuthService]
})
export class AppRoutingModule { }
