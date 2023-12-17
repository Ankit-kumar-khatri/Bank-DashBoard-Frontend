import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '', pathMatch: 'full', redirectTo: 'detailed-page'
  },
  {
    path: 'detailed-page', loadChildren: () => import('./detailed-page/detailed-page.module').then((m) => m.DetailedPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
