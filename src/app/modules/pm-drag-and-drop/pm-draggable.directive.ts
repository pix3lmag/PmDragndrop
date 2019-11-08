import { Directive, ElementRef, HostListener, OnInit, Renderer, Input, OnChanges, Output, EventEmitter } from '@angular/core';

export class pmDropEvent {
  constructor(public src: number, public dest: number) {
  }
}

@Directive({
  selector: '[pmDraggable]'
})
export class PmDraggableDirective implements OnInit, OnChanges {
  @Input() draggableId: number = null;
  @Output() pmDrop: EventEmitter<pmDropEvent> = new EventEmitter<pmDropEvent>();
  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  ngOnInit(): any {
    this.setStyle();
    this.checkRequiredInput();
  }

  ngOnChanges(changes: any) {
    this.checkRequiredInput();
  }

  checkRequiredInput() {
    if (this.draggableId === null) {
      throw new Error('Attribute "draggableId" is required!');
    }
  }

  @HostListener('dragstart', ['$event']) onDragStart(e: any) {
    this.handleDragStart(e);
  }
  @HostListener('drag', ['$event']) onDrag(e: any) {
    this.handleDrag(e);
  }
  @HostListener('dragenter', ['$event']) onDragEnter(e: any) {
    this.handleDragEnter(e);
  }
  @HostListener('dragleave', ['$event']) onDragLeave(e: any) {
    this.handleDragLeave(e);
  }
  @HostListener('dragover', ['$event']) onDragOver(e: any) {
    this.handleDragOver(e);
  }
  @HostListener('drop', ['$event']) onDrop(e: any) {
    this.handleDrop(e);
  }
  @HostListener('dragend', ['$event']) onDragEnd(e: any) {
    this.handleDragEnd(e);
  }

  private handleDrag(e: any) {

  }

  private handleDrop(e: any) {
    const id = e.dataTransfer.getData('text');
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    this.pmDrop.emit(new pmDropEvent(parseInt(id), this.draggableId));
    this.setStyle();
    return false;
  }

  private handleDragEnd(e: any) {
    this.setStyle();
  }

  private handleDragOver(e: any): boolean {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
  }

  private handleDragEnter(e: any) {
    this.renderer.setElementStyle(this.el.nativeElement, 'border', '2px dashed #000');
  }

  private handleDragLeave(e: any) {
    this.renderer.setElementStyle(this.el.nativeElement, 'border', null);
  }

  private handleDragStart(e: any) {
    this.renderer.setElementStyle(this.el.nativeElement, 'opacity', '0.4');
    e.dataTransfer.setData('text', this.draggableId);
    // this.dragSourceElement = this.el.nativeElement;
    // e.dataTransfer.effectAllowed = 'move';
    // e.dataTransfer.setData('text/html', this.el.nativeElement.innerHtml);
  }

  private setStyle() {
    this.renderer.setElementAttribute(this.el.nativeElement, 'draggable', 'true');
    this.renderer.setElementStyle(this.el.nativeElement, 'border', null);
    this.renderer.setElementStyle(this.el.nativeElement, 'opacity', '1');
    this.renderer.setElementStyle(this.el.nativeElement, '-moz-user-select', 'none');
    this.renderer.setElementStyle(this.el.nativeElement, '-khtml-user-select', 'none');
    this.renderer.setElementStyle(this.el.nativeElement, '-webkit-user-select', 'none');
    this.renderer.setElementStyle(this.el.nativeElement, 'user-select', 'none');
    this.renderer.setElementStyle(this.el.nativeElement, '-khtml-user-drag', 'element');
    this.renderer.setElementStyle(this.el.nativeElement, '-webkit-user-drag', 'element');
  }
}
