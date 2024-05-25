import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  status: "initial" | "uploading" | "success" | "fail" = "initial"
  file: File | null = null

  constructor(
    private api: ApiService
  ) { }

  onUpload() {
    if (this.file) {
      const formData = new FormData();

      formData.append('file', this.file, this.file.name);

      const upload$ = this.api.post("https://httpbin.org/post", formData);

      this.status = 'uploading';

      upload$.subscribe({
        next: () => {
          this.status = 'success';
        },
        error: (error: any) => {
          this.status = 'fail';
          return new Error(error);
        },
      });
    }
  }

}
