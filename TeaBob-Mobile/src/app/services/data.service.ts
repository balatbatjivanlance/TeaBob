import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}
  

  apiURL = "http://localhost/TeaBob/TeaBob-Responsive/api/";

  // apiURL = "http://teabob.xyz/api/";
  

  private subject = new Subject<any>()

  sendApiRequest(method:any, data:any) {
    return <any>(
      this.http.post(this.apiURL + method, btoa(JSON.stringify(data)))
     
    );
  }

  sendUpdate(message: string) {
    this.subject.next({ text: message })
  }

  getUpdate(): Observable<any> {
    return this.subject.asObservable()
  }

  sendApiRequest2(method: string, data: any, condition: string) {
    return <any>(
      this.http.post(this.apiURL + method + condition, btoa(JSON.stringify(data)))
    )
  }

}
