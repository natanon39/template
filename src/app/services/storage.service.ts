import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  async store(storageKey: string, value: any) {
    const encryptValue = btoa(escape(JSON.parse(value)));
   await localStorage.setItem(storageKey,value);
  }
  async get(storageKey: string) {
    const res = await localStorage.getItem(storageKey);
    if (res) return JSON.parse(unescape(atob(res)))
    else return false;
  }
  async removeValue(storageKey:string)
  {
    await localStorage.removeItem(storageKey);
  }
  async clear()
  {
    localStorage.clear();
  }
}
