import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-numeros',
  templateUrl: './add-numeros.page.html',
  styleUrls: ['./add-numeros.page.scss'],
})
export class AddNumerosPage implements OnInit {

  nome: string ="";
  nivel:string ="";
  idtbtime:number;
  id: number;
  gols:number;
  passe:number;
  constructor(
    private router:Router, 
    private provider: PostProvider, 
    public toastController: ToastController,
    private actRouter: ActivatedRoute
    ) { }

    ionViewWillEnter(){
     // this.times =[];
     // this.carregarTime();
    }

  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.id = data.id;
      this.nome = data.nome;
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

  numeros(){
    this.router.navigate(['/numeros']);
  }

  cadastrar(){
      return new Promise(resolve =>{
        let dados ={
          requisicao: 'add',
          nome: this.nome,
          nivel: this.nivel,
          idtbtime: this.idtbtime,
          idtbusuario: this.id,
          gols: this.gols,
          passe:this.passe,
          
        };
        this.provider.inserirApi(dados, 'appNum.php')
        .subscribe(data => {
       
          this.router.navigate(['/numeros']);
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
        nivel: this.nivel,
        idtbtime: this.idtbtime
      };
      this.provider.inserirApi(dados,'appUsers.php')
      .subscribe(data => {
     
        this.router.navigate(['/usuario']);
        this.presentToast();
      });

    });
}
}