import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DATE_FORMATS } from '@angular/material/core';

import * as moment from 'moment';
import { ModalDetalleVentaComponent } from '../../Modales/modal-detalle-venta/modal-detalle-venta.component';
import { Venta } from 'src/app/Interfaces/venta';
import { VentaService } from 'src/app/Services/venta.service';
import { UtilidadService } from 'src/app/Reutilizable/utilidad.service';

export const MY_DATA_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY'
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMMM YYYY'
  }
}

@Component({
  selector: 'app-historial-venta',
  templateUrl: './historial-venta.component.html',
  styleUrls: ['./historial-venta.component.css'],
  providers: [
    {provide: MY_DATA_FORMATS, useValue: MY_DATA_FORMATS}
  ]
})
export class HistorialVentaComponent implements OnInit, AfterViewInit {
  
  formularioBusqueda: FormGroup | undefined;
  opcionesBusqueda: any[] = [
    {value: 'fecha', descripcion: 'por fechas' },
    {value: 'numero', descripcion: 'Numero venta'}
  ]

  columnasTabla: string[] = ['fechaRegistro', 'numeroDocumento', 'tipoPago', 'total', 'accion']
  dataInicio: Venta[] = []
  datoListaVenta = new MatTableDataSource(this.dataInicio);
  @ViewChild(MatPaginator) paginacionTabla!: MatPaginator;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private _ventaServicio: VentaService,
    private _utilidadServicio: UtilidadService
  ) { 
    this.formularioBusqueda = this.fb.group({
      buscarPor: ['fecha'],
      numero: [''],
      fechaInicio: [''],
      fechaFin: ['']
    })
    
    this.formularioBusqueda.get('buscarPor')?.valueChanges.subscribe(value => {
      this.formularioBusqueda?.patchValue({
        numero: '',
        fechaInicio: '',
        fechaFin: ''
      })
    })
  }
  
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
