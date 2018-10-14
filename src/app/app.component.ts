import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'a6-l5-rx-pipes';

  ngOnInit() {
    const obs = interval(1000)
                // .pipe(take(3));
                .pipe(take(3), map(v => (v + 1)));
                // .pipe(take(3), map(v => new Date()));
    obs.subscribe(value => console.log('Subscriber ' + value));
  }
}
