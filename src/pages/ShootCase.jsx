import CaseLayout from '../components/CaseLayout';
import toolFigma from '../assets/icon-figma.svg';
import toolPhotoshop from '../assets/toolkit/photoshop.svg';
import toolLightroom from '../assets/toolkit/lightroom.svg';

const project = {
  name: 'Shoot',
  title: 'Shoot: Art Direction & Brand Photography',
  heroImage: 'case-shoot.png',
  tags: ['Art Direction', 'Photography', 'Brand Visuals'],
  meta: [
    { label: 'Participation', value: 'Art Director, Designer' },
    { label: 'Service', value: 'Art Direction, Photo Production' },
    { label: 'My Team', value: 'Photographer, Stylist' },
    { label: 'Timeline', value: 'TBD' },
  ],
  tools: [
    { icon: toolFigma, label: 'Figma' },
    { icon: toolPhotoshop, label: 'Photoshop' },
    { icon: toolLightroom, label: 'Lightroom' },
  ],
  summary: [
    {
      label: 'PROBLEM',
      text: 'Stock imagery made the brand look like everyone else in its category.',
    },
    {
      label: 'MY ROLE',
      text: 'Art direction — concept, moodboard, shot list, on-set direction, selection and retouch.',
    },
    {
      label: 'KEY DECISION',
      text: 'To be written — the core creative decision of the case.',
    },
  ],
  outcome: { value: 'TBD', label: 'Key outcome metric' },
  intro: {
    heading: 'A visual language the brand actually owns.',
    image: 'case-shoot-intro.png',
    body: (
      <>
        An <strong>art-directed photo shoot</strong> built to give the brand{' '}
        <strong>a reusable image library</strong> instead of one-off assets. The work ran from{' '}
        <strong>concept and moodboard through shot list, on-set direction,</strong> selection, and
        retouch &mdash; with every frame planned against a real placement: hero, card, social, or
        deck.
      </>
    ),
  },
};

const screens = [
  {
    title: 'Concept & Moodboard',
    image: 'case-shoot-moodboard.png',
    blocks: [
      {
        heading: 'Direction before logistics',
        text: (
          <>
            <strong>Palette, light, and framing were agreed on a moodboard first,</strong> so
            production decisions had a reference to answer to rather than taste debates on set.
          </>
        ),
      },
      {
        heading: 'Shot list tied to placements',
        text: (
          <>
            <strong>Every planned frame mapped to a real slot</strong> &mdash; site hero, card
            crop, vertical social &mdash; which set aspect ratios and safe areas before the shoot
            day.
          </>
        ),
      },
    ],
  },
  {
    title: 'On Set',
    image: 'case-shoot-onset.png',
    blocks: [
      {
        heading: 'Consistent light setup',
        text: (
          <>
            <strong>One lighting scheme across the day</strong> keeps the library coherent when
            images later sit side by side in a grid.
          </>
        ),
      },
      {
        heading: 'Shooting for the crop',
        text: (
          <>
            Frames were composed with{' '}
            <strong>headroom for overlaid type and multiple crop ratios,</strong> so one capture
            serves several placements.
          </>
        ),
      },
    ],
  },
  {
    title: 'Selection & Retouch',
    image: 'case-shoot-retouch.png',
    blocks: [
      {
        heading: 'Selects against the shot list',
        text: (
          <>
            <strong>Selection was scored against the original placements,</strong> not favourites
            &mdash; the set ships complete rather than pretty but partial.
          </>
        ),
      },
      {
        heading: 'One grade across the set',
        text: (
          <>
            <strong>A single colour grade applied to every image</strong> makes the library read as
            one brand voice wherever the photos appear.
          </>
        ),
      },
    ],
  },
];

export default function ShootCase() {
  return <CaseLayout project={project} screens={screens} screensLabel="Process" />;
}
