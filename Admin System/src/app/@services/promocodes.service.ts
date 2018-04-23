import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpService } from './http.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';


@Injectable()
export class PromocodesService extends HttpService {

  constructor(public cookie: CookieService, public http: Http) {
    super(cookie, http);
   }

  /**
  * Sends get request to get the promocodes data:
  * (Promocode, type, value, cinema name that the promocode is used in, cinema location)
  * @returns Array of JSON objects of promocodes
  */
  getPromocodes(){
    return this.get('promocodes', { headers: {'authorization': 'Token 1000' } });
  }

  /**
  * Sends get request to get the promocode data:
  * (Promocode, type, value)
  * @returns Array of JSON object of promocode
  */
  getPromocodeAttr(promocodeValue: string){
    return this.get('promocodes/' + promocodeValue, { headers: {'authorization': 'Token 1000' } });
  }

  /**
  * GET request to get promocodes with certain code from database
  * @returns Array of JSON object of promocode
  */
  filterPromocode(promocodeValue: string){
    return this.get('promocodes/filter/promocode/' + promocodeValue, { headers: {'authorization': 'Token 1000' } });
  }

  /**
  * GET request to get promocodes with certain cinema from database
  * @returns Array of JSON object of promocode
  */
  filterCinema(cinema: string){
    return this.get('promocodes/filter/cinema/' + cinema, { headers: {'authorization': 'Token 1000' } });
  }
  
  getPromocodesAndCinemas(){
    return this.get('promocodes/viewPromocodesAndCinemas', { headers: {'authorization': 'Token 1000' } })
  }

  /**
   * Sends post request to update a promocode:
   * (Promocode, promocode type, promocode value)
   * @param promocode 
   * @param type 
   * @param value 
   */
  editPromocode(promocode: string, type: string, value: string){
    return this.post('promocodes/edit',{
      "promocode": promocode,
      "type": type,
      "value": value,
      headers: {'authorization': 'Token 1000' }
    })
  }

  assignPromocodeToCinema(promocode : string,cinemaName : string,cinemaLocation : string){
    return this.post('promocodes/assignPromocodes',{
      "promocode":promocode,
      "cinema_location":cinemaLocation,
      "cinema_name":cinemaName,
      headers: {'authorization': 'Token 1000' }
    })
  }

  addPromocodes(promocode:string,type:string,value:string){
    return this.post('promocodes/addPromocode',{
      "promocode":promocode,
      "type":type,
      "value":value,
      headers: {'authorization': 'Token 1000' }
    })
  }

  deletePromocode(promocode: string){
    return this.post('/promocodes/deletePromocode/'+promocode, { headers: {'authorization': 'Token 1000' } })
  }

 
}
