import { Component } from '@angular/core';

import { samplePacks } from '../samplePacks';

@Component({
  selector: 'app-samplePacks-list',
  templateUrl: './samplePacks-list.component.html',
  styleUrls: ['./samplePacks-list.component.css']
})
export class SamplePackListComponent {
  samplePacks = samplePacks;

  download() {
    window.alert('Das samplepack wurde heruntergeladen.');
  }
}
