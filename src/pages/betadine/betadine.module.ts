import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BetadinePage } from './betadine';

@NgModule({
  declarations: [
    BetadinePage,
  ],
  imports: [
    IonicPageModule.forChild(BetadinePage),
  ],
})
export class BetadinePageModule {}
