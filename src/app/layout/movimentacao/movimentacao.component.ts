import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ListaMovimentacaoService } from './movimentacao.service';
import { Movimentacao } from 'src/app/Movimentacao';
import { FormControl, FormGroup, NgControl, NgModel, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.css']
})

export class MovimentacaoComponent implements AfterViewInit{

  retirada : FormGroup
  idRetirada : FormGroup

  reposicao : FormGroup
  idReposicao : FormGroup

  public movimentacao : Movimentacao[] = []

  //tabela
  displayedColumns: string[] = ['id_produto', 'estoque', 'destino', 'motivo', 'responsavel', 'data', 'hora', 'tipo_de_movimentacao'];
  dataSource = new MatTableDataSource<Movimentacao>(this.movimentacao);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
   this.getAllMovimentacao()
  }

  constructor(private service : ListaMovimentacaoService){
    this.retirada = new FormGroup({
      estoque: new FormControl('', Validators.required),
      destino: new FormControl('', Validators.required),
      motivo: new FormControl('', Validators.required),
      responsavel: new FormControl('', Validators.required),
      data : new FormControl('', Validators.required),
      hora: new FormControl('', Validators.required),
      tipo_de_movimentacao: new FormControl('', Validators.required)
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
      tipo_de_movimentacao: new FormControl('', Validators.required)
    })

    this.idReposicao = new FormGroup({
      id: new FormControl('', Validators.required)
    })
  }
  
  ngOnInit(){
    
  }

  getAllMovimentacao() : void{
    this.service.getMovimentacao().subscribe((res) => {
      this.movimentacao = res
      console.log(this.movimentacao)
      this.dataSource = new MatTableDataSource<Movimentacao>(this.movimentacao);
      this.dataSource.paginator = this.paginator;
    })
  }

  //função que vai ser chamada no htnl 
  onSubmit(retirada : FormGroup) {
    //console.log(this.idRetirada.value.id)
    //console.log(JSON.stringify(this.retirada.value))
    //função que esta enviando os dados do form para o service
    if(this.retirada.valid){
      this.service.Retirar(this.retirada.value, this.idRetirada.value.id).subscribe(res => {
        console.log(res)
        location.reload()
      })
    }else{
      alert('produto invalido')
    }
  }

  //função que vai ser chamada no html 
  onSubmitRepor(reposicao : FormGroup) {
    //console.log(this.idReposicao.value.id)
    //console.log(JSON.stringify(this.reposicao.value))
    if(this.reposicao.valid){
      this.service.Repor(this.reposicao.value, this.idReposicao.value.id).subscribe(res => {
        console.log(res)
        location.reload()
      })
    }else{
      alert('produto invalido')
    }
      
  }
}





