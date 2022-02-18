import { Component, OnInit } from "@angular/core";
import { MediaItemService, MediaItem } from "./media-item.service";

@Component({
  selector: "mw-media-item-list",
  templateUrl: "./media-item-list.component.html",
  styleUrls: ["./media-item-list.component.css"],
})
export class MediaItemListComponent implements OnInit {
  // mediaItems = [
  //   {
  //     id: 1,
  //     name: "Firebug",
  //     medium: "Series",
  //     category: "Science Fiction",
  //     year: 2010,
  //     watchedOn: 1294166565384,
  //     isFavorite: false,
  //   },
  //   {
  //     id: 2,
  //     name: "The Small Tall",
  //     medium: "Movies",
  //     category: "Comedy",
  //     year: 2015,
  //     watchedOn: null,
  //     isFavorite: true,
  //   },
  //   {
  //     id: 3,
  //     name: "The Redemption",
  //     medium: "Movies",
  //     category: "Action",
  //     year: 2016,
  //     watchedOn: null,
  //     isFavorite: false,
  //   },
  //   {
  //     id: 4,
  //     name: "Hoopers",
  //     medium: "Series",
  //     category: "Drama",
  //     year: null,
  //     watchedOn: null,
  //     isFavorite: true,
  //   },
  //   {
  //     id: 5,
  //     name: "Happy Joe: Cheery Road",
  //     medium: "Movies",
  //     category: "Action",
  //     year: 2015,
  //     watchedOn: 1457166565384,
  //     isFavorite: false,
  //   },
  // ];

  medium = "";
  mediaItems: MediaItem[];
  constructor(private mediaItemService: MediaItemService) {}

  ngOnInit() {
    // this.mediaItemService.get().subscribe((mediaItems) => {
    //   this.mediaItems = mediaItems;
    // });

    this.getMediaItems(this.medium);
  }

  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem);
  }

  getMediaItems(medium: string) {
    this.medium = medium;
    this.mediaItemService.get(medium).subscribe((mediaItems) => {
      this.mediaItems = mediaItems;
    });
  }
}
