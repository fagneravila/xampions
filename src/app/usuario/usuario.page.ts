import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

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
      this.provider.inserirApi(dados, 'apiCap.php').subscribe(data=>{
        for(let usuario of data['result']){
          this.usuarios.push(usuario);
        } resolve(true);
      });  
    });
  }



}
