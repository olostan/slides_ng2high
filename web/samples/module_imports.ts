@NgModule({
    imports:      [ BrowserModule,
        MyUsersModule, routing ],
    declarations: [ AppComponent ],
    providers:    [ AppStateService ],
    bootstrap:    [ AppComponent ],
})
export class MyMainModule { }