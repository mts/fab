import React from 'react'
import { Select } from '../Select'

const options = [
  { value: 'affenpinscher', text: 'affenpinscher' },
  { value: 'african', text: 'african' },
  { value: 'airedale', text: 'airedale' },
  { value: 'akita', text: 'akita' },
  { value: 'appenzeller', text: 'appenzeller' },
  { value: 'shepherd-australian', text: 'shepherd australian' },
  { value: 'basenji', text: 'basenji' },
  { value: 'beagle', text: 'beagle' },
  { value: 'bluetick', text: 'bluetick' },
  { value: 'borzoi', text: 'borzoi' },
  { value: 'bouvier', text: 'bouvier' },
  { value: 'boxer', text: 'boxer' },
  { value: 'brabancon', text: 'brabancon' },
  { value: 'briard', text: 'briard' },
  { value: 'norwegian-buhund', text: 'norwegian buhund' },
  { value: 'boston-bulldog', text: 'boston bulldog' },
  { value: 'english-bulldog', text: 'english bulldog' },
  { value: 'french-bulldog', text: 'french bulldog' },
  { value: 'staffordshire-bullterrier', text: 'staffordshire bullterrier' },
  { value: 'cairn', text: 'cairn' },
  { value: 'australian-cattledog', text: 'australian cattledog' },
  { value: 'chihuahua', text: 'chihuahua' },
  { value: 'chow', text: 'chow' },
  { value: 'clumber', text: 'clumber' },
  { value: 'cockapoo', text: 'cockapoo' },
  { value: 'border-collie', text: 'border collie' },
  { value: 'coonhound', text: 'coonhound' },
  { value: 'cardigan-corgi', text: 'cardigan corgi' },
  { value: 'cotondetulear', text: 'cotondetulear' },
  { value: 'dachshund', text: 'dachshund' },
  { value: 'dalmatian', text: 'dalmatian' },
  { value: 'great-dane', text: 'great dane' },
  { value: 'scottish-deerhound', text: 'scottish deerhound' },
  { value: 'dhole', text: 'dhole' },
  { value: 'dingo', text: 'dingo' },
  { value: 'doberman', text: 'doberman' },
  { value: 'norwegian-elkhound', text: 'norwegian elkhound' },
  { value: 'entlebucher', text: 'entlebucher' },
  { value: 'eskimo', text: 'eskimo' },
  { value: 'bichon-frise', text: 'bichon frise' },
  { value: 'germanshepherd', text: 'germanshepherd' },
  { value: 'italian-greyhound', text: 'italian greyhound' },
  { value: 'groenendael', text: 'groenendael' },
  { value: 'havanese', text: 'havanese' },
  { value: 'afghan-hound', text: 'afghan hound' },
  { value: 'basset-hound', text: 'basset hound' },
  { value: 'blood-hound', text: 'blood hound' },
  { value: 'english hound', text: 'english hound' },
  { value: 'ibizan-hound', text: 'ibizan hound' },
  { value: 'plott-hound', text: 'plott hound' },
  { value: 'walker-hound', text: 'walker hound' },
  { value: 'husky', text: 'husky' },
  { value: 'keeshond', text: 'keeshond' },
  { value: 'kelpie', text: 'kelpie' },
  { value: 'komondor', text: 'komondor' },
  { value: 'kuvasz', text: 'kuvasz' },
  { value: 'labrador', text: 'labrador' },
  { value: 'leonberg', text: 'leonberg' },
  { value: 'lhasa', text: 'lhasa' },
  { value: 'malamute', text: 'malamute' },
  { value: 'malinois', text: 'malinois' },
  { value: 'maltese', text: 'maltese' },
  { value: 'bull-mastiff', text: 'bull mastiff' },
  { value: 'english-mastiff', text: 'english mastiff' },
  { value: 'tibetan-mastiff', text: 'tibetan mastiff' },
  { value: 'mexicanhairless', text: 'mexicanhairless' },
  { value: 'mix', text: 'mix' },
  { value: 'bernese-mountain', text: 'bernese mountain' },
  { value: 'swiss-mountain', text: 'swiss mountain' },
  { value: 'newfoundland', text: 'newfoundland' },
  { value: 'otterhound', text: 'otterhound' },
  { value: 'papillon', text: 'papillon' },
  { value: 'pekinese', text: 'pekinese' },
  { value: 'pembroke', text: 'pembroke' },
  { value: 'miniature-pinscher', text: 'miniature pinscher' },
  { value: 'pitbull', text: 'pitbull' },
  { value: 'german-pointer', text: 'german pointer' },
  { value: 'germanlonghair-pointer', text: 'germanlonghair pointer' },
  { value: 'pomeranian', text: 'pomeranian' },
  { value: 'miniature-poodle', text: 'miniature poodle' },
  { value: 'standard-poodle', text: 'standard poodle' },
  { value: 'toy-poodle', text: 'toy poodle' },
  { value: 'pug', text: 'pug' },
  { value: 'puggle', text: 'puggle' },
  { value: 'pyrenees', text: 'pyrenees' },
  { value: 'redbone', text: 'redbone' },
  { value: 'chesapeake-retriever', text: 'chesapeake retriever' },
  { value: 'curly-retriever', text: 'curly retriever' },
  { value: 'flatcoated-retriever', text: 'flatcoated retriever' },
  { value: 'golden-retriever', text: 'golden retriever' },
  { value: 'rhodesian-ridgeback', text: 'rhodesian ridgeback' },
  { value: 'rottweiler', text: 'rottweiler' },
  { value: 'saluki', text: 'saluki' },
  { value: 'samoyed', text: 'samoyed' },
  { value: 'schipperke', text: 'schipperke' },
  { value: 'giant-schnauzer', text: 'giant schnauzer' },
  { value: 'miniature-schnauzer', text: 'miniature schnauzer' },
  { value: 'english-setter', text: 'english setter' },
  { value: 'gordon-setter', text: 'gordon setter' },
  { value: 'irish-setter', text: 'irish setter' },
  { value: 'english-sheepdog', text: 'english sheepdog' },
  { value: 'shetland-sheepdog', text: 'shetland sheepdog' },
  { value: 'shiba', text: 'shiba' },
  { value: 'shihtzu', text: 'shihtzu' },
  { value: 'blenheim-spaniel', text: 'blenheim spaniel' },
  { value: 'brittany-spaniel', text: 'brittany spaniel' },
  { value: 'cocker-spaniel', text: 'cocker spaniel' },
  { value: 'irish-spaniel', text: 'irish spaniel' },
  { value: 'japanese-spaniel', text: 'japanese spaniel' },
  { value: 'sussex-spaniel', text: 'sussex spaniel' },
  { value: 'welsh-spaniel', text: 'welsh spaniel' },
  { value: 'english-springer', text: 'english springer' },
  { value: 'stbernard', text: 'stbernard' },
  { value: 'american-terrier', text: 'american terrier' },
  { value: 'australian-terrier', text: 'australian terrier' },
  { value: 'bedlington-terrier', text: 'bedlington terrier' },
  { value: 'border-terrier', text: 'border terrier' },
  { value: 'dandie-terrier', text: 'dandie terrier' },
  { value: 'fox-terrier', text: 'fox terrier' },
  { value: 'irish-terrier', text: 'irish terrier' },
  { value: 'kerryblue-terrier', text: 'kerryblue terrier' },
  { value: 'lakeland-terrier', text: 'lakeland terrier' },
  { value: 'norfolk-terrier', text: 'norfolk terrier' },
  { value: 'norwich-terrier', text: 'norwich terrier' },
  { value: 'patterdale-terrier', text: 'patterdale terrier' },
  { value: 'russell-terrier', text: 'russell terrier' },
  { value: 'scottish-terrier', text: 'scottish terrier' },
  { value: 'sealyham-terrier', text: 'sealyham terrier' },
  { value: 'silky-terrier', text: 'silky terrier' },
  { value: 'tibetan-terrier', text: 'tibetan terrier' },
  { value: 'toy-terrier', text: 'toy terrier' },
  { value: 'westhighland-terrier', text: 'westhighland terrier' },
  { value: 'wheaten-terrier', text: 'wheaten terrier' },
  { value: 'yorkshire-terrier', text: 'yorkshire terrier' },
  { value: 'vizsla', text: 'vizsla' },
  { value: 'spanish-waterdog', text: 'spanish waterdog' },
  { value: 'weimaraner', text: 'weimaraner' },
  { value: 'whippet', text: 'whippet' },
  { value: 'irish-wolfhound', text: 'irish wolfhound' },
]

export const defaultRender = <Select options={options} />
