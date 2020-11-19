import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import{Routes,RouterModule}  from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http'

import{AuthComponent} from './auth.component';
import{RegisterComponent} from './register/register.component';
import{LoginComponent} from './login/login.component'
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { UpdateProductComponent } from './update-product/update-product.component'
import { AuthService } from './auth.service'
// import { AuthGuardService } from './auth-gaurd.service'

const routes:Routes=[
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'home',component: HomeComponent},
    {path: "product", component: ProductComponent},
    {path: "updateProduct/:id", component: UpdateProductComponent}

]

@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    ProductComponent,
    UpdateProductComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [AuthService],
})
export class AuthModule { }