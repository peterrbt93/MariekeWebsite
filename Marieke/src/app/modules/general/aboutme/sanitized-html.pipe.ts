import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({
    name: 'sanitizedHtml'
})
export class SanitizedHtmlPipe implements PipeTransform {
    constructor(private sanitized: DomSanitizer) {}

    transform(value: string): any {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
}