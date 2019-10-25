import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})
export class NumerosPage implements OnInit {


usuarios: any = [];
limit: number = 10;
start: number = 0;
nome: string= "";


  constructor(
    private router: Router, 
    private provider: PostProvider, 
    public toastController: ToastController) { }

  ionViewWillEnter(){
    this.usuarios =[];
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
      this.provider.inserirApi(dados, 'appUsers.php').subscribe(data=>{
        for(let usuario of data['result']){
          this.usuarios.push(usuario);
        } resolve(true);
      });  
    });
  }

  
    
  home(){
    this.router.navigate(['/home']);
    }

    
    add(id, nome, nivel, idtbtime){
      this.router.navigate(['/add-numeros/'+id+'/'+nome+'/'+nivel+'/'+idtbtime]);
      }
    gols(id, nome,nivel, idtbtime){
        this.router.navigate(['/mostrar-numeros/'+id+'/'+nome+'/'+nivel+'/'+idtbtime]);
    }

    geral(idtbtime){
      this.router.navigate(['/mostrar-numgeral/'+idtbtime]);
  }

        excluir(id){
          return new Promise(resolve =>{
            let dados ={
              requisicao: 'excluir',
              id: id
            };
            this.provider.inserirApi(dados, 'appUsers.php')
            .subscribe(data => {
              this.ionViewWillEnter();
          
            });
        
          });
        }
      


buscar(){
  return new Promise(resolve => {
    let dados = {
      requisicao : 'buscar',
      nome: this.nome,  
    };
    this.provider.inserirApi(dados, 'appUsers.php').subscribe(data=>{
      this.usuarios=[];
      for(let usuario of data['result']){
        this.usuarios.push(usuario);
      } resolve(true);
    });

  });

}
}
