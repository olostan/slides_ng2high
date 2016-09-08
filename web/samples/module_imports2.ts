@NgModule({
    imports:      [ CommonModule,
        FormsModule, routing ],
    declarations: [ UserListComponent,
        UserComponent, MoneyPipe ],
    exports:      [ UserListComponent ],
    providers:    [ UsersService ],
})
export class MyUsersModule { }