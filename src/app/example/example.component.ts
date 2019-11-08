import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  data: any[] = [
    { id: 2, name: 'B', sortNumber: 0 },
    { id: 6, name: 'F', sortNumber: 1 },
    { id: 3, name: 'C', sortNumber: 2 },
    { id: 1, name: 'A', sortNumber: 3 }
  ];
  constructor() { }

  ngOnInit() {
  }

  onDrop(e: any) {
    const { src, dest } = e;
    const srcIndex = this.data.findIndex(d => d.id === src);
    const destIndex = this.data.findIndex(d => d.id === dest);
    const deletedItems = this.data.splice(srcIndex, 1);
    this.data.splice(destIndex, 0, deletedItems[0]);
    let i = 0;
    this.data.map(d => {
      d.sortNumber = i;
      i++;
    });
  }

}
