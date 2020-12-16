import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CitaService } from '../../services/cita.service';
import { FormTrabajoService } from '../../services/form-trabajo.service';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.scss']
})
export class CitaComponent implements OnInit {

  citas: any[] = [];

  public form = {
    date: '',
    detail: ''
  }

  constructor(
    private _citaService: CitaService,
    private _formService: FormTrabajoService,
    private _route: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this._citaService.getAll().subscribe(result => {
      this.citas = result.appoinments;
    });
  }

  cancelar(id) {
    this._citaService.cancelOne(id).subscribe(result => {
      window.location.reload();
    });
  }

  addForm(citaId) {
    const obj = {
      Detail: this.form.detail,
      Date: this.form.date,
      Appointment: { AppointmentId: citaId }
    };
    this._formService.insertOne(obj).subscribe(result => {
      this._snackBar.open('¡Insertado!', '', {
        duration: 2000
      });
      window.location.reload();
    });
  }
}
