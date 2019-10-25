import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';
import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

usuarios: any = [];
idtbtime:number;
limit: number = 10;
start: number = 0;
nome: string= "";

dadosLogin: any;
  nomelogado:string="";
  usuariologado:string="";
  idtbtimelogado:number;
  idtbusuariologado:number;
  
  constructor(
    private router: Router, 
    private provider: PostProvider, 
    public toastController: ToastController,
    private storage:NativeStorage
    ) { }

  ionViewWillEnter(){
    this.usuarios =[];
     this.start = 0;
     this.carregar();
      this.storage.getItem('session_storage').then((res)=>{
      this.dadosLogin = res;
      this.nomelogado =this.dadosLogin.nome;
      this.usuariologado = this.dadosLogin.usuario;
      this.idtbtimelogado = this.dadosLogin.idtbtime;
      this.idtbusuariologado = this.dadosLogin.idtbusuario;
      console.log(res);
    });
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
        idtbtime:this.idtbtimelogado,
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

  addAtletas(){
    this.router.navigate(['/add-atletas']);
    
    }

    home(){
      this.router.navigate(['/home']);
      
      }
   
 
    gols(id, nome, nivel, idtbtime){
      this.router.navigate(['/mostrar-numeros/'+id+'/'+nome+'/'+nivel+'/'+idtbtime]);
      }
      mostrar(id, nome, senha, usuario, nivel, idtbtime){
        this.router.navigate(['/mostrar-atletas/'+id+'/'+nome+'/'+senha+'/'+usuario+'/'+nivel+'/'+idtbtime]);
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
        editar(id, nome, senha, usuario, nivel, idtbtime){
          this.router.navigate(['/add-atletas/'+id+'/'+nome+'/'+senha+'/'+usuario+'/'+nivel+'/'+idtbtime]);
          }
         


buscar(){
  return new Promise(resolve => {
    let dados = {
      requisicao : 'buscar',
      nome: this.nome, 
      idtbtime:this.idtbtimelogado, 
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
