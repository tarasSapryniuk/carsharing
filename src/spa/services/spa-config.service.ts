import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
/**
 * Interface for working with icons.
 */
export interface Icons {
  name: string;
  url: string;
  alt: string;
}

export interface SpaConfigSettings {
  showUserControl?: boolean;
  socialIcons?: Array<Icons>;
}
@Injectable({
  providedIn: 'root'
})
export class SpaConfigService {
  showUserControls: boolean = true;
  socialIcons = new Array<Icons>();

  configure(settings: SpaConfigSettings):void {
    // Assign transferred settings to that element from which method 'configure' was called.
    Object.assign(this, settings);
  }

  constructor(private httpClient: HttpClient) { }

  // getSvgFile(filePath: string): Observable<string> {
  //   return this.httpClient
  //     .get(filePath, { observe: 'response', responseType: 'blob' })
  //     .pipe(
  //       map(response => {
  //         // Cut a file path and extension 
  //         return filePath.split('\\').pop().split('/').pop().split('.').slice(0, -1).join('.');
  //       }),
  //       catchError(error => {
  //         return of('warning');
  //       })
  //     );
  // }
}
