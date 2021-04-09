import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BConditionalPageComponent } from './generated-content/b-conditional-page/b-conditional-page.component';
import { BHardcodedPageComponent } from './generated-content/b-hardcoded-page/b-hardcoded-page.component';
import { BObservablePageComponent } from './generated-content/b-observable-page/b-observable-page.component';
import { BSubPageComponent } from './generated-content/b-sub-page/b-sub-page.component';
import { ConditionalPageComponent } from './generated-content/conditional-page/conditional-page.component';
import { GeneratedContentComponent } from './generated-content/generated-content.component';
import { HardcodedPageComponent } from './generated-content/hardcoded-page/hardcoded-page.component';
import { ObservablePageComponent } from './generated-content/observable-page/observable-page.component';
import { RConditionalPageComponent } from './generated-content/r-conditional-page/r-conditional-page.component';
import { RHardcodedPageComponent } from './generated-content/r-hardcoded-page/r-hardcoded-page.component';
import { RObservablePageComponent } from './generated-content/r-observable-page/r-observable-page.component';
import { RSubPageComponent } from './generated-content/r-sub-page/r-sub-page.component';
import { SubPageComponent } from './generated-content/sub-page/sub-page.component';

const routes: Routes = [
  {
    path: '',
    component: GeneratedContentComponent
  },
  { path: 'hardcoded-page', component: HardcodedPageComponent },
  { path: 'sub-page', component: SubPageComponent },
  { path: 'conditional-page', component: ConditionalPageComponent },
  { path: 'observable-page', component: ObservablePageComponent },
  { path: 'b-hardcoded-page', component: BHardcodedPageComponent },
  { path: 'b-sub-page', component: BSubPageComponent },
  { path: 'b-conditional-page', component: BConditionalPageComponent },
  { path: 'b-observable-page', component: BObservablePageComponent },
  { path: 'r-hardcoded-page', component: RHardcodedPageComponent },
  { path: 'r-sub-page', component: RSubPageComponent },
  { path: 'r-conditional-page', component: RConditionalPageComponent },
  { path: 'r-observable-page', component: RObservablePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
