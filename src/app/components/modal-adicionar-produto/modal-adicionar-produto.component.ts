import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ListaProdutoService } from 'src/app/layout/home/home.service';

@Component({
  selector: 'app-modal-adicionar-produto',
  templateUrl: './modal-adicionar-produto.component.html',
  styleUrls: ['./modal-adicionar-produto.component.css']
})

export class ModalAdicionarProdutoComponent {

  cadastro : FormGroup

  constructor(public dialog: MatDialog, private service : ListaProdutoService){
    this.cadastro = new FormGroup({
      nome: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
      medida: new FormControl('', Validators.required),
      estoque : new FormControl('', Validators.required),
      fornecedor: new FormControl('', Validators.required),
      precoCusto: new FormControl('', Validators.required),
      precoVenda: new FormControl('', Validators.required)
    })
  }
  
  onSubmit(cadastro : FormGroup) {
      console.log(this.cadastro)
        this.service.cadastrar(this.cadastro.value).subscribe(res => {
          console.log(res)
          location.reload()
      })
  }

}

