import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';//two way data binding (ngModel) için gerekli

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule], //template içinde ngModel kullanabilmek için FormsModule'ü import ettik
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  //basit bir string
  pageTitle: string = 'Data Binding - Angular';

  //interpolation içinde expression kullanımı
  numberA: number = 5;
  numberB: number = 7;

  // Property Binding([])
  angularLogoUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';

  //Bizim butonumuzun pasifliğini sağlayacak boolean property
  isSaveDisabled: boolean = true;

  //Event Binding (())
  //Butona basınca artmasını istediğimiz sayaç
  clickCount: number = 0;

  //Bu metot click eventine bağlanacak
  onIncrementClick() {
    //Butona her basıldığında clickCount'u 1 artır
    this.clickCount++;
  }

}
