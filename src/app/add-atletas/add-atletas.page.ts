import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';
import { ToastController } from '@ionic/angular';

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

  cadastrar(){
      return new Promise(resolve =>{
        let dados ={
          requisicao: 'add',
          nome: this.nome,
          usuario: this.usuario,
          nivel: this.nivel,
          idtbtime: this.idtbtime,
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
        idtbtime: this.idtbtime
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
           
    };
    this.provider.inserirApi(dados, 'appUsers.php').subscribe(data=>{
      for(let time of data['result']){
        this.times.push(time);
      } resolve(true);
    });  
  });
}}