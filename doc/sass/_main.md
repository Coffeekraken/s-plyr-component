# SPlyrComponent

Simple webcomponent wrapper around the nice plyr library

### Example

```html
<s-plyr src="my-cool-video.mp4" autoplay muted></s-plyr>
```

Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com)

## Mixins

### s-plyr

Print out the bare and style component css

#### Parameters

| Name    | Type                | Description           | Status   | Default |
| ------- | ------------------- | --------------------- | -------- | ------- |
| \$color | **{ List<Color> }** | The color to generate | optional | default |

### s-plyr-bare

Print out the bare component css

### s-plyr-style

Print out the style component css

#### Parameters

| Name    | Type                                                                                    | Description           | Status   | Default |
| ------- | --------------------------------------------------------------------------------------- | --------------------- | -------- | ------- |
| \$color | **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }** | The color to generate | optional | default |
