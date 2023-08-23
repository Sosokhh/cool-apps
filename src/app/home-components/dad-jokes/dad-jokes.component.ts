import {Component, OnInit} from '@angular/core';
import {DadJokesService} from "./dad-jokes.service";


@Component({
  selector: 'app-dad-jokes',
  templateUrl: './dad-jokes.component.html',
  styleUrls: ['./dad-jokes.component.scss'],
  providers: [DadJokesService]
})
export class DadJokesComponent implements OnInit{
  joke: string = '';

  constructor(private dadJokesService: DadJokesService) {}

  ngOnInit() {
    this.generateJoke();
  }

  generateJoke() {
    this.dadJokesService.getJokes().subscribe(res => {
      this.joke = res.joke;
    });
  }
}
