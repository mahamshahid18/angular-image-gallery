
import { ImageService } from './image.service';
import { ImageObject } from '../interfaces/image-object.interface';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    service = new ImageService();
  });

  it('should expect init function to be called', () => {
    const spy = spyOn(service, 'init');

    service.init();

    expect(spy).toHaveBeenCalled();
  });

  it('should expect getStoredImages function to return an Array', () => {
    const images = service.getStoredImages();
    expect(images instanceof Array).toBeTruthy();
  });

  it('should check if addImage function adds an item to images array', () => {
    let images = service.getStoredImages();
    const existingImageLength = images.length;

    service.addImage('test', new Date(), 'sample string');
    images = service.getStoredImages();

    expect(images.length).toEqual(existingImageLength + 1);
  });

  it('should check if deleteImage function deletes an item from images array', () => {
    let images = service.getStoredImages();
    const existingImageLength = images.length;

    service.deleteImage(images.length - 1);
    images = service.getStoredImages();

    expect(images.length).toEqual(existingImageLength - 1);
  });

  it('should expect getImage function to return an item of type ImageObject', () => {
    const images = service.getStoredImages();

    if (images) {
      const img: ImageObject = service.getImage(0);

      expect(typeof(img.name)).toBe('string');
      expect(typeof(img.src)).toBe('string');
      expect(typeof(img.addedOn)).toBe('string');
    }
  });

  it('should expect imgClicked function to be called with parameters', () => {
    const spy = spyOn(service, 'imgClicked');
    const params = ['sample name', 0];

    service.imgClicked(params[0], params[1]);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(params[0], params[1]);
  });

  it('should expect currentImgIndex to be populated correctly', () => {
    const params = ['sample name', 0];

    service.imgClicked(params[0], params[1]);
    expect(service.currentImgIndex).not.toBeUndefined();
    expect(service.currentImgIndex).not.toBeNull();
  });

  it('should expect imgClicked function to call toggleShowImg function', () => {
    const spy = spyOn(service, 'toggleShowImg');
    const params = ['sample name', 0];

    service.imgClicked(params[0], params[1]);

    expect(spy).toHaveBeenCalled();
  });

  it('should expect toggleShowImg function to toggle the showImg variable', () => {
    const value = service.showImg;

    service.toggleShowImg();

    expect(service.showImg).not.toBe(value);
  });

});
