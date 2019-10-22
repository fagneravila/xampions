import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-time',
  templateUrl: './time.page.html',
  styleUrls: ['./time.page.scss'],
})
export class TimePage implements OnInit {

  times: any = [];
  limit: number = 10;
  start: number = 0;
  descricao: string= "";

   constructor(
    private router: Router, 
    private provider: PostProvider, 
    public toastController: ToastController) { }

  ionViewWillEnter(){
    this.times =[];
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
loadData(event) {
  
  this.start += this.limit;

  setTimeout(() => {
    this.carregar().then(()=>{ 
      event.target.complete();
     });
   
  }, 500);
  

}
  ngOnInit() {
  }


  carregar(){
    return new Promise(resolve =>{
      let dados ={
        requisicao: 'getdata',
        limit: this.limit,
        start: this.start
        
      };
      this.provider.inserirApi(dados, 'app.php').subscribe(data=>{
        for(let time of data['result']){
          this.times.push(time);
        } resolve(true);
      });  
    });
  }

  addTimes(){
    this.router.navigate(['/add-times']);
    }

    editar(id, descricao, ativo){
      this.router.navigate(['/add-times/'+id+'/'+descricao+'/'+ativo]);
      }

      

excluir(id){
  return new Promise(resolve =>{
    let dados ={
      requisicao: 'excluir',
      id: id
    };
    this.provider.inserirApi(dados, 'app.php')
    .subscribe(data => {
      this.ionViewWillEnter();
  
    });

  });
}

mostrar(id, descricao, ativo){
  this.router.navigate(['/mostrar-times/'+id+'/'+descricao+'/'+ativo]);
  }
}
