import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  welcome= 'welcome to our club'

verifywelcomelength = (welcometext : String) => {
  if(welcometext.length<50)
    return true
  return false
}

}
