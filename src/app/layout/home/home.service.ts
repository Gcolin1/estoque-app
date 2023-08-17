import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Produto } from "src/app/Produto";

@Injectable({
  providedIn: 'root'
})

export class ListaProdutoService{

  private urlApi = "http://localhost:8080/produtos"

  constructor(private http : HttpClient) { }

  getProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${this.urlApi}`)
  }

  //função que vai enviar os dados do form para a api
  cadastrar(cadastro: any){
    return this.http.post(this.urlApi, cadastro)
  }

}