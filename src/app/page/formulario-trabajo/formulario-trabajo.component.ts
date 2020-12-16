import { Component, OnInit } from '@angular/core';
import { FormTrabajoService } from '../../services/form-trabajo.service';
import { FormTrabajo } from '../../models/FormTrabajo';

@Component({
  selector: 'app-formulario-trabajo',
  templateUrl: './formulario-trabajo.component.html',
  styleUrls: ['./formulario-trabajo.component.scss']
})
export class FormularioTrabajoComponent implements OnInit {

  public formTrabajos: any[] = [];

  constructor(
    private _formService: FormTrabajoService
  ) { }

  ngOnInit(): void {
    this._formService.getAll().subscribe(result => {
      this.formTrabajos = result.jobForms;
    });
  }

}
