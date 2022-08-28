import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DepositModalComponent } from '../deposit-modal/deposit-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  accounts = [
    {
      name: 'Hussein',
      balance: 1000
    },
    {
      name: 'Ahmad Rashid',
      balance: 2000
    }
  ]
  constructor(private modalCtrl: ModalController) { }
  async openModal(account) {
    const modal = await this.modalCtrl.create({
      component: DepositModalComponent,
      componentProps: {name:account.name,balance:account.balance},
      breakpoints: [ 0.8, 1],
      initialBreakpoint: 0.8,
      cssClass: 'custom-modal'
    });
    await modal.present();
    const data = await modal.onWillDismiss(); 
    console.log(data);
  }
}
