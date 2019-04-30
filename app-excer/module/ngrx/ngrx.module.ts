import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './actions/ngrx.reducer';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { DispComponent } from './disp/disp.component';

@NgModule({
  declarations: [ReadComponent, CreateComponent, DispComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      tutorial: reducer
    })
  ]
})
export class NgrxModule { }
