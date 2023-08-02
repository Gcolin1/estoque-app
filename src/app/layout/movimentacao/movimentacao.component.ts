import { Component, OnInit } from '@angular/core';
import { ListaMovimentacaoService } from './movimentacao.service';
import { Movimentacao } from 'src/app/Movimentacao';

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.css']
})

export class MovimentacaoComponent{
  
  public movimentacao : Movimentacao[] = []

  constructor(private service : ListaMovimentacaoService){

  }
  
  ngOnInit(){
    this.getAllMovimentacao()
  }

  getAllMovimentacao() : void{
    this.service.getMovimentacao().subscribe((res) => {
      this.movimentacao = res
      console.log(this.movimentacao)
    })
  }
}





