import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ToolboxComponent } from './toolbox.component';

@NgModule({
    imports: [RouterModule],
    declarations: [ToolboxComponent],
    exports: [ToolboxComponent]
})

export class ToolboxModule { }
