import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Http } from '@angular/http';

@Injectable()
export class BookingService extends HttpService {

  constructor(public http:Http) {
    super(http);
  }

  makeReservation(username:string, cinema_name:string, cinema_location:string, party_datetime:string,
                  hall:string, payment:boolean ,tickets, tickets_price: number, movie_id: number) {
    return this.post("userBooking/makeReservation", {
      'username': username,
      'cinema_name': cinema_name,
      'cinema_location': cinema_location,
      'date_time': party_datetime,
      'hall': hall,
      'payment': payment,
      'tickets': tickets,
      'price': tickets_price,
      'movie': movie_id,
      'comment': ""
    });
  }

  getMoviesForThisCinema(movie_id: number){
    return this.get('/userBooking/getCinemasForThatMovie/'+ movie_id);
  }

  usePromoCode(price: number, code: string, name: string, location: string){
      return this.post("userBooking/usePromoCode", {
        'price': price,
        'code': code,
        'name': name,
        'location': location
      });
    }

}
