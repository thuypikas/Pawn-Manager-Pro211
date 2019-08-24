import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Cầm đồ 299'
    },
    children: [
      {
        path: 'customer',
        loadChildren: () => import('./views/customer/customer.module').then(m => m.CustomerModule)
      },
      {
        path: 'staff',
        loadChildren: () => import('./views/staff/staff.module').then(m => m.StaffModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./views/product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'messenger',
        loadChildren: () => import('./views/messenger/messenger.module').then(m => m.MessengerModule)
      },
      {
        path: 'capital',
        loadChildren: () => import('./views/capital/capital.module').then(m => m.CapitalModule)
      },
      {
        path: 'revenue-expenditure',
        loadChildren: () => import('./views/revenue-expenditure/revenue-expenditure.module').then(m => m.RevenueExpenditureModule)
      },
      {
        path: 'pawn',
        loadChildren: () => import('./views/pawn/pawn.module').then(m => m.PawnModule)
      },
      {
        path: 'contract',
        loadChildren: () => import('./views/contract/contract.module').then(m => m.ContractModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
