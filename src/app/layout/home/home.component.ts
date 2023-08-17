import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Produto } from '../../Produto';
import { ListaProdutoService } from './home.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ModalAdicionarProdutoComponent } from 'src/app/components/modal-adicionar-produto/modal-adicionar-produto.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AlertEstoqueBaixoComponent } from 'src/app/components/alert-estoque-baixo/alert-estoque-baixo.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements AfterViewInit {
  cadastro : FormGroup
  produtos : Produto[] = []

  //tabela
  displayedColumns: string[] = ['id', 'nome', 'categoria', 'descricao', 'medida', 'estoque', 'fornecedor', 'preco_custo', 'preco_venda'];
  dataSource = new MatTableDataSource<Produto>(this.produtos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
   this.getAllProducts()
  }


  constructor(private service : ListaProdutoService, public dialog: MatDialog){

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


  //função abrir modal
  openDialog() {
    const dialogRef = this.dialog.open(ModalAdicionarProdutoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openAlert() {
    const dialogRef = this.dialog.open(AlertEstoqueBaixoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
 
  ngOnInit(){
    
  }

  getAllProducts() : void{
    this.service.getProdutos().subscribe((res) => {
      this.produtos = res
      this.dataSource = new MatTableDataSource<Produto>(this.produtos);
      this.dataSource.paginator = this.paginator;
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


