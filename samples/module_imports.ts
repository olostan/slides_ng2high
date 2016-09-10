@NgModule({
    imports:      [ BrowserModule,
        MyUsersModule, routing ],
    declarations: [ AppComponent, HighightDirective ],
    providers:    [ AppStateService ],
    bootstrap:    [ AppComponent ],
})
export class MyMainModule { }