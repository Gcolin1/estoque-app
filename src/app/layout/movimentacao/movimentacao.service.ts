import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Movimentacao } from "src/app/Movimentacao";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class ListaMovimentacaoService{

  private urlApi = "http://localhost:8080/movimentacao"

  constructor(private http : HttpClient) { }

  getMovimentacao(): Observable<Movimentacao[]>{
    return this.http.get<Movimentacao[]>(`${this.urlApi}`)
  }

  //função que vai enviar os dados do form para a api
  Retirar(cadastro: any, id : any){
    return this.http.put(`${this.urlApi}/${id}`, cadastro)
  }

  Repor(cadastro: any, id : any){
    return this.http.put(`${this.urlApi}/repor/${id}`, cadastro)
  }

}