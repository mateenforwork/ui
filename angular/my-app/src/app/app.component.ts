import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  asdf(inputVar: string) {
    const asdf = inputVar;
    console.log(asdf);
  }
}
