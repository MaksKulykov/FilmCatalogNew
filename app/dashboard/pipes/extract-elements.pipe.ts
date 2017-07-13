import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
    name: 'extractElements'
} )

export class ExtractElements implements PipeTransform {
    transform(data: any[]): string {
        let list: string = '';
        data.forEach(element => {
            list += element.name + ', ';
        });
        return list.slice(0, -2);
    }
}