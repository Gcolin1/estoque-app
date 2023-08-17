import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class DashboardService{

  private urlApi = "http://localhost:8080/produtos"
  private urlMovi = "http://localhost:8080/movimentacao"


  constructor(private http : HttpClient) { }

  getEstoqueTotal(){
    return this.http.get<any>(`${this.urlApi}/estoque-maximo`)
  }

  getSaidasTotal(){
    return this.http.get<any>(`${this.urlMovi}/total-retirada`)
  }

  getEntradasTotal(){
    return this.http.get<any>(`${this.urlMovi}/total-reposicao`)
  }


}