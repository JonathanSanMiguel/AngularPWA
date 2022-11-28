import { Component } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent {

  constructor(private us: PaisesService) { }

  ngOnInit(): void {
  }//ngOnInit
}
