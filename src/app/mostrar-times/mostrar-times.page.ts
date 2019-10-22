import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mostrar-times',
  templateUrl: './mostrar-times.page.html',
  styleUrls: ['./mostrar-times.page.scss'],
})
export class MostrarTimesPage implements OnInit {
  descricao: string ="";
  ativo:string ="";
  id: number;
  constructor(private router:Router, 
    private provider: PostProvider, 
    public toastController: ToastController,
    private actRouter: ActivatedRoute) { }

  ngOnInit()
   {
    this.actRouter.params.subscribe((data:any)=>
    {
      this.id = data.id;
      this.descricao = data.descricao;
      this.ativo = data.ativo;
      console.log(data);
  });

}
}