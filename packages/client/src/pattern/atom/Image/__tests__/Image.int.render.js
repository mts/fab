import React from 'react'
import { Image } from '../Image'

export const dogRandomImage = {
  src: 'https://images.dog.ceo/breeds/collie-border/n02106166_1031.jpg',
  alt: 'collie',
  breed: 'collie',
}

export const catRandomImage = {
  src: 'https://66.media.tumblr.com/tumblr_m4iejdP8Hb1qd477zo1_250.jpg',
  alt: 'beng',
  breed: 'beng',
}

export const dogImageRender = <Image randomImage={dogRandomImage} />
export const catImageRender = <Image randomImage={catRandomImage} />
