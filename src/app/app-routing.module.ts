import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';


export const routes: Routes = [
  {
    path: 'containers',
    loadChildren: () => import('@app-modules/database/database.module').then(m => m.DatabaseModule)
  },
  {
    path: 'mock',
    loadChildren: () => import("@app-modules/mock/mock.module").then(m => m.MockModule)
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
