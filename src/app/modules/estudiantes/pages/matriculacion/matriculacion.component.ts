import { Component } from '@angular/core';
import { ConsumidorAPIService } from 'src/app/shared/services/consumidor-api.service';
import { Curso } from '../../models/Curso';
import { Estudiante } from '../../models/Estudiante';
import { CursoService } from '../../services/curso.service';
import { EstudianteServiceService } from '../../services/estudiante-service.service';

@Component({
  selector: 'app-matriculacion',
  templateUrl: './matriculacion.component.html',
  styleUrls: ['./matriculacion.component.css']
})
export class MatriculacionComponent {

  private estudiante: Estudiante = {} as Estudiante;
  private cursos: Curso[] = [];

  constructor(
    private consumidor: ConsumidorAPIService,
    private dataEstudiante: EstudianteServiceService,
    private dataCurso: CursoService
  ) {}

  async ngOnInit() {
    
    await this.consumidor.consumirEstudiante();

    await this.consumidor.consumirTodosCursos();

    this.estudiante = this.dataEstudiante.getEstudiante();

    this.cursos = this.dataCurso.getAllCursos();

    console.log(this.cursos);


  }

}
