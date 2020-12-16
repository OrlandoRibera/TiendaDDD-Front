import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../../services/product.service';
import { Producto } from '../../models/Producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  public productos: Producto[] = []

  constructor(
    private _productService: ProductService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this._productService.getAll().subscribe(result => {
      this.productos = result.productList;
    });
  }

  copied_message() {
    this._snackBar.open('¡Id copiado!', '', {
      duration: 2000
    });
  }

}
