import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

dadosLogin: any;
nomelogado:string="";
usuariologado:string="";
idtbtimelogado:number;
idtbusuariologado:number;
conteudo: boolean;

  constructor(
    private router:Router,
    private provider:PostProvider,
    private storage: NativeStorage,
    public toast: ToastController
  ) {  }


  ionViewWillEnter(){
    this.storage.getItem('session_storage').then((res)=>{
      this.dadosLogin = res;
      this.nomelogado =this.dadosLogin.nome;
      this.usuariologado = this.dadosLogin.usuario;
      this.idtbtimelogado = this.dadosLogin.idtbtime;
      this.idtbusuariologado = this.dadosLogin.idtbusuario;
      console.log(res);
    });
  }


  async logout(){
    this.storage.clear();
    this.router.navigate(['/login']);
    const toast = await this.toast.create({
      message: 'Logout Efetuado',
      duration: 1000,
      color: 'success'
    });
  }


}