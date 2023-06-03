import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';


export const routes: Routes = [
  {
    path: 'containers',
    loadChildren: () => import('./modules/database/database.module').then(m => m.DatabaseModule)
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
