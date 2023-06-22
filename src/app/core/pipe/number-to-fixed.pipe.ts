import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "numberToFixed",
})
export class NumberToFixedPipe implements PipeTransform {
  transform(value: number): number {
    return +value.toFixed();
  }
}
