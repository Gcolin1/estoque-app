import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class ListaMovimentacaoService{

  private urlApi = "http://localhost:8080/movimentacao"

  constructor(private http : HttpClient) { }

  getMovimentacao(){
    return this.http.get<any>(this.urlApi)
  }

  //função que vai enviar os dados do form para a api
  cadastrar(cadastro: any){
    return this.http.post(this.urlApi, cadastro)
  }

}