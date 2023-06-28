---
sidebar_position: 60
tags:
  - explanation
---

# WordPress Plugin

[![WordPress Directory](https://img.shields.io/wordpress/plugin/v/image-display-control)](https://wordpress.org/plugins/image-display-control/)

<!--
WARNING: Bits of information here are duplicated in several places:
  * https://docs.frameright.io/wordpress
  * https://github.com/Frameright/image-display-control-wordpress
  * https://github.com/Frameright/image-display-control-wordpress/blob/master/readme.txt
Make sure to keep them in sync.
-->

#### Image Display Control WordPress Plugin

https://github.com/Frameright/image-display-control-wordpress

An easy way to leverage image region metadata on your site.

## Which image metadata?

An image file (e.g. JPEG, PNG) contains metadata, i.e. information about the
image, e.g. which camera model was used or when the picture has been taken.
This information is usually stored at the beginning of the file. Three main
formats, or bags of metadata, can coexist in a file and the information they
contain partly overlap:

- [IPTC IIM](https://en.wikipedia.org/wiki/IPTC_Information_Interchange_Model),
  developed in the early 1990s;
- [Exif](https://en.wikipedia.org/wiki/Exif), late 1990s;
- [XMP](https://en.wikipedia.org/wiki/Extensible_Metadata_Platform), late 2000s.

The IPTC IIM format (often just called IPTC format) and the Exif format
represent sets of key-value pairs, whereas the newer XMP format is an XML
representation of a more complex
[RDF](https://en.wikipedia.org/wiki/Resource_Description_Framework) graph. The
[XMP Specification Part 3](https://developer.adobe.com/xmp/docs/XMPSpecifications/)
specifies how the XMP metadata are to be serialized and stored in each image
file format (e.g. JPEG, PNG).

The
[IPTC council](https://en.wikipedia.org/wiki/International_Press_Telecommunications_Council)
has defined a standard for storing
[Image Regions](https://iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#image-region)
in XMP. _Image Regions_ are useful for describing specific areas of the image
(e.g. objects, people) or for indicating how the image should be cropped or
rotated to best fit a given container. The
[Frameright app](https://frameright.app/) can be used to define such _Image
Regions_ and insert them in the metadata of a picture.

This WordPress plugin reads such _Image Regions_ in order to automatically crop
images the best possible way, depending on which container they are being
displayed in.

[![Youtube](https://img.youtube.com/vi/vlyoAPku_NU/0.jpg)](https://www.youtube.com/watch?v=vlyoAPku_NU 'Youtube')

## How does it work?

When rendering a post or a page, the plugin looks for images that have _Image
Region_ metadata and replaces them on the front-end with a
[web component](/web-component)
automatically zooming on the best suited _Image Region_, effectively
doing better than a classical middle-crop.
