import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login.module';
import { LoginComponent } from './login/login.component';
import { LoginResolverService } from 'src/app/services/login-resolver.service';

const routes: Routes = [
  {
      path: 'login', 
      component: LoginComponent,
      resolve: {
        homeResolver: LoginResolverService
      }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
