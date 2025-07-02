'use client';
import { InfiniteMovingCards } from './infinite-moving-cards';

const musicSchoolTestimonials = [
  {
    quote:
      'Joining the music school transformed my understanding of music and helped me to truly discover my own sound.',
    name: 'Alex Johnson',
    title: 'Guitar Student',
  },
  {
    quote:
      "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer.",
    name: 'Samantha Lee',
    title: 'Piano Student',
  },
  {
    quote:
      "This school offered me the tools and confidence to take my singing to the next level.",
    name: 'Michael Chen',
    title: 'Vocal Student',
  },
];

export default function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full bg-black bg-grid-white/[0.1] text-white flex flex-col items-center justify-center px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        Hear Our Harmony: Voices of Success
      </h2>
      <InfiniteMovingCards
        items={musicSchoolTestimonials}
        direction="left"
        speed="slow"
      />
    </div>
  );
}
