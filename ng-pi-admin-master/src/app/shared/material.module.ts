import {NgModule} from '@angular/core';
import { MatSnackBarModule } from '@angular/material';
import {MatButtonModule, MatIconModule, MatTableModule,
   MatGridListModule, MatCardModule, MatTabsModule, MatCheckboxModule,
    MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatDialogModule} from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatTableModule,MatSidenavModule,
    MatFormFieldModule, MatPaginatorModule, MatSortModule, MatInputModule, MatGridListModule, MatCardModule, MatTabsModule, MatCheckboxModule, MatDatepickerModule
    , MatNativeDateModule, MatSelectModule, MatExpansionModule, MatDialogModule, MatSnackBarModule,MatRadioModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatTableModule,MatSidenavModule,
    MatFormFieldModule, MatPaginatorModule, MatSortModule, MatInputModule, MatGridListModule, MatCardModule, MatTabsModule, MatCheckboxModule, MatDatepickerModule
    , MatNativeDateModule, MatSelectModule, MatExpansionModule, MatDialogModule, MatSnackBarModule,MatRadioModule],
})
export class MaterialModule {}
