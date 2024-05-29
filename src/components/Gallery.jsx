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
     width: 1620,
     height: 1080,
  },
  {
    src: "/gallery/image (2).webp",
    width: 1556,
    height: 1080,
  },
  {
    src: "/gallery/image (3).webp",
    width: 1623,
    height: 1080,
  },
  {
    src: "/gallery/image (4).webp",
    width: 1618,
    height: 1080,
  },
  {
    src: "/gallery/image (5).webp",
    width: 721,
    height: 1080,
  },
  {
    src: "/gallery/image (6).webp",
    width: 608,
    height: 1080,
  },
  {
    src: "/gallery/image (7).webp",
    width: 1620,
    height: 1080,
  },
  {
    src: "/gallery/image (8).webp",
    width: 1623,
    height: 1080,
  },
  {
    src: "/gallery/image (9).webp",
    width: 721,
    height: 1080,
  },
  {
    src: "/gallery/image (10).webp",
    width: 1920,
    height: 1064,
  },
  {
    src: "/gallery/image (11).webp",
    width: 1554,
    height: 1080,
  },
  {
    src: "/gallery/image (12).webp",
    width: 1619,
    height: 1080,
  },
  {
    src: "/gallery/image (13).webp",
    width: 1624,
    height: 1080,
  },
]

export default function Counter() {
  const [index, setIndex] = useState(-1)

  return(
    <>
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#353535] dark:text-white mb-4">Nuestro Trabajo</h2>

      <div className="max-w-screen-2xl w-full mx-auto p-4">
        <PhotoAlbum layout="columns" photos={images} onClick={({ index }) => setIndex(index)}/>
      </div>

      <Lightbox
        slides={images}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  )
}