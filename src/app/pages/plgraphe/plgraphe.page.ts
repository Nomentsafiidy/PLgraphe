import { Component, OnInit } from '@angular/core';
import { ConstraintService } from 'src/app/services/';
import { Constraint } from 'src/app/models/constraint';
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

  public constrainte: Constraint;

  constructor(private constraintService: ConstraintService) {}

  ngOnInit(): void {
    this.constrainte = new Constraint(1, 'test');
  }

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

  public checkContrainte(id: number) {
    // if (this.var1 && this.var1 !== '' && this.var2 && this.var2 !== '') {
    //   if (
    //     this.contrainteService.isContrainte(
    //       this.var1,
    //       this.var2,
    //       this.contraintes[id]
    //     )
    //   ) {
    //     return '';
    //   }
    //   return 'f_input_danger';
    // }
    // return '';
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
