import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpXhrBackend } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { MediaItemComponent } from "./media-item.component";
import { MediaItemListComponent } from "./media-item-list.component";
import { FavoriteDirective } from "./favorite.component";
import { CategoryListPipe } from "./category-list.pipe";
import { MediaItemFormComponent } from "./media-item-form.component";
import { lookupLists, lookupListToken } from "./providers";
import { MockXHRBackend } from "./mock-xhr-backend";
// import { MediaItemService } from "./media-item.service";

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    MediaItemFormComponent,
  ],
  providers: [
    {
      provide: lookupListToken,
      useValue: lookupLists,
    },
    { provide: HttpXhrBackend, useClass: MockXHRBackend },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
