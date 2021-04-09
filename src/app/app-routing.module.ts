import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratedContentComponent } from './generated-content/generated-content.component';

const routes: Routes = [
  {
    path: '',
    component: GeneratedContentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
