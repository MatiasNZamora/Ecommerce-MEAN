import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-index-client',
  templateUrl: './index-client.component.html',
  styleUrls: ['./index-client.component.css']
})
export class IndexClientComponent implements OnInit {

  public clientes:Array<any> = [];
  public filtro_apellidos = '';
  public filtro_correo = '';

  public page = 1;
  public pageSize = 1

  constructor(
    private _clienteService : ClientService
  ) { }

  ngOnInit(): void {
    this.init_Data();
  };

  init_Data(){
    this._clienteService.listar_cliente_filtro_admin(null, null).subscribe(
      response => {
        this.clientes = response.data;
      },
      error => {
        console.log(error);
      }
    );
  };

  filtro(tipo:any){
    if(tipo == 'apellido'){
      if(this.filtro_apellidos){
      this._clienteService.listar_cliente_filtro_admin(tipo,this.filtro_apellidos).subscribe(
        response => {
          this.clientes = response.data;
        },
        error => {
          console.log(error);
        }
      );
    }else {
      this.init_Data();
    };
    } else if(tipo =='correo'){
      if(this.filtro_correo){
        this._clienteService.listar_cliente_filtro_admin(tipo,this.filtro_correo).subscribe(
          response => {
            this.clientes = response.data;
          },
          error => {
            console.log(error);
          }
        );
      };
    };
  };
};
