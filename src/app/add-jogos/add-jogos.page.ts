import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-jogos',
  templateUrl: './add-jogos.page.html',
  styleUrls: ['./add-jogos.page.scss'],
})
export class AddJogosPage implements OnInit {
  localjogo: string ="";
  datajogo:Date;
  valor:number;
  idtbtime:number;
  id: number;

  constructor(
    private router:Router, 
    private provider: PostProvider, 
    public toastController: ToastController,
    private actRouter: ActivatedRoute
    ) { }


  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.id = data.id;
      this.localjogo = data.localjogo;
      this.valor = data.valor;
      this.datajogo = data.datajogo;
      this.idtbtime =data.idtbtime;
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
    this.router.navigate(['/jogo']);
  }

  cadastrar(){
      return new Promise(resolve =>{
        let dados ={
          requisicao: 'add',
          localjogo: this.localjogo,
          datajogo: this.datajogo,
          valor:this.valor,
          id:this.id,
          idtbtime:this.idtbtime
          
        };
        this.provider.inserirApi(dados, 'appJogo.php')
        .subscribe(data => {
       
          this.router.navigate(['/jogo']);
          this.presentToast();
        });
  
      });
  }

  editar(){
    return new Promise(resolve =>{
      let dados ={
        requisicao: 'editar',
        localjogo: this.localjogo,
        datajogo: this.datajogo,
        valor:this.valor,
        id:this.id,
        idtbtime:this.idtbtime
      };
      this.provider.inserirApi(dados, 'appJogo.php')
      .subscribe(data => {
     
        this.router.navigate(['/jogo']);
        this.presentToast();
      });

    });
}




}