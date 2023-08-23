import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

interface Joke {
  id: string,
  joke: string,
  status: number
}

@Injectable()
export class DadJokesService {

  constructor(private http: HttpClient) {}

  getJokes() {
    const config = {
      headers: {
        'Accept': 'application/json'
      }
    }
    return this.http.get<Joke>('https://icanhazdadjoke.com/', config);
  }
}
