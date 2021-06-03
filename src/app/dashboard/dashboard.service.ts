import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/stock-models';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  readonly baseUrl = 'https://bootcamp-openapi-sample.herokuapp.com/bootcamp';
  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Stock[]>{

    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }
}
