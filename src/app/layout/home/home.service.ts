import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class ListaProdutoService{

  private urlApi = "http://localhost:8080/produtos"

  constructor(private http : HttpClient) { }

  getProdutos(){
    return this.http.get<any>(this.urlApi)
  }

}