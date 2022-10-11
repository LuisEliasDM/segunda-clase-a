import { Component, OnInit } from '@angular/core';
import { CompartidoService } from 'src/app/services/compartido.service';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {

  constructor(private compartidoService: CompartidoService) { }

  ngOnInit(): void {
    this.fillForm();
  }

  public fillForm(){
    let button = document.getElementById("btn");

    button?.addEventListener("click", () => {
      this.compartidoService.name = "Luis";
      this.compartidoService.email = "luis@gmail.com";
      console.log(this.compartidoService)
    })

  }
}
