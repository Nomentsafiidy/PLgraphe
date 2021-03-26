import { Component, OnInit } from '@angular/core';
import { ContrainteService } from 'src/app/services/';
@Component({
    selector: 'app-plgraphe',
    templateUrl: './plgraphe.page.html',
    styleUrls: ['./plgraphe.page.scss'],
})
export class PlgraphePage implements OnInit {
    public var1: string;
    public var2: string;

    public contraintes: {
        id: number;
        contrainte: string;
    }[] = [
        {
            id: 0,
            contrainte: '',
        },
    ];

    constructor(private contrainteService: ContrainteService) {}

    ngOnInit(): void {}

    public contrainteChange(event: any, index: number) {
        console.log('contraintes', this.contraintes);

        // console.log('contrainte i', index);
        // this.contraintes[index] = event.target.value;
        // console.log(this.contraintes[index]);
        // const contrainte: string = event.target.value;
        // if (this.contrainteService.isContrainte(contrainte)) {
        //   if (this.contraintes.length <= index) {
        //     this.contraintes.push();
        //   }
        // }
    }

    private rebuildContraintes() {}

    public addContraintInput() {
        this.contraintes.push({
            id: this.contraintes.length,
            contrainte: '',
        });
    }

    public removeConstraint(id: number) {
        let tmp = this.contraintes.filter((constrainte) => {
            return constrainte.id !== id ? constrainte : null;
        });
        this.contraintes = tmp.filter((constrainte, id) => {
            constrainte.id = id;
            return constrainte;
        });
    }
}
