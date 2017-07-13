import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
    name: 'convertBudget'
} )

export class ConvertBudget implements PipeTransform {
    transform(budget: number): string {
        return budget.toString().slice(0, -6);
    }
}