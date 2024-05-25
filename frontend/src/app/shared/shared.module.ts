import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// Components
import { FeatherIconsComponent } from "./components/feather-icons/feather-icons.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { ContentComponent } from "./components/layout/content/content.component";
import { FullComponent } from "./components/layout/full/full.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { TapToTopComponent } from "./components/tap-to-top/tap-to-top.component";
// Header Elements Components
import { SearchComponent } from "./components/header/elements/search/search.component";
import { NotificationComponent } from "./components/header/elements/notification/notification.component";
import { MessageBoxComponent } from "./components/header/elements/message-box/message-box.component";
import { MyAccountComponent } from "./components/header/elements/my-account/my-account.component";

// Services
import { LayoutService } from "./services/layout.service";
import { NavService } from "./services/nav.service";
import { DecimalPipe } from "@angular/common";
import { SvgIconComponent } from "./components/svg-icon/svg-icon.component";
import { SwiperModule } from "swiper/angular";
import { SwiperComponent } from "./components/header/elements/swiper/swiper.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    FeatherIconsComponent,
    FullComponent,
    LoaderComponent,
    TapToTopComponent,
    SearchComponent,
    NotificationComponent,
    MessageBoxComponent,
    MyAccountComponent,
    SvgIconComponent,
    SwiperComponent,
    DashboardComponent
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, NgbModule, SwiperModule],
  providers: [NavService, LayoutService, DecimalPipe],
  exports: [NgbModule, FormsModule, ReactiveFormsModule, LoaderComponent, FeatherIconsComponent, TapToTopComponent, SvgIconComponent, SwiperModule],
})
export class SharedModule { }
