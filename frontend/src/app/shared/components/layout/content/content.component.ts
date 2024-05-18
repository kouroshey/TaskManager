import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as feather from "feather-icons";
import { LayoutService } from "../../../services/layout.service";
import { NavService } from "../../../services/nav.service";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
})

export class ContentComponent implements AfterViewInit, OnInit {
  @Input() masterInfo: any;
  @Input() dashboardInfo: any;

  constructor(
    private route: ActivatedRoute,
    public navServices: NavService,
    public layout: LayoutService,
    private activatedRoute: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      this.layout.config.settings.layout = params.layout ? params.layout : this.layout.config.settings.layout;
    });
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      if (data && !this.masterInfo) {
        this.masterInfo = data.masterInfo;
        this.dashboardInfo = data.dashboardInfo;
        console.log(this.masterInfo);
        console.log(this.dashboardInfo);
      }
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      feather.replace();
    });
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : "";
  }

  get layoutClass() {
    return "compact-wrapper";
  }

}
