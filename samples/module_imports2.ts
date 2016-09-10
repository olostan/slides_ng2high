@NgModule({
    imports:      [ CommonModule,
        FormsModule, routing ],
    declarations: [ UserListComponent,
        UserComponent, MoneyPipe , HighightDirective],
    exports:      [ UserListComponent ],
    providers:    [ UsersService ],
})
export class MyUsersModule { }