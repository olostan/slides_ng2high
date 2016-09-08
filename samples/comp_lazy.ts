export const routing: ModuleWithProviders =
    RouterModule.forRoot(
        [
            /// ...
            { path: 'some-list',
                loadChildren: 'some-module#SomeModule'
            }
        ]);