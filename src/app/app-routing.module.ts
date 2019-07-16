import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'news-single', loadChildren: './news-single/news-single.module#NewsSinglePageModule' },
  { path: 'sport', loadChildren: './sport/sport.module#SportPageModule' },
  { path: 'business', loadChildren: './business/business.module#BusinessPageModule' },
  { path: 'health', loadChildren: './health/health.module#HealthPageModule' },
  { path: 'technology', loadChildren: './technology/technology.module#TechnologyPageModule' },
  { path: 'science', loadChildren: './science/science.module#SciencePageModule' },
  { path: 'general', loadChildren: './general/general.module#GeneralPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
