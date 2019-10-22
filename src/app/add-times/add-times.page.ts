import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-times',
  templateUrl: './add-times.page.html',
  styleUrls: ['./add-times.page.scss'],
})
export class AddTimesPage implements OnInit {

  descricao: string ="";
  ativo:string ="";
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
      this.descricao = data.descricao;
      this.ativo = data.ativo;
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
          descricao: this.descricao,
          ativo: this.ativo,
          
        };
        this.provider.inserirApi(dados, 'app.php')
        .subscribe(data => {
       
          this.router.navigate(['/time']);
          this.presentToast();
        });
  
      });
  }

  editar(){
    return new Promise(resolve =>{
      let dados ={
        requisicao: 'editar',
        descricao: this.descricao,
        ativo: this.ativo,
        id: this.id
      };
      this.provider.inserirApi(dados, 'app.php')
      .subscribe(data => {
     
        this.router.navigate(['/time']);
        this.presentToast();
      });

    });
}

}