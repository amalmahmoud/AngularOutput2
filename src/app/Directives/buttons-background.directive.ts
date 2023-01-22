import { Directive, ElementRef, Renderer2,Input } from '@angular/core';

@Directive({
  selector: '[appButtonsBackground]'
})
export class ButtonsBackgroundDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { }


  @Input("appButtonsBackground") set ButtonColor(typename:string)
  {
    if(typename === 'Courses')
    {
      this.renderer.setStyle(this.element.nativeElement,'backgroundColor','Orange');
    }
    else{
      this.renderer.setStyle(this.element.nativeElement,'backgroundColor','Blue');
      this.renderer.setStyle(this.element.nativeElement,'color','White');
    }

  }
}
