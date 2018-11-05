# Angular Image Gallery

This project is a demo for a simple Image Gallery. The following functionality has been implemented:

## Brief Implementation Details

* View all images saved in localstorage in the gallery view
* Add image to gallery
* View specific image in the image slider (by clicking on it)
* Within the image slider, slide through and view all images in the gallery
* Delete an image from within the image slider view by clicking the delete button
* View when the image was added to gallery (created date) by hovering on the image in gallery view
* Use left and right arrow keys to slide through images in the slider view
* Use escape key to exit out of slider view

The application uses two components:

* GalleryComponent: handles everything in the `gallery view`
* SliderComponent: handles everything in the `slider view`

The application uses one shared service `ImageService` to share data and state of the application between the 2 components.

The application has unit tests for both the components as well as the shared service. Focus was on testing the functionality (UI based testing is not done).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
