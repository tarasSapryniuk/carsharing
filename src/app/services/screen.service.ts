import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { windowTime } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ScreenService {
  private resizeSource = new Subject<null>();
  public resize$ = this.resizeSource.asObservable();

  largePixels = 780;
  screenWidth: number;
  screenHeight: number;

  constructor() {
    try {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
      window.addEventListener("resize", event => this.onResize(event));
    } catch (e) {
      console.error(e);
    }
  }

  onResize(event: UIEvent): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.resizeSource.next()
  }

  isLarge(): boolean {
    return this.screenWidth >= this.largePixels;
  }
}
