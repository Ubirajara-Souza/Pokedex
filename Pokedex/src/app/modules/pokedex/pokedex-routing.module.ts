import { InformationGuard } from './guards/information.guard';
import { InformationComponent } from './views/information/information.component';
import { ListComponent } from './views/list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: ":number",
    component: InformationComponent,
    canActivate: [InformationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
