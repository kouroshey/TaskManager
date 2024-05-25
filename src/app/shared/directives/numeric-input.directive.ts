import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumericInput]'
})

export class NumericInputDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInput(event) {
    const initialValue = this.el.nativeElement.value;
    const newValue = initialValue.replace(/[^0-9۰-۹٠-٩]/g, '');
    if (newValue !== initialValue) {
      this.el.nativeElement.value = newValue;
      event.stopPropagation();
    }
  }
}
