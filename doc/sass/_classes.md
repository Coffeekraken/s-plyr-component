# SPlyrComponent

Simple webcomponent wrapper around the nice plyr library

### Example

```html
<s-plyr src="my-cool-video.mp4" autoplay muted></s-plyr>
```

Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com)

## Mixins

### s-plyr-classes

Print out the bare and style component css
Generated styles:

- `s-plyr`
- `s-plyr[color="{$color}"]`

#### Parameters

| Name    | Type                | Description            | Status   | Default                   |
| ------- | ------------------- | ---------------------- | -------- | ------------------------- |
| \$color | **{ List<Color> }** | The colors to generate | optional | default primary secondary |

### s-plyr-classes-bare

Print out the bare component css

### s-plyr-classes-style

Print out the style component css
Generated styles:

- `s-plyr`
- `s-plyr[color="{$color}"]`

#### Parameters

| Name    | Type                | Description            | Status   | Default                   |
| ------- | ------------------- | ---------------------- | -------- | ------------------------- |
| \$color | **{ List<Color> }** | The colors to generate | optional | default primary secondary |
