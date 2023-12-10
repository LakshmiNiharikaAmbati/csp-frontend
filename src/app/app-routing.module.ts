import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { Che10Component } from './che10/che10.component';
import { ContactComponent } from './contact/contact.component';
import { Eng10Component } from './eng10/eng10.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
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
const routes: Routes = [  
  {
    path : '',
    component : FrontpageComponent
  },
  {
    path:'tablesoc',
    component:TablesocComponent
  },
  {
    path:'tablesci',
    component:TablesciComponent

  },
  {
    path:'tablephy',
    component:TablephyComponent
  },
  {
    path:'tableeng',
    component:TableengComponent
  },
  {
    path:'tablehin',
    component:TablehinComponent
  },
  {
    path:'tabletel',
    component:TabletelComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path :'about',
    component:AboutComponent
  },
  {
    path:'bio10',
    component:Bio10Component
  },
  {
    path:'che10',
    component:Che10Component
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'eng10',
    component:Eng10Component
  },
  {
    path:'frontpage',
    component:FrontpageComponent
  },
  {
    path:'hin10',
    component:Hin10Component
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'mat10',
    component:Mat10Component
  },
  {
    path:'navbar',
    component:NavbarComponent
  },
  {
    path:'ps10',
    component:Ps10Component
  },
  {
    path:'soc10',
    component:Soc10Component
  },
  {
    path:'tel10',
    component:Tel10Component
  },
  {
    path:'ten',
    component:TenComponent
  },
  {
    path:'table',
    component:TableComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
