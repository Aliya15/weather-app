import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";

@Directive({
  selector: "[appInputAutoresize]",
})
export class InputAutoresizeDirective {
  // @Input() inputValue?: string;
  // constructor(private _elementRef: ElementRef) {}
  //
  // @HostListener(':input')
  // onInput() {
  //   this.resize();
  // }
  //
  // ngOnInit() {
  //   if (this._elementRef.nativeElement.scrollWidth) {
  //     setTimeout(() => this.resize());
  //   }
  // }
  //
  // ngOnChanges(changes: SimpleChanges): void {
  //   !this._elementRef.nativeElement.value.length ? console.log('hghghghgh') : '';
  // }
  //
  // resize() {
  //   this._elementRef.nativeElement.style.width = this._elementRef.nativeElement.scrollWidth + 'px';
  // }
}
