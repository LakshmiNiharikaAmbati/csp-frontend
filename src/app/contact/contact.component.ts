import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private sanitizer: DomSanitizer) { }
  qrCodeImageUrl: any;
  ngOnInit() {
    const imagePath = '../../assets/SCAN HERE.jpeg'; // Adjust the path and file name as per your actual QR code image
    this.qrCodeImageUrl = this.sanitizer.bypassSecurityTrustUrl(imagePath);
  }


}
