import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public estoque = 0
  public saidas = 0
  public entradas = 0

  
  constructor(private service : DashboardService){

  }

  ngOnInit(){
    this.getAllEstoque()
    this.getAllSaidas()
    this.getAllEntradas()
  }

  getAllEstoque() : void {
    this.service.getEstoqueTotal().subscribe((res) => {
      this.estoque = res
      //console.log(this.estoque)
    })
  }

  getAllSaidas() : void {
    this.service.getSaidasTotal().subscribe((res) => {
      this.saidas = res
      //console.log(this.saidas)
    })
  }

  getAllEntradas() : void {
    this.service.getEntradasTotal().subscribe((res) => {
      this.entradas = res
      console.log(this.entradas)
    })
  }


}
