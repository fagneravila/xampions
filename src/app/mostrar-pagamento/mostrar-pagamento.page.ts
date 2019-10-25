import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mostrar-pagamento',
  templateUrl: './mostrar-pagamento.page.html',
  styleUrls: ['./mostrar-pagamento.page.scss'],
})
export class MostrarPagamentoPage implements OnInit {

  localjogo: string ="";
  datajogo:Date;
  idtbtime:number;
  valor:number
  id: number;
  pago:string="N"
  idutbusuario:number;
  status:string="C";
  start:number;
  limit:number=10;
  confirmados:any[];
  nome:string="";

  constructor(private router:Router, 
    private provider: PostProvider, 
    public toastController: ToastController,
    private actRouter: ActivatedRoute) { }


    ionViewWillEnter(){
      this.confirmados =[];
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



  ngOnInit()
   {
    this.actRouter.params.subscribe((data:any)=>
    {
      this.id = data.id;
      this.localjogo = data.localjogo;
      this.datajogo = data.datajogo;
      this.idtbtime=data.idtbtime;
      this.valor=data.valor
      console.log(data);
  });
  

}

async presentToast() {
  const toast = await this.toastController.create({
    message: 'Salvo com sucesso.',
    duration: 2000,
    color: 'success'
  });
  toast.present();
}

confirmar(){
  return new Promise(resolve =>{
    let dados ={
      requisicao: 'addpagamento',
      idtbjogo: this.id,
      idtbusuario:4,
      
    };
    this.provider.inserirApi(dados, 'appJogo.php')
    .subscribe(data => {
   
      this.router.navigate(['/mostra-jogos']);
      this.presentToast();
    });

  });
}


carregar(){
  return new Promise(resolve =>{
    let dados ={
      requisicao: 'getconfirmado',
      idtbjogo: this.id,
      limit: this.limit,
      start: this.start
      
    };
    this.provider.inserirApi(dados, 'appPag.php').subscribe(data=>{
      for(let confirmado of data['result']){
        this.confirmados.push(confirmado);
      } resolve(true);
    });  
  });
  
}



buscarconfirmado(){
  return new Promise(resolve => {
    let dados = {
      requisicao : 'buscarconfirmado',
      nome: this.nome, 
       
    };
    this.provider.inserirApi(dados, 'inserirClientes.php').subscribe(data=>{
      this.confirmados=[];
      for(let confirmado of data['result']){
        this.confirmados.push(confirmado);
      } resolve(true);
    });
    
  });
   
}
pagar(idconfirmado){
  return new Promise(resolve =>{
    let dados ={
      requisicao: 'addpagamento',
      idtbjogo: this.id,
      idtbusuario:idconfirmado,
    };
    this.provider.inserirApi(dados, 'appPag.php')
    .subscribe(data => {
   
      this.router.navigate(['/mostra-jogos']);
      this.presentToast();
    });

  });
}

pagamento(){
  this.router.navigate(['/pagamentos']);
}
}
