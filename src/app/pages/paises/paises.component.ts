import { Component } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent {
  items: Pais[] = []

  constructor(private us: PaisesService) { }

  ngOnInit(): void {
    this.us.getAllItems().subscribe(
      (element) => {
        this.items = element
      }
    )//getAllItem
  }//ngOnInit
}
