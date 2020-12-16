import { Component, OnInit } from '@angular/core';
import { TechnicianService } from '../../services/technician.service';
import { Tecnico } from '../../models/Tecnico';

@Component({
  selector: 'app-tecnico',
  templateUrl: './tecnico.component.html',
  styleUrls: ['./tecnico.component.scss']
})
export class TecnicoComponent implements OnInit {


  public tecnicos: Tecnico[] = [];

  constructor(
    private _technicianService: TechnicianService
  ) { }

  ngOnInit(): void {
    this._technicianService.getAll().subscribe(result => {
      this.tecnicos = result.technicians;
    });
  }

}
