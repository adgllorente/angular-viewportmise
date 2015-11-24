# angular-viewportmise

Angular directive that executes a promise when it is in the viewport or not. It also adds some classes to DOM to know if it is loading, loaded or in an error status.

# How it works?
angular-viewportmise exports a directive called ``vpm``. This directive may be used like this:

```html
<!-- loader: Must be function returning a promise. -->
<!-- loadOnViewport: True to load on viewport otherwise false. -->
<div data-vpm
    data-loader="::getTestData"
    data-load-on-viewport="true">
</div>
```
The scope of the vpm directive is:
- ``loader {Function}``: it must return a promise and it will be executed to obtain the data.
- ``loadOnViewport {boolean}``: If it is true loader will be executed when it is inside the viewport, otherwise it will be executed just loaded, being or viewport or not.

Moreover, angular-viewportmise will add 3 classes depending on the status of the directive:

- **vpm-loading**: When ``loader`` is set
- **vpm-loaded**: When ``loader`` success
- **vpm-error**: When ``loader`` fails

# Architecture
This project is released with this structure:
- ``demo``: Folder containing demo files
- ``angular-viewportmise.js``: Main JS file of the project
- ``example.html``: HTML to show some examples

# Contribute
Feel free to contribute to this project but, please follow the guidelines to contribute.

1. Create or pick an issue describing what you are going to change/add.
2. Use [keywords](https://help.github.com/enterprise/2.2/user/articles/closing-issues-via-commit-messages/#keywords-for-closing-issues) in your commits to refer the issue.
3. Open a PR with a title like: RESOLVE #issue, description and wait for a developer to review and merge it.

# Third party libs used
- angular-inview

# Licensed
Licensed under MIT.
