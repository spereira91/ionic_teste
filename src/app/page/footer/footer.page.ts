import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit {

  constructor() { }

  ngOnInit() {}


  //Método do alertando 
  async alertando(){
    const alert = this.alertCtrl.create({
      mode:'ios',
      header: 'Cadastro de Produtos',
      inputs:[
        {
          name: 'item',
          type: 'text',
          placeholder: 'Informe o Produto'
        },
        {
          name:'qtd',
          type: 'text',
          placeholder: 'Informe a Quantidade'
        }
      ],
      buttons: [

        //Botão de cancelar
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.utilidades.toastando('Cancelado!', "middle",2000 ,"secondary" );
          }
        },

        //Botão de cadastrar
        {
          text: 'Cadastrar',
          handler: (form) => {
            //Objeto que irá forma nosso item da lista
            let item = {
              produto: form.item,
              quantidade: form.qtd, 

              //Vai ser a variavel de controle do ngIf
              status: false     
            };
            try{
              this.DataBase.postItem(item);
            }catch(err){
              console.log(err)
            }finally{
              this.utilidades.toastando("Item Cadastrado", "top", 2000,"success");                           
            } 
          }
        }
      ]
    });

    (await alert).present();
  }

}