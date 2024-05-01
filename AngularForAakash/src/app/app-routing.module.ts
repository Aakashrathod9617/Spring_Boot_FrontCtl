import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './user/userlist.component';
import { SignupComponent } from './login/signup/signup.component';

const routes: Routes = [

    

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
      path: 'dashboard',
      component: DashboardComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent

  },
{
  path: 'login',
      component: LoginComponent
    },
    {
      path: 'signup',
          component: SignupComponent
        },
    
    {
      path: 'user',
          component: UserComponent
        },
        {
          path: 'user/:id',
              component: UserComponent
            },
        {
          path: 'userlist',
              component: UserlistComponent
            }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
