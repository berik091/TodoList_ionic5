import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BonusModule } from '../bonus/bonus.module';
import { ProfileViewComponent } from './pages/view/profile-view.page';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ProfileViewComponent,
            }
        ]),
        BonusModule
    ],
    exports: [],
    declarations: [
        ProfileViewComponent
    ],
    providers: [],
})
export class ProfileModule { }
