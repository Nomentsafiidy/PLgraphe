import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PlgraphePage } from './plgraphe.page';

const routes: Routes = [
  {
    path: '',
    component: PlgraphePage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [PlgraphePage],
  exports: [RouterModule],
})
export class PlgraphePageModule {}
