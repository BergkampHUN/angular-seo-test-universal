import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneratedContentComponent } from './generated-content/generated-content.component';
import { ConditionalPageComponent } from './generated-content/conditional-page/conditional-page.component';
import { SubPageComponent } from './generated-content/sub-page/sub-page.component';
import { ObservablePageComponent } from './generated-content/observable-page/observable-page.component';
import { RConditionalPageComponent } from './generated-content/r-conditional-page/r-conditional-page.component';
import { BConditionalPageComponent } from './generated-content/b-conditional-page/b-conditional-page.component';
import { BObservablePageComponent } from './generated-content/b-observable-page/b-observable-page.component';
import { RObservablePageComponent } from './generated-content/r-observable-page/r-observable-page.component';
import { RSubPageComponent } from './generated-content/r-sub-page/r-sub-page.component';
import { BSubPageComponent } from './generated-content/b-sub-page/b-sub-page.component';
import { HardcodedPageComponent } from './generated-content/hardcoded-page/hardcoded-page.component';
import { BHardcodedPageComponent } from './generated-content/b-hardcoded-page/b-hardcoded-page.component';
import { RHardcodedPageComponent } from './generated-content/r-hardcoded-page/r-hardcoded-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneratedContentComponent,
    ConditionalPageComponent,
    SubPageComponent,
    ObservablePageComponent,
    RConditionalPageComponent,
    BConditionalPageComponent,
    BObservablePageComponent,
    RObservablePageComponent,
    RSubPageComponent,
    BSubPageComponent,
    HardcodedPageComponent,
    BHardcodedPageComponent,
    RHardcodedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
