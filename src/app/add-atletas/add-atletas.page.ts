import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';
import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-add-atletas',
  templateUrl: './add-atletas.page.html',
  styleUrls: ['./add-atletas.page.scss'],
})
export class AddAtletasPage implements OnInit {

 
  nome: string ="";
  usuario:string ="";
  nivel:string ="";
  senha:string ="";
  idtbtime:number;
  id: number;
  times:any[];

  dadosLogin: any;
  nomelogado:string="";
  usuariologado:string="";
  idtbtimelogado:number;
  idtbusuariologado:number;

  constructor(
    private router:Router, 
    private provider: PostProvider, 
    public toastController: ToastController,
    private actRouter: ActivatedRoute,
    private storage:NativeStorage,
    ) { }

    ionViewWillEnter(){
      this.times =[];
      this.carregarTime();
      
      this.storage.getItem('session_storage').then((res)=>{
        this.dadosLogin = res;
        this.nomelogado =this.dadosLogin.nome;
        this.usuariologado = this.dadosLogin.usuario;
        this.idtbtimelogado = this.dadosLogin.idtbtime;
        this.idtbusuariologado = this.dadosLogin.idtbusuario;
        console.log(res);

      });


    }

  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.id = data.id;
      this.nome = data.nome;
      this.senha = data.senha;
      this.usuario = data.usuario;
      this.nivel = data.nivel;
      this.idtbtime = data.idtbtime;
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

  Times(){
    this.router.navigate(['/time']);
  }
  usuarios(){
    this.router.navigate(['/usuario']);
  }

  cadastrar(){
      return new Promise(resolve =>{
        let dados ={
          requisicao: 'add',
          nome: this.nome,
          usuario: this.usuario,
          nivel: this.nivel,
          idtbtime: this.idtbtimelogado,
          senha: this.senha
          
        };
        this.provider.inserirApi(dados, 'appUsers.php')
        .subscribe(data => {
       
          this.router.navigate(['/usuario']);
          this.presentToast();
        });
  
      });
  }

  editar(){
    return new Promise(resolve =>{
      let dados ={
        requisicao: 'editar',
        id: this.id,
        nome: this.nome,
        usuario: this.usuario,
        nivel: this.nivel,
        senha: this.senha,
        idtbtime: this.idtbtimelogado,
      };
      this.provider.inserirApi(dados,'appUsers.php')
      .subscribe(data => {
     
        this.router.navigate(['/usuario']);
        this.presentToast();
      });

    });
}
carregarTime(){
  return new Promise(resolve =>{
    let dados ={
      requisicao: 'getdataTime',
      idtbtime: this.idtbtimelogado,
    };
    this.provider.inserirApi(dados, 'appUsers.php').subscribe(data=>{
      for(let time of data['result']){
        this.times.push(time);
      } resolve(true);
    });  
  });
}}