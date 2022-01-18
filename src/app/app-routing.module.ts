import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DivisionComponent } from './division/division.component';
import { TambahDataComponent } from './tambah-data/tambah-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { HapusDataComponent } from './hapus-data/hapus-data.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"divisi",component:DivisionComponent},
  {path:"tambah",component:TambahDataComponent},
  {path:"edit",component:EditDataComponent},
  {path:"hapus", component:HapusDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
