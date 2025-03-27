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
    src: "https://content.geriatriccaresv.com/gallery-01.webp",
    width: 3840,
    height: 2160,
  },
  {
    src: "https://content.geriatriccaresv.com/gallery-02.webp",
    width: 3840,
    height: 2160,
  },
  {
    src: "https://content.geriatriccaresv.com/gallery-03.webp",
    width: 3840,
    height: 2160,
  },
  {
    src: "https://content.geriatriccaresv.com/gallery-04.webp",
    width: 3840,
    height: 2160,
  },
  {
    src: "https://content.geriatriccaresv.com/gallery-05.webp",
    width: 3840,
    height: 2160,
  },
  {
    src: "https://content.geriatriccaresv.com/gallery-06.webp",
    width: 3840,
    height: 2160,
  },
  {
    src: "https://content.geriatriccaresv.com/gallery-07.webp",
    width: 2880,
    height: 3840,
  },
  {
    src: "https://content.geriatriccaresv.com/gallery-08.webp",
    width: 2880,
    height: 3840,
  },
  {
    src: "https://content.geriatriccaresv.com/gallery-09.webp",
    width: 2880,
    height: 3840,
  },
  {
    src: "https://content.geriatriccaresv.com/gallery-10.webp",
    width: 2880,
    height: 3840,
  },
  {
    src: "https://content.geriatriccaresv.com/gallery-11.webp",
    width: 2880,
    height: 3840,
  },
  {
    src: "https://content.geriatriccaresv.com/gallery-12.webp",
    width: 2880,
    height: 3840,
  },
  {
    src: "https://content.geriatriccaresv.com/gallery-13.webp",
    width: 2880,
    height: 3840,
  },
  {
    src: "https://content.geriatriccaresv.com/gallery-14.webp",
    width: 2880,
    height: 3840,
  },
  {
    src: "https://content.geriatriccaresv.com/gallery-15.webp",
    width: 2880,
    height: 3840,
  },
  {
    src: "https://content.geriatriccaresv.com/gallery-16.webp",
    width: 2880,
    height: 3840,
  },
  {
    src: "https://content.geriatriccaresv.com/gallery-17.webp",
    width: 2880,
    height: 3840,
  },
  {
    src: "https://content.geriatriccaresv.com/gallery-18.webp",
    width: 2880,
    height: 3840,
  },
  {
    src: "https://content.geriatriccaresv.com/gallery-19.webp",
    width: 2880,
    height: 3840,
  },
  {
    src: "https://content.geriatriccaresv.com/gallery-20.webp",
    width: 2880,
    height: 3840,
  },
  {
    src: "https://content.geriatriccaresv.com/gallery-21.webp",
    width: 2880,
    height: 3840,
  },
  {
    src: "https://content.geriatriccaresv.com/gallery-22.webp",
    width: 2880,
    height: 3840,
  },
]

export default function Counter() {
  const [index, setIndex] = useState(-1)

  return(
    <>
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#353535] dark:text-white mb-4">Nuestro Trabajo</h2>

      <div className="max-w-screen-2xl w-full mx-auto p-2 md:p-4">
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