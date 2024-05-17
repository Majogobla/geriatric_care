import React from "react"
import { useState } from "react"

import PhotoAlbum from "react-photo-album"

import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import Slideshow from "yet-another-react-lightbox/plugins/slideshow"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import "yet-another-react-lightbox/plugins/thumbnails.css"

const images = [
  {
     src: "/gallery/image (1).webp",
     width: 532,
     height: 355,
  },
  {
    src: "/gallery/image (2).webp",
    width: 590,
    height: 410,
  },
  {
    src: "/gallery/image (3).webp",
    width: 576,
    height: 383,
  },
  {
    src: "/gallery/image (4).webp",
    width: 450,
    height: 300,
  },
  {
    src: "/gallery/image (5).webp",
    width: 471,
    height: 706,
  },
  {
    src: "/gallery/image (6).webp",
    width: 216,
    height: 384,
  },
  {
    src: "/gallery/image (7).webp",
    width: 624,
    height: 416,
  },
  {
    src: "/gallery/image (8).webp",
    width: 604,
    height: 402,
  },
  {
    src: "/gallery/image (9).webp",
    width: 472,
    height: 708,
  },
  {
    src: "/gallery/image (10).webp",
    width: 883,
    height: 489,
  },
  {
    src: "/gallery/image (11).webp",
    width: 1000,
    height: 695,
  },
  {
    src: "/gallery/image (12).webp",
    width: 740,
    height: 493,
  },
  {
    src: "/gallery/image (13).webp",
    width: 552,
    height: 367,
  },
]

export default function Counter() {
  const [index, setIndex] = useState(-1)

  return(
    <section className=" w-full bg-[#008000]">
      <div className="max-w-screen-2xl w-full mx-auto px-4 py-12">
        <PhotoAlbum layout="columns" photos={images} onClick={({ index }) => setIndex(index)}/>
      </div>

      <Lightbox
        slides={images}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </section>
  )
}