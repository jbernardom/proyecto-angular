import { Component } from '@angular/core';
import { faF } from '@fortawesome/free-solid-svg-icons';
import { faT } from '@fortawesome/free-solid-svg-icons';
import { faW } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  iconFacebook = faF
  iconTwitter = faT
  iconWhatsapp = faW

}
