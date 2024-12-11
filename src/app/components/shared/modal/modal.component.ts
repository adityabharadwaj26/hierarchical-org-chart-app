import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ClrModal } from '@clr/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() opened: boolean = false;
  @Output() closedEvent = new EventEmitter<any>();
  @ViewChild('modal', { static: true }) modal: ClrModal | undefined;
  size: string = 'lg';

  cancelModal() {
    this.opened = false;
  }
  saveModal() {
    this.closedEvent.emit();
  }
}
