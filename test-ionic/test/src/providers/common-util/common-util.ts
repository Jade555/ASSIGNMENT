import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Question1Model } from "../../model/question1";
import { Question2Model } from "../../model/question2";
import { Question3Model } from "../../model/question3";

/*
  Generated class for the CommonUtilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonUtilProvider {
  constructor(public http: HttpClient) {
    console.log("Hello CommonUtilProvider Provider");
  }

  private baseURL = "http://localhost:3000/";

  callService1(index: number = 1) {
    var http = this.http;
    var url = this.baseURL + "q1/" + index;
    return new Promise(function(resolve, reject) {
      http.get(url).subscribe(
        (data: Array<Question1Model>) => {
          resolve(data);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  callService2() {
    var http = this.http;
    var url = this.baseURL + "q2";
    return new Promise(function(resolve, reject) {
      http.get(url).subscribe(
        (data: Array<Question2Model>) => {
          resolve(data);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  callService3(index: number = 1) {
    var http = this.http;
    var url = this.baseURL + "q3/" + index;
    return new Promise(function(resolve, reject) {
      http.get(url).subscribe(
        (data: Array<Question3Model>) => {
          resolve(data);
        },
        error => {
          reject(error);
        }
      );
    });
  }
}
