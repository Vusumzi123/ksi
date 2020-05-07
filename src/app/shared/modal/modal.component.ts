import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() isDialogModal: boolean;
  @Input() btnOkText: string;
  @Input() btnCancelText: string;
  @Input() body: string;
  @Input() title: string;
  @Output() acceptEvent: EventEmitter<any> = new EventEmitter();
  @Output() declineEvent: EventEmitter<any> = new EventEmitter();

  constructor(private activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

  public dismiss() {
    this.activeModal.dismiss();
  }

  public onAccept() {
    this.acceptEvent.emit();
  }

  public onDecline() {
    this.declineEvent.emit();
  }
}
