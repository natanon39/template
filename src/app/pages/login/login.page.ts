import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthConstants } from 'src/app/configs/auth-constans';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  postdata = {
    email: '',
    password: ''
  }
  constructor(public toastController: ToastController, private router: Router, private loadingCtrl: LoadingController, private auth: AuthService, private storage: StorageService) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  }
  async presentToast(text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }

  async onLogin() {
    if (this.validateInputs()) {
      const loading = await this.loadingCtrl.create({
        message: 'Please wait...',
        duration: 2000
      });
      await loading.present();
      this.auth.login(this.postdata).then((res) => {
        console.log(res.data);
        loading.dismiss();
        var obj = JSON.parse(res.data);
        if (obj.error.length > 0) {
          let t = obj.error.join(' , ');
          this.presentToast(t);
        }
        else {
          this.presentToast('Welcome back '+obj.data[0].fname);
          this.storage.store(AuthConstants.AUTH,res.data);
          this.router.navigate(['tabs']);
        }
      }).catch(((err) => {
        loading.dismiss();
        console.log(err);
        this.presentToast("Error can't login.");
      }))
    }
    else
      this.presentToast("Enter your email and password.");
  }
  validateInputs() {
    return (this.postdata.email.length > 0 && this.postdata.password.length > 0)
  }

  ngOnInit() {
  }

}
