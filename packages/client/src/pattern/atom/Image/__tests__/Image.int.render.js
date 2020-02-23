import React from 'react'
import { Image } from '../Image'

export const dogImageSource = {
  src: 'https://images.dog.ceo/breeds/collie-border/n02106166_1031.jpg',
  alt: 'cute dog',
}

export const catImageSource = {
  src: 'https://66.media.tumblr.com/tumblr_m4iejdP8Hb1qd477zo1_250.jpg',
  alt: 'cute cat',
}

export const dogImageRender = <Image source={dogImageSource} />
export const catImageRender = <Image source={catImageSource} />
