# Poesia Aumentada

![Poesia Aumentada](assets/images/poesia-aumentada-cover.png)

**Poesia Aumentada** is a digital poetry project that combines literature,
animation, augmented reality, and artificial intelligence. It gives poems a
visual and interactive dimension, connecting one of the oldest art forms with
new technologies.

Visit the live project at [poesiaumentada.com](https://poesiaumentada.com/).

## About the project

The project creates a meeting point between technology, literature, and video.
Its works begin on a printed image and become animated digital experiences when
viewed through a camera. In the project's words, each work is an "extraordinary
animal" that rests on the printed object before coming to life in digital
space.

To experience a work:

1. Scan the QR code on the project's flyer or printed material.
2. Open the experience on a compatible mobile device.
3. Point the camera at the associated image target.
4. Let the poem's video and animation appear over the printed artwork.

The site includes flyer artwork for the Grethel experience and links to video
playlists for the participating artists.

## Artists and collaborators

Poesia Aumentada is built through collaboration between artists, writers, and
technologists. The project currently presents work associated with:

- **[John M. Bennett](https://www.lulu.com/spotlight/lunabisonteprods/)** —
  prolific poet and editor who directs Luna Bisonte Prods with C. Mehrl
  Bennett. [View his videos](https://www.youtube.com/playlist?list=PL6wOXY9xyyFCIOKfKJagsHLMo-BxTszwI).
- **Grethel Delgado** — writer and journalist whose published work includes
  *1987*, *Mariposas*, *Mi familia ideal*, *Necesidad de los cultos*, and *No
  me hablen de Cuba*. [View her videos](https://www.youtube.com/playlist?list=PL6wOXY9xyyFAMIORyWTgSpfxbLcK3rv3w).
- **Luis Manuel Pimentel** — writer, editor, and researcher in digital
  poetry, and director of [Fuego Blanco
  Ediciones](https://fuegoblancoediciones.com/) and [El Signo
  Invisible](https://elsignoinvisible.com/maquinacion-poetica-digital/).
  [View his videos](https://www.youtube.com/playlist?list=PL6wOXY9xyyFBDY5zpudUlmJMWxHCzR9nh).

The project is also planning new works with Luis Manuel Pimentel and
collaborators from the digital-poetry community.

## What is included

- A static landing page for the project.
- Augmented-reality experiences for individual poems and artists.
- Image-target tracking that starts animated video experiences on compatible
  mobile devices.
- A QR-driven entry point from the printed flyer to each mobile experience.
- Artist profiles and links to related video collections.
- Artwork, videos, and reusable front-end assets in the `assets/` directory.

## Project structure

```text
.
├── index.html              # Main project website
├── assets/
│   ├── images/              # Artwork, logos, and image-target source files
│   ├── videos/              # AR experience videos
│   ├── css/                # Compiled stylesheets
│   └── js/                 # Website scripts
└── ar/
    ├── grethel/             # Grethel AR experience
    └── pimentel/            # Pimentel AR experience
```

## Run the website locally

The main site is a static website. Serve the repository root with any static
file server so that root-relative asset paths work correctly. For example:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000> in a browser.

## Develop an AR experience

Each AR project is an independent webpack application:

```bash
cd ar/grethel
npm install
npm run serve
```

Use the same commands from `ar/pimentel` to work on that experience. Create a
production bundle with:

```bash
npm run build
```

## Create image targets

The image-target CLI is maintained in the 8th Wall tools repository:

```text
8th wall repos/8thwall-main/apps/image-target-cli
```

1. Run the CLI from that directory:

    ```bash
    npx image-target-cli
    ```

2. Provide the path to the image file, not just its containing directory.
3. Use a source image of at least **480 × 640 pixels**. Resize images larger
   than **2048 pixels** on either side before processing.
4. Copy the generated target files from the `out` directory into the relevant
   AR project.
5. Add a play button to the target thumbnail when required.
6. Register the target in that project's `app.js` and `index.html`.
7. Keep target names, image filenames, video IDs, and HTML references
   consistent.

Example target markup:

```html
<xrextras-named-image-target name="sigue_rondando_la_sombra">
    <xrextras-target-video-sound
        video="#sigue_rondando_la_sombra"
        thumb="#sigue_rondando_la_sombra"
        height="1.34"
        width="1"
    ></xrextras-target-video-sound>
</xrextras-named-image-target>
```

After adding a target, build the relevant AR project so the generated source
is ready for deployment.

## Roadmap

- [ ] Preload CSS and JavaScript files.
- [ ] Minify production assets.
- [ ] Configure AWS hosting with S3, CloudFront, and a hosted zone.
- [ ] Add a contact Lambda.
- [ ] Add Cloudflare Turnstile.
- [ ] Continue expanding 8th Wall experiences.
