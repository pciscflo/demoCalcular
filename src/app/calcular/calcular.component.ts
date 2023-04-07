import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.css']
})
export class CalcularComponent implements OnInit {
  pago: number = 0
  consumo: any = 0
  ngOnInit(): void {
     this.consumo = "";
  }

  calcularPago(): void {
    if (this.consumo <= 4) {
      this.pago = 50
    }
    if (this.consumo > 4 && this.consumo <= 8) {
      this.pago = 85
    }
    if (this.consumo > 8) {
      this.pago = 85 + 4.5 * (this.consumo - 8)
    }
  }

}
