Poesia Aumentada is a new way of enjoying poetry. Using augmented reality and artificial intelligence we manage to bring together one of the oldest art forms and the new technologies.

- [ ] preload the css and js files
- [ ] uglify
- [ ] AWS: hosting zone and s3 and cloudfront
- [ ] lambda contact
- [ ] turnstile
- [ ] 8th wall


## To compile targets

The script is located here:

8th wall repos\8thwall-main\apps\image-target-cli

To run the script

```
npx npx image-target-cli
```

Check Dimensions: Make sure the image is at least 480 × 640 pixels. If the file is larger than 2048 pixels on any side, resize it manually to avoid processing

Enter the path to the image. Not the path to the folder! Copy the content of the out folder image-targets in the poet folder.

After you are done with the targets you have to put a play button for the thumb images. 

Add the new targets to the app.js file. And the code to the index.html.

Example:

```
<xrextras-named-image-target name="sigue_rondando_la_sombra">
    <xrextras-target-video-sound
        video="#sigue_rondando_la_sombra"
        thumb="#sigue_rondando_la_sombra"
        height="1.34"
        width="1"
    ></xrextras-target-video-sound>
</xrextras-named-image-target>
```

You have to be consistent with the filenames!

And then compile the source code of the poet folder.
