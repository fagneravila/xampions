import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mostrar-numgeral',
  templateUrl: './mostrar-numgeral.page.html',
  styleUrls: ['./mostrar-numgeral.page.scss'],
})
export class MostrarNumgeralPage implements OnInit {

 
    nome: string ="";
    usuario:string ="";
    id: number;
    idtbtime:number;
    nivel:string;
    gols:number;
    passes:number
    numeros:any[];
  
    constructor(
      private router:Router, 
      private provider: PostProvider, 
      public toastController: ToastController,
      private actRouter: ActivatedRoute
      ) { }
      ionViewWillEnter(){
        this.numeros =[];
        this.carregarDados();
      }
    ngOnInit()
     {
      this.actRouter.params.subscribe((data:any)=>
      {
        this.id = data.id;
        this.nome = data.nome;
        this.nivel = data.nivel;
        this.usuario = data.usuario;
        this.idtbtime = data.idtbtime;
        console.log(data);
    });
     }
     carregarDados(){
      return new Promise(resolve =>{
        let dados ={
          requisicao: 'getgolgeral',
          idtbtime: this.idtbtime,
          
               
        };
        this.provider.inserirApi(dados,'appNum.php').subscribe(data=>{
          for(let numero of data['result']){
            this.numeros.push(numero);
          } resolve(true);
        });  
      });
    }
  
  
  }
  