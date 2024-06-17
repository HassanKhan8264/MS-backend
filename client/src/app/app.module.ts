import { NgModule } from "@angular/core";
import { BrowserModule, Meta, Title } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { LayoutModule } from "./layout/layout-module";
import { MetaService } from "./shared/services/meta.service";
@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // App-
    SharedModule.forRoot(),
    LayoutModule,
  ],
  providers: [MetaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
