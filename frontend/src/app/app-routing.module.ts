import { EngineUpdateComponent } from './components/engines/engine-update/engine-update.component';
import { EngineDetailComponent } from './components/engines/engine-detail/engine-detail.component';
import { EngineCreateComponent } from './components/engines/engine-create/engine-create.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PartsComponent } from './components/parts/parts.component';
import { EngineListComponent } from './components/engines/engine-list/engine-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"engines/engine-list", component: EngineListComponent
  },
  {
    path:"parts", component: PartsComponent
  },
  {
    path:"orders", component: OrdersComponent
  },
  {
    path:"engines/engine-create", component: EngineCreateComponent
  },
  {
    path: "engines/engine-detail", component: EngineDetailComponent
  },
  {
    path: "engines/engine-update/:id", component: EngineUpdateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
