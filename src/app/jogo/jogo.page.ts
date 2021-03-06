import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.page.html',
  styleUrls: ['./jogo.page.scss'],
})
export class JogoPage implements OnInit 
{
  jogos: any[];
  datajogo:Date;
  localjogo: string="";
  idtbjogo:number;
  times: any = [];
  limit: number = 10;
  start: number = 0;
  
  

   constructor(
    private router: Router, 
    private provider: PostProvider, 
    public toastController: ToastController
    ) { }

  ionViewWillEnter(){
    this.jogos =[];
    this.times=[];
    this.start = 0;
    this.carregar();
  }

  doRefresh(event) {
    
    setTimeout(() => {
      this.ionViewWillEnter();
         event.target.complete();
    }, 500);
  }


//barra de rolagem
loadData(event) 
{

  
  this.start += this.limit;

  setTimeout(() => {
    this.carregar().then(()=>{ 
      event.target.complete();
     });
   
  }, 500);
  

}
  ngOnInit() {
  }


  carregar()
  {
    return new Promise(resolve =>{
      let dados ={
        requisicao: 'getdata',
        limit: this.limit,
        start: this.start,
        
      };
      this.provider.inserirApi(dados, 'appJogo.php').subscribe(data=>{
        for(let jogo of data['result']){
          this.jogos.push(jogo);
        } resolve(true);
      });  
    });
  }

  addjogos(){
    this.router.navigate(['/add-jogos']);
    }

    editar(id, localjogo, datajogo,valor,idtbtime){
      this.router.navigate(['/add-jogos/'+id+'/'+localjogo+'/'+datajogo+'/'+valor+'/'+idtbtime]);
      }

      

  excluir(id)
  {
    return new Promise(resolve =>{
      let dados ={
        requisicao: 'excluir',
        id: id
      };
      this.provider.inserirApi(dados, 'appJogo.php')
      .subscribe(data => {
        this.ionViewWillEnter();
    
      });

    });
  }

  mostrar(id, localjogo, datajogo,valor,idtbtime){
    this.router.navigate(['/mostrar-jogos/'+id+'/'+localjogo+'/'+datajogo+'/'+valor+'/'+idtbtime]);
    }

    buscar(){
      return new Promise(resolve => {
        let dados = {
          requisicao : 'buscarjogo',
          local: this.localjogo,  
        };
        this.provider.inserirApi(dados, 'appJogo.php').subscribe(data=>{
          this.jogos=[];
          for(let jogo of data['result']){
            this.jogos.push(jogo);
          } resolve(true);
        });
    
      });
    
    }
    home(){
      this.router.navigate(['/home']);
      }
}
