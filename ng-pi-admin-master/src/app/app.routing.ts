import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'pages',
        pathMatch: 'full'
    },
    {
        path: 'pages',
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            { path: 'index', loadChildren: './pages/index/index.module#IndexModule' },
            { path: 'editor', loadChildren: './pages/editor/editor.module#EditorModule' },
            { path: 'icon', loadChildren: './pages/icon/icon.module#IconModule' },
            { path: 'profile', loadChildren: './pages/profile/profile.module#ProfileModule' },
            { path: 'form', loadChildren: './pages/form/form.module#FormModule' },
            { path: 'charts', loadChildren: './pages/charts/charts.module#ChartsModule' },
            { path: 'ui', loadChildren: './pages/ui/ui.module#UIModule' },
            { path: 'table', loadChildren: './pages/table/table.module#TableModule' },
            { path: 'menu-levels', loadChildren: './pages/menu-levels/menu-levels.module#MenuLevelsModule' },
        ]
    }
];

export const routing = RouterModule.forRoot(appRoutes);
