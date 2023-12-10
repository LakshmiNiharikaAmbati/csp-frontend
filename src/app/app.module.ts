import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AboutComponent } from './about/about.component';
import { Che10Component } from './che10/che10.component';
import { ContactComponent } from './contact/contact.component';
import { Eng10Component } from './eng10/eng10.component';
import { Hin10Component } from './hin10/hin10.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Mat10Component } from './mat10/mat10.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Ps10Component } from './ps10/ps10.component';
import { Bio10Component } from './bio10/bio10.component';
import { Soc10Component } from './soc10/soc10.component';
import { Tel10Component } from './tel10/tel10.component';
import { TenComponent } from './ten/ten.component';
import { RegisterComponent } from './register/register.component';
import { TableComponent } from './table/table.component';
import { TablesocComponent } from './tablesoc/tablesoc.component';
import { TablesciComponent } from './tablesci/tablesci.component';
import { TablephyComponent } from './tablephy/tablephy.component';
import { TableengComponent } from './tableeng/tableeng.component';
import { TablehinComponent } from './tablehin/tablehin.component';
import { TabletelComponent } from './tabletel/tabletel.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    AboutComponent,
    Che10Component,
    ContactComponent,
    Eng10Component,
    Hin10Component,
    HomeComponent,
    LoginComponent,
    Mat10Component,
    NavbarComponent,
    Ps10Component,
    Bio10Component,
    Soc10Component,
    Tel10Component,
    TenComponent,
    RegisterComponent,
    TableComponent,
    TablesocComponent,
    TablesciComponent,
    TablephyComponent,
    TableengComponent,
    TablehinComponent,
    TabletelComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
