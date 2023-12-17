import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCommonService {

  constructor(private http: HttpClient) {
  }

  private apiUrl: string = "https://1.api.fy23ey06.careers.ifelsecloud.com/";

  public getApiData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}
