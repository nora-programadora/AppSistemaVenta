import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ProductoService } from 'src/app/Services/producto.service';
import { VentaService } from 'src/app/Services/venta.service';
import { UtilidadService } from 'src/app/Reutilizable/utilidad.service';
import { Producto } from 'src/app/Interfaces/producto';
import { Venta } from 'src/app/Interfaces/venta';
import { DetalleVenta } from 'src/app/Interfaces/detalle-venta';
import Swal from 'sweetalert2';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-modal-detalle-venta',
  templateUrl: './modal-detalle-venta.component.html',
  styleUrls: ['./modal-detalle-venta.component.css']
})
export class ModalDetalleVentaComponent implements OnInit {
  tipoPago: string = 'Por Fechas';
  fechaRegistro: string | undefined = '';
  numeroDocumento: string | undefined = '';
  detalleVenta: DetalleVenta[] = [];
  total: string = '';
  columnasTabla: string[] = ['fechaRegistro', 'numeroVenta', 'tipoPago', 'total'];

  constructor(@Inject(MAT_DIALOG_DATA) public _venta: Venta) { 
    this.tipoPago = _venta.tipoPago;
    this.fechaRegistro = _venta.fechaRegistro;
    this.numeroDocumento = _venta.numeroDocumento;
    this.detalleVenta = _venta.detalleVenta;
    this.total = _venta.totalTexto

  }

  ngOnInit(): void {
  }

}
