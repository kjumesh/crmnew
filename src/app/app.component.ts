import { Component, OnInit } from "@angular/core";

declare var $: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "test";

  ngOnInit() {
    // $(document).ready(() => {
    function calcWidth() {
      let navwidth = 0;
      const morewidth = $("#main .more").outerWidth(true);
      $("#main > li:not(.more)").each(function() {
        navwidth += $(this).outerWidth(true);
      });

      //const availablespace = $('nav').outerWidth(true) - morewidth;
      const availablespace = $("#nav-main").width() - morewidth;

      if (navwidth > availablespace) {
        const lastItem = $("#main > li:not(.more)").last();
        lastItem.attr("data-width", lastItem.outerWidth(true));
        lastItem.prependTo($("#main .more ul"));
        calcWidth();
      } else {
        var firstMoreElement = $("#main li.more li").first();
        if (navwidth + firstMoreElement.data("width") < availablespace) {
          firstMoreElement.insertBefore($("#main .more"));
        }
      }

      if ($(".more li").length > 0) {
        $(".more").css("display", "block");
      } else {
        $(".more").css("display", "none");
      }
    }

    $(window).on("resize load", function() {
      calcWidth();
    });
    // });
  }
}
