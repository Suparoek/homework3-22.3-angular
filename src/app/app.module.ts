import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { UsersettingComponent } from './usersetting/usersetting.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import { WorkspaceComponent } from './workspace/workspace.component';

const routes: Routes= [
    {path:'user',component: UsersettingComponent},
    {path:'workspace',component: WorkspaceComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    UsersettingComponent,
    WorkspaceComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
