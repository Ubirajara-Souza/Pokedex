import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[rollOnScroll]'
})
export class RollOnScrollDirective {

  @HostListener('window:scroll', []) onWindowScroll() {
    const rotation = `translateY(-50%) rotateZ(${window.scrollY/15}deg)`
    
    this.renderer.setStyle(this.ElementRef.nativeElement, 'transform', rotation)
  }

  constructor(
    private ElementRef: ElementRef,
    private renderer: Renderer2
  ) { }

}
