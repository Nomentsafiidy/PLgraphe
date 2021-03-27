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

  public constraints: Constraint[] = [new Constraint(0, '')];

  constructor(private constraintService: ConstraintService) {}

  ngOnInit(): void {}

  public contrainteChange(event: any, index: number) {
    console.log('contraintes', this.constraints);

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
    this.constraints.push(new Constraint(this.constraints.length, ''));
  }

  public removeConstraint(id: number) {
    let tmp: Constraint[] = this.constraints.filter(
      (constraint: Constraint) => {
        return constraint.getId() !== id ? constraint : null;
      }
    );
    this.constraints = tmp.filter((constraint: Constraint, id: number) => {
      constraint.setId(id);
      return constraint;
    });
  }
}
