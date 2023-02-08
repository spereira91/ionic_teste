import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  constructor(   
    
    private activateRouter: ActivatedRoute,
    private router: Router,

    ) { 
  }
  routeId = null; //Variável que guarda a rota
  produto: any = {};

  ngOnInit() {
  this.routeId =
  this.activateRouter.snapshot.params['id'];

  if(this.routeId){
    // Se o id do produto for encontrado
    // Ativa o banco de dados

    // this.banco.getOneItem(this.routeId).subscribe(caixa => {this.produto = caixa});]

  }

  // Update(form: any){

    // this.banco.updateItem(form.value, this.routeId);
    // this.router.navigate[''];
    // this.util.tostando("Item Atualizado com sucesso","middle", 2000, "medium");

  }
  // declations: [FormPage]

  }


