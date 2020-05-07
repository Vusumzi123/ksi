import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

import { ModalComponent } from './modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) { }

  dialogModal(modalData: ModalDataI): Promise<boolean> {
    modalData.dialogSize = modalData.dialogSize || 'sm';
    modalData.autoClose = modalData.autoClose === undefined ? true : modalData.autoClose;
    modalData.isDialogModal = modalData.isDialogModal === undefined ? true : modalData.isDialogModal;
    modalData.title = modalData.title || 'KSI dice.';
    modalData.body = modalData.body || 'este es un modal con contenido predefinido.';
    modalData.okButtonText = modalData.okButtonText || 'Aceptar';
    modalData.cancelButtonText = modalData.cancelButtonText || 'cancelar';
    modalData.backdrop = modalData.backdrop === undefined ? true : modalData.backdrop;
    modalData.scrollable = modalData.scrollable === undefined ? false : modalData.scrollable;
    const propsObj = {
      size: modalData.dialogSize,
      backdrop: modalData.backdrop,
      scrollable: modalData.scrollable
    };
    const modalRef = this.modalService.open(ModalComponent, propsObj);
    modalRef.componentInstance.title = modalData.title;
    modalRef.componentInstance.isDialogModal = modalData.isDialogModal;
    modalRef.componentInstance.body = modalData.body;
    modalRef.componentInstance.btnOkText = modalData.okButtonText;
    modalRef.componentInstance.btnCancelText = modalData.cancelButtonText;
    return new Promise( (resolve, reject) => {
      modalRef.componentInstance.acceptEvent.subscribe(() => {
        if ( modalData.autoClose ) { modalRef.close(); }
        resolve();
      });
      modalRef.componentInstance.declineEvent.subscribe(() => {
        if ( modalData.autoClose ) { modalRef.close(); }
        reject();
      });
    });
  }
}

interface ModalDataI {
  title?: string;
  body?: string;
  okButtonText?: string;
  cancelButtonText?: string;
  dialogSize?: 'sm' | 'lg';
  autoClose?: boolean;
  isDialogModal?: boolean;
  backdrop?: boolean | 'static';
  scrollable?: boolean;
}
