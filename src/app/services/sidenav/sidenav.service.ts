import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject"

@Injectable()
export class SidenavService {
  private dataObs$ = new Subject<boolean>();
  private opened = false;

  isOpen() {
    return this.dataObs$;
  }

  open() {
    this.opened = true;
    this.dataObs$.next(this.opened);
  }

  close() {
    this.opened = false;
    this.dataObs$.next(this.opened);
  }

  toggle() {
    this.opened = !this.opened;
    this.dataObs$.next(this.opened);
  }
}
