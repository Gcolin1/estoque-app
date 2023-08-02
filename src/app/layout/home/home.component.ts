import { Component } from '@angular/core';
import { Produto } from '../../Produto';
import { ListaProdutoService } from './home.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {

  public produtos : Produto[] = []

  cadastro : FormGroup

  constructor(private service : ListaProdutoService){

    //montando formgroup 
    this.cadastro = new FormGroup({
      nome: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
      medida: new FormControl('', Validators.required),
      estoque: new FormControl('', Validators.required),
      fornecedor: new FormControl('', Validators.required),
      preco_custo: new FormControl('', Validators.required),
      preco_venda: new FormControl('', Validators.required)
    })
  }

  ngOnInit(){
    this.getAllProducts()
  }

  getAllProducts() : void {
    this.service.getProdutos().subscribe((res) => {
      this.produtos = res
      console.log(this.produtos)
    })
  }

  //função que vai ser chamada no htnl 
  onSubmit(cadastro : FormGroup) {
    console.log(JSON.stringify(this.cadastro.value))
    //função que esta enviando os dados do form para o service
      this.service.cadastrar(this.cadastro.value).subscribe(res => {
        console.log(res)
      })
  }
}

