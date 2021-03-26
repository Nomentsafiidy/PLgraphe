import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ContrainteService {
    private contrainteReg: RegExp;
    private arithmeticOper: string[] = ['+', '-', '*', '/'];
    private comparisonOper: string[] = ['+', '-', '*', '/'];

    constructor() {}

    public isContrainte(var1: string, var2: string, contrainte: string): boolean {
        // let tmp = /^(+|-){0,1}[0-9]* $/;
        let tmp1 = new RegExp(`^(+|-){0,1}[0-9]*${var1}(+|-|*|/){1,1}${var2}(=|<=|>=){1,1}[0-9]{1,}$`, 'i');
        console.log('contrainte', contrainte);

        if (tmp1.test(contrainte)) {
            console.log(true);

            return true;
        } else {
            console.log(false);

            return false;
        }
    }
}
