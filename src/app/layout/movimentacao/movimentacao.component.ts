import { Component } from '@angular/core';
import { ListaMovimentacaoService } from './movimentacao.service';
import { Movimentacao } from 'src/app/Movimentacao';
import { FormControl, FormGroup, NgControl, NgModel, Validators } from '@angular/forms';

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.css']
})

export class MovimentacaoComponent{

  retirada : FormGroup
  idRetirada : FormGroup

  reposicao : FormGroup
  idReposicao : FormGroup

  public movimentacao : Movimentacao[] = []

  constructor(private service : ListaMovimentacaoService){
    this.retirada = new FormGroup({
      estoque: new FormControl('', Validators.required),
      destino: new FormControl('', Validators.required),
      motivo: new FormControl('', Validators.required),
      responsavel: new FormControl('', Validators.required),
      data : new FormControl('', Validators.required),
      hora: new FormControl('', Validators.required),
    })

    this.idRetirada = new FormGroup({
      id: new FormControl('', Validators.required)
    })

    this.reposicao = new FormGroup({
      estoque: new FormControl('', Validators.required),
      destino: new FormControl('', Validators.required),
      motivo: new FormControl('', Validators.required),
      responsavel: new FormControl('', Validators.required),
      data : new FormControl('', Validators.required),
      hora: new FormControl('', Validators.required),
    })

    this.idReposicao = new FormGroup({
      id: new FormControl('', Validators.required)
    })
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

  //função que vai ser chamada no htnl 
  onSubmit(retirada : FormGroup) {
    //console.log(this.idRetirada.value.id)
    //console.log(JSON.stringify(this.retirada.value))
    //função que esta enviando os dados do form para o service
      this.service.Retirar(this.retirada.value, this.idRetirada.value.id).subscribe(res => {
        console.log(res)
        location.reload()
      })
  }

  //função que vai ser chamada no htnl 
  onSubmitRepor(reposicao : FormGroup) {
    //console.log(this.idReposicao.value.id)
   // console.log(JSON.stringify(this.reposicao.value))
      this.service.Repor(this.reposicao.value, this.idReposicao.value.id).subscribe(res => {
        console.log(res)
        location.reload()
      })
  }
}





