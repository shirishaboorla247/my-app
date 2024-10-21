import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DiceComponent } from './dice/dice.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { TaskComponent } from './task/task.component';
import { Website1Component } from './website1/website1.component';
import { HigherOrderComponent } from './higher-order/higher-order.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import { AmazonComponent } from './amazon/amazon.component';
import { Flipkart1Component } from './flipkart1/flipkart1.component';
import { MailComponent } from './mail/mail.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateBankaccountsComponent } from './create-bankaccounts/create-bankaccounts.component';
import { StudentsComponent } from './students/students.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "dashboard", canActivate:[AuthenticationGuard], component: DashboardComponent, children: [
      { path: "home", component: HomeComponent },
      { path: "welcome", component: WelcomeComponent },
      { path: "databinding", component: DatabindingComponent },
      { path: "calculator", component: CalculatorComponent },
      { path: "rectangle", component: RectangleComponent },
      { path: "circle", component: CircleComponent },
      { path: "bmi", component: BmiComponent },
      { path: "dice", component: DiceComponent },
      { path: "directives", component: DirectivesComponent },
      { path: "pipes", component: PipesComponent },
      { path: "task", component: TaskComponent },
      { path: "website1", component: Website1Component },
      { path: "higher-order", component: HigherOrderComponent },
      { path: "amazon", component: AmazonComponent },
      { path: "vehicle", component: VehicleComponent },
      { path: "bank-accounts", component: BankAccountsComponent },
      { path: "flipkart1", component: Flipkart1Component },
      { path: "mail", component: MailComponent },
      { path: "createvehicle", component: CreateVehicleComponent },
      { path: "createbankaccounts" , component:CreateBankaccountsComponent},
      { path: "students" , component:StudentsComponent}
    ]
  },
  { path: "", component: LoginComponent },
  { path: "**", component: PagenotfoundComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
