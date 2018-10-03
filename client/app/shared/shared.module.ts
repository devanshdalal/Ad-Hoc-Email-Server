import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSelectorComponent } from './account-selector/account-selector.component';
import {MatAutocompleteModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HtmlSanitizerPipe} from './pipes/html-sanitizer.pipe';
import {TrimDomainPipe} from './pipes/trim-domain.pipe';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AccountSelectorComponent,
    HtmlSanitizerPipe,
    TrimDomainPipe,
    BannerComponent
  ],
  exports: [
    AccountSelectorComponent,
    BannerComponent,
    HtmlSanitizerPipe,
    TrimDomainPipe
  ]
})
export class SharedModule { }
