// App Module
export const routing: ModuleWithProviders =
    RouterModule.forRoot(
    [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        { path: 'users',
            loadChildren: 'app/users/users.module#UsersModule' }
    ]);
// UsersModule:
export const routing: ModuleWithProviders =
    RouterModule.forChild(
    [{ path: '',
        component: UserComponent,
        children: [
            { path: '',    component: UserListComponent },
            { path: ':id', component: UserDetailComponent }
        ]
    }]);
