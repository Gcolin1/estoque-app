import { Component } from '@angular/core';
import { Produto } from '../../Produto';
import { ListaProdutoService } from './home.service';
import { Router } from '@angular/router';
import {MatTableModule} from '@angular/material/table';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {

  public produtos : Produto[] = []

  constructor(private service : ListaProdutoService, private router : Router){

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
}

