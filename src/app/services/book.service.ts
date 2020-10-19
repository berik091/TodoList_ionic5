import { Injectable } from '@angular/core';
import { ɵangular_packages_platform_browser_platform_browser_k } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    getData() {
        let books: string[] = [];
        books.push('Quran');
        books.push('Hadis');

        return books;
    }
}