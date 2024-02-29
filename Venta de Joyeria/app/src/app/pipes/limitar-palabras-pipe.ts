import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'LimitarPalabras'
})
export class LimitarPalabrasPipe  implements PipeTransform{
    debugger
    transform(value: string, limite:number) {
        this.debugger
        if(!value) return '';
        const palabras = value.split(' ');
        if(palabras.length > limite){
            debugger
            return palabras.slice(0,limite).join(' ') + '...';
        }
        return value;
    }
}
