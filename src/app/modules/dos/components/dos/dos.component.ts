import { Component, OnInit } from '@angular/core';
import { CompartidoService } from 'src/app/services/compartido.service';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.scss']
})
export class DosComponent implements OnInit {

  constructor(public compartidoService: CompartidoService) { }

  ngOnInit(): void {
    console.log(this.compartidoService)
    this.getDataForm()
    this.updateForm()
  }

  getDataForm(){
    let name: HTMLInputElement = <HTMLInputElement> document.getElementById("name");
    let email: HTMLInputElement = document.getElementById("email") as HTMLInputElement;

    name.value = this.compartidoService.name;
    email.value = this.compartidoService.email;

    console.log(name)
    console.log(email)
  }

  updateForm(){
    let button = document.getElementById("btn1");

    button?.addEventListener("click", () => {
      this.getDataForm()
    })
  }

}
