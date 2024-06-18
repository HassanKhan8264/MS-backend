import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class EndpointService {
  private readonly URL: string;

  constructor(private _http: HttpClient) {
    this.URL = environment.server.self.getUrl();
  }
  createUser(payload) {
    return this._http.post(`${this.URL}/api/v1/addUser`, payload);
  }
  getAll() {
    return this._http.get(`${this.URL}/api/v1/getAllUsers`);
  }
}
