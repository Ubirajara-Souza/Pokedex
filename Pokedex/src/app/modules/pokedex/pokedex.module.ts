import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListComponent } from './views/list/list.component';
import { MyNumberPipe } from 'src/app/pipes/my-number.pipe';
import { InformationComponent } from './views/information/information.component';

const CompList = [ListItemComponent, ListComponent]

@NgModule({
  declarations: [...CompList, MyNumberPipe, InformationComponent],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    FormsModule
  ],
  exports: [...CompList]
})
export class PokedexModule { }
