import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatorsComponent } from './components/creators.component';

const routes: Routes = [
  { path: '', component: CreatorsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatorsRoutingModule { }