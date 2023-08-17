import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Produto } from 'src/app/Produto';
import { ListaProdutoService } from 'src/app/layout/home/home.service';

@Component({
  selector: 'app-alert-estoque-baixo',
  templateUrl: './alert-estoque-baixo.component.html',
  styleUrls: ['./alert-estoque-baixo.component.css']
})
export class AlertEstoqueBaixoComponent {
  produtos : Produto[] = []
  produtosBaixos : Produto[] = []

  constructor(private service : ListaProdutoService, public dialog: MatDialog){

  }

  ngOnInit(){
    this.verificarEstoque()
  }

  verificarEstoque(): void{
    this.service.getProdutos().subscribe((res) => {
      this.produtos = res
      console.log(this.produtos)
      for(let i = 0; i < this.produtos.length; i++){
        if(this.produtos[i].estoque <= 10){
            this.produtosBaixos.push(this.produtos[i])
            console.log(this.produtosBaixos)
        }
      }
    })
  }

}
