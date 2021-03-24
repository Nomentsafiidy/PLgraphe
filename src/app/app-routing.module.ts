import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlgraphePage } from './pages/plgraphe/plgraphe.page';

const routes: Routes = [
  {
    path: 'plgraphe',
    loadChildren: () =>
      import('src/app/pages/plgraphe/plgraphe.module').then(
        (m) => m.PlgraphePageModule
      ),
  },
  {
    path: '**',
    redirectTo: 'plgraphe',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
