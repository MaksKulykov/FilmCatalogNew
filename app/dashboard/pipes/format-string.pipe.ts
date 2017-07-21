import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
    name: 'formatString'
} )

export class FormatString implements PipeTransform {
    transform(value: string): string {
        if (value.length > 200) {
            return value.slice(0,200) + '...';
        } else {
            return value;
        }
    }
}