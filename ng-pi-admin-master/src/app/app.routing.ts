import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'pages/index',
        pathMatch: 'full'
      },
    {
        path: 'pages',
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            { path: 'index', loadChildren: './index/index.module#IndexModule' },
            { path: 'editor', loadChildren: './editor/editor.module#EditorModule' },
            { path: 'icon', loadChildren: './icon/icon.module#IconModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'form', loadChildren: './form/form.module#FormModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'ui', loadChildren: './ui/ui.module#UIModule' },
            { path: 'table', loadChildren: './table/table.module#TableModule' },
            { path: 'menu-levels', loadChildren: './menu-levels/menu-levels.module#MenuLevelsModule' },
        ]
    }
];

export const routing = RouterModule.forRoot(appRoutes);
