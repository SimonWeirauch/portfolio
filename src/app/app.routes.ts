import { Routes } from '@angular/router';
import { PrivacyComponent } from './privacy/privacy.component';
import { LegalComponent } from './legal/legal.component';
import { MainComponent } from './main/main.component';


export const routes: Routes = [
    
    {path: 'legal', component: LegalComponent},
    {path: 'privacy', component: PrivacyComponent},
    {path: '', component: MainComponent },
    
];
