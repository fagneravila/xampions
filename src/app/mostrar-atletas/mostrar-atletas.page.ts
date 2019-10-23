import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mostrar-atletas',
  templateUrl: './mostrar-atletas.page.html',
  styleUrls: ['./mostrar-atletas.page.scss'],
})
export class MostrarAtletasPage implements OnInit {


  nome: string ="";
  usuario:string ="";
  id: number;
  idtbtime:number;
  nivel:string="";
  times:any[];

  constructor(
    private router:Router, 
    private provider: PostProvider, 
    public toastController: ToastController,
    private actRouter: ActivatedRoute
    ) { }
    ionViewWillEnter(){
      this.times =[];
      this.carregarTime();
    }
  ngOnInit()
   {
    this.actRouter.params.subscribe((data:any)=>
    {
      this.id = data.id;
      this.nome = data.nome;
      this.nivel = data.nivel;
      this.usuario = data.usuario;
      this.idtbtime = data.usuario;
      console.log(data);
  });
   }
   carregarTime(){
    return new Promise(resolve =>{
      let dados ={
        requisicao: 'getdataTime',
             
      };
      this.provider.inserirApi(dados,'appUsers.php').subscribe(data=>{
        for(let time of data['result']){
          this.times.push(time);
        } resolve(true);
      });  
    });
  }


}
