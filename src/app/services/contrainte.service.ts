import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContrainteService {
  constructor() {}

  public isContrainte(contrainte: string): boolean {
    if (contrainte) {
      return true;
    } else {
      return false;
    }
  }
}
