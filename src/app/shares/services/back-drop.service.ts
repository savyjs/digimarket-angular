import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, share, shareReplay, Subject} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BackDropService {

  public state = new BehaviorSubject(false);
  public stateObservable = this.state.asObservable();

  constructor() {
    this.state.subscribe(val => {
      console.log('from service:', {val}, this.state.getValue())
    })
  }


}
