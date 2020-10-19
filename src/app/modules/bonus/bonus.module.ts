
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
    ],
    exports: [
        BonusViewComponent
    ],
    providers: [],
})
export class BonusModule { }