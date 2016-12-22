import {Component} from "@angular/core";
import {Person} from "./person";

@Component({
  selector: 'ski-jumpers',
  templateUrl: './ski-jumpers.component.html',
  styleUrls: ['./ski-jumpers.component.css']
})
export class SkiJumpers {
  private skiJumpers: Person[] = [
    { name: 'Piotr', surname: 'Zyla' },
    { name: 'Kamil', surname: 'Stoch' },
    { name: 'Maciej', surname: 'Kot' }];
}
