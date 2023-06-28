import {
  ImageLoaderConfig,
  IMAGE_LOADER,
  NgOptimizedImage,
} from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'page-images',
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [],
  /* custom image loader */
  providers: [
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) =>
        `https://source.unsplash.com/${config.src}`,
    },
  ],
  template: `
    <h1>NgOptimizedImage</h1>

    <p>Try to remove the width or height attribute in the source and see that there will be an error.</p>

    <p>Below image will be loaded "above the fold".</p>
    <img ngSrc="9IBqihqhuHc" width="1080" height="810" priority/>
    <p>Below image will be loaded "below the fold".</p>
    <img style="margin-top: 200vh;" ngSrc="IZmPdbnb-3I" width="1080" height="717" />
  `,
})
export class PageImagesComponent {}
