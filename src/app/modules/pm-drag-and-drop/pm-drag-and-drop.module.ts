import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmDraggableDirective } from './pm-draggable.directive';
import { PmSortablePipe } from './pm-sortable.pipe';

@NgModule({
  declarations: [PmDraggableDirective, PmSortablePipe],
  imports: [
    CommonModule
  ],
  exports: [
    PmSortablePipe,
    PmDraggableDirective
  ]
})
export class PmDragAndDropModule {
  constructor(@Optional() @SkipSelf() moduleItSelf: PmDragAndDropModule) {
    if (!this.isDragAndDropSupported()) {
      throw new TypeError('DragAndDrop is not supported');
    }

    if (moduleItSelf) {
      throw new TypeError(`PmDragAndDropModule is imported twice.`);
    }
  }

  isDragAndDropSupported(): boolean {
    const div = document.createElement('div');
    return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
  }
 }
