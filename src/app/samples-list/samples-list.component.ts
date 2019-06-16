import { Component } from '@angular/core';

import { samples } from '../samples';


@Component({
  selector: 'app-samples-list',
  templateUrl: './samples-list.component.html',
  styleUrls: ['./samples-list.component.css']
})
export class SamplesListComponent {
  samples = samples;

  download() {
    window.alert('Das samplepack wurde heruntergeladen.');
  }
}