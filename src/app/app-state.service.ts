// app-state.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  private searchData: any;

  constructor() {}

  setSearchData(data: any) {
    this.searchData = data;
  }

  getSearchData() {
    return this.searchData;
  }
}
