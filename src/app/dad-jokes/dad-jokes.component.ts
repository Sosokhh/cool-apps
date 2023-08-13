import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface Joke {
  id: string,
  joke: string,
  status: number
}


@Component({
  selector: 'app-dad-jokes',
  templateUrl: './dad-jokes.component.html',
  styleUrls: ['./dad-jokes.component.scss']
})
export class DadJokesComponent implements OnInit{
  joke: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.generateJoke();
  }

  generateJoke() {
    const config = {
      headers: {
        'Accept': 'application/json'
      }
    }
    this.http.get<Joke>('https://icanhazdadjoke.com/', config).subscribe(res => {
      this.joke = res.joke;
    });
  }
}
