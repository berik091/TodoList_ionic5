
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileModule } from '../profile/profile.module';
import { BonusViewComponent } from './pages/view/bonus-view.page';


@NgModule({
    declarations: [
        BonusViewComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: BonusViewComponent,
            }
        ]),
        ProfileModule,
    ],
    exports: [
        BonusViewComponent
    ],
    providers: [],
})
export class BonusModule { }