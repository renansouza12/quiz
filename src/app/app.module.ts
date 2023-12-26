import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { QuestionComponent } from './components/question/question.component';
import { OptionsComponent } from './components/options/options.component';
import { ButtonComponent } from './components/ui/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { TitleComponent } from './components/title/title.component';
import { HomeComponent } from './pages/home/home.component';
import { ResultComponent } from './pages/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    QuestionComponent,
    OptionsComponent,
    ButtonComponent,
    FooterComponent,
    TitleComponent,
    HomeComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
