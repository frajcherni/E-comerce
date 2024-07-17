import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    name: 'Sheryl Berge',
    image: 'https://randomuser.me/api/portraits/men/15.jpg',
    quote: "I love the tech accessories I purchased from this site. The quality is exceptional and the prices are unbeatable."
  },
  {
    name: 'Leland Kiehn',
    image: 'https://randomuser.me/api/portraits/women/15.jpg',
    quote: "As a professional tech enthusiast, I rely on high-performance gadgets for my work. This site offers a great selection of top-notch products."
  },
  {
    name: 'Peter Renolds',
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
    quote: "The tech accessories I bought here fit perfectly and work amazingly. I highly recommend this store to anyone looking for quality gadgets."
  }
];

const TestimonialsList = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: 'ease-in',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <section id="testimonials" aria-label="What our customers are saying" className="bg-slate-50 py-20 sm:py-31">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Testimonials</h2>
          <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Discover what our customers have to say about their experience with our latest tech accessories.</p>
        </div>
        <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <li key={index} data-aos="fade-up">
              <div className="flex flex-col gap-y-6 sm:gap-y-8">
                <div>
                  <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                    <svg aria-hidden="true" width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                    </svg>
                    <blockquote className="relative">
                      <p className="text-lg tracking-tight text-slate-900">{testimonial.quote}</p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="font-display text-base text-slate-900">{testimonial.name}</div>
                      </div>
                      <div className="overflow-hidden rounded-full bg-slate-50">
                        <img alt="" className="h-14 w-14 object-cover" style={{ color: 'transparent' }} src={testimonial.image} />
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TestimonialsList;
