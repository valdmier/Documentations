# HTML Audio, Source, and Video Tags Documentation

HTML provides several elements to embed multimedia content, such as audio and video, into web pages. In this documentation, we will explore the HTML `<audio>`, `<source>`, and `<video>` elements, and how to use them to include multimedia in your web documents.

---

## HTML `<audio>` Element

The `<audio>` element allows you to embed audio files, like music or sound effects, directly into a web page.

### Syntax

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

- The `controls` attribute adds audio controls (play, pause, volume) to the audio player.

- The `<source>` element specifies the audio file source with the `src` attribute and the MIME type with the `type` attribute. You can include multiple `<source>` elements with different formats for cross-browser compatibility.

- The `autoplay` attribute automatically starts playing the audio when the page loads.

- The `loop` attribute makes the audio continuously loop.

### Example

```html
<audio controls autoplay loop>
  <source src="music.mp3" type="audio/mpeg">
  <source src="music.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
```

#### Example Output

An audio player with controls to play or pause the music, automatically starting playback, and looping.

---

## HTML `<video>` Element

The `<video>` element allows you to embed video files directly into a web page.

### Syntax

```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video element.
</video>
```

- The `controls` attribute adds video controls (play, pause, volume, fullscreen) to the video player.

- The `<source>` element specifies the video file source with the `src` attribute and the MIME type with the `type` attribute.

- The `autoplay` attribute automatically starts playing the video when the page loads.

- The `loop` attribute makes the video continuously loop.

### Example

```html
<video controls autoplay loop>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  Your browser does not support the video element.
</video>
```

#### Example Output

A video player with controls to play, pause, adjust volume, automatically starting playback, and looping.

---

## HTML `<source>` Element

The `<source>` element is used to specify multiple media resources for `<audio>` and `<video>` elements. It allows the browser to choose the most suitable source based on compatibility and availability.

### Syntax

```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Your browser does not support the video element.
</video>
```

- The `src` attribute specifies the URL of the media file.
- The `type` attribute defines the MIME type of the media file.
- You can include multiple `<source>` elements within the same `<audio>` or `<video>` element to provide different formats of the media.

### Example

```html
<video controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  Your browser does not support the video element.
</video>
```

#### Example Output

A video player that uses the supported video format.

---

## Audio and Video Attributes

Both `<audio>` and `<video>` elements have several attributes to control playback and appearance:

- `autoplay`: Automatically starts playing the media when the page loads.
- `loop`: Loops the media playback.
- `muted`: Mutes the audio of the media.
- `poster`: Specifies an image to display before the media is played.
- `preload`: Hints how much buffering is needed before playback begins (e.g., "auto," "metadata," "none").
- `width` and `height`: Sets the dimensions of the media player.
- `controls`: Adds playback controls.

## Conclusion

HTML provides the `<audio>`, `<source>`, and `<video>` elements to easily integrate audio and video content into web pages. Using these elements, along with various attributes, you can create rich multimedia experiences for your website visitors.
