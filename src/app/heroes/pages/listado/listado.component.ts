import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  constructor(private HeroesService: HeroesService ) { }

  heroes: Heroe[] = []

  ngOnInit(): void {
    this.HeroesService.getHeroes()
    .subscribe(heroes => {
     this.heroes = heroes;
    })

  }

}
