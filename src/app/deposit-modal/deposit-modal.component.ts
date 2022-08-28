import { Component, Input} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-deposit-modal',
  templateUrl: './deposit-modal.component.html',
  styleUrls: ['./deposit-modal.component.scss'],
})
export class DepositModalComponent {
  GA = [
    "All",
    "some",
    "Few",
    "All",
    "some",
    "Few",
   "All",
    "some",
    "Few",
    
  ];
  Operator=[
    'equals To',
    'Not equals to',
    'less than'
  ];
  City=[
    'Jalandar',
    'Bagalkot',
    'Begusarai'
  ]
  selected = "----"
  
  update(e){
    this.selected = e.target.value
  }
  @Input() name:string;
  @Input() balance : number;
balanceInput=new FormControl('',Validators.required)
  constructor( private modalCtrl:ModalController) { }

  
  dismissModal(){
 this.modalCtrl.dismiss(null,'cancel');
  }
  onDeposit(){
const   newBalance= this.balance+this.balanceInput.value;
this.modalCtrl.dismiss(newBalance, 'deposited');
  }
  add(){
    
  }
}
