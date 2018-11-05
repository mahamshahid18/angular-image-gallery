import { SliderComponent } from './slider.component';
import { ImageService } from '../../services/image.service';

describe('SliderComponent Initialization', () => {
  let component: SliderComponent;
  let service: ImageService;

  beforeEach(() => {
    service = new ImageService();
    component = new SliderComponent(service);

    service.addImage('test', '11-11-11', 'test data');
    service.imgClicked('test', 0);
    component.ngOnInit();
  });

  it('should expect imgIndex to be populated', () => {
    expect(component.imgIndex).toBeDefined();
    expect(component.imgIndex).not.toBeNull();
    expect(component.imgIndex).toBe(0);
  });

  it('should expect imgSrc to be populated', () => {
    expect(component.imgSrc).toBeDefined();
    expect(component.imgSrc).not.toBeNull();
  });

  it('should expect totalImages to be populated', () => {
    expect(component.totalImages).toBeDefined();
    expect(component.totalImages).not.toBeNull();
  });
});

describe('SliderComponent Function Calls', () => {
  let component: SliderComponent;
  let service: ImageService;

  beforeEach(() => {
    service = new ImageService();
    component = new SliderComponent(service);
  });

  it('should expect deleteImg function to call service', () => {
    const spy = spyOn(service, 'deleteImage');

    component.deleteImg();

    expect(spy).toHaveBeenCalled();
  });

  it('should expect deleteImg function to decrement total images', () => {
    const numImages = component.totalImages;

    component.deleteImg();

    expect(component.totalImages).toBe(numImages - 1);
  });

  it('should expect deleteImg function to update view', () => {
    const spy = spyOn(component, 'updateImageInView');

    component.deleteImg();

    expect(spy).toHaveBeenCalled();
  });

  it('should expect closeSlider function to call service to toggle variable', () => {
    const spy = spyOn(service, 'toggleShowImg');

    component.closeSlider();

    expect(spy).toHaveBeenCalled();
  });

  it('should expect viewNextImage function to increment current index', () => {
    const index = component.imgIndex;

    component.viewNextImage();

    expect(component.imgIndex).toBe(index + 1);
  });

  it('should expect viewPrevImage function to decrement current index', () => {
    const index = component.imgIndex;

    component.viewPrevImage();

    expect(component.imgIndex).toBe(index - 1);
  });
});
