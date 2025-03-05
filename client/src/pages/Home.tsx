import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Carousel from '../components/Carousel';

const features = [
  'Professional grooming services',
  'Experienced and caring staff',
  'State-of-the-art facilities',
  'Flexible scheduling options',
];

const testimonials = [
  {
    content: 'The best grooming service I\'ve ever experienced. My dog loves coming here!',
    author: 'Sarah Johnson',
    role: 'Dog Parent',
  },
  {
    content: 'Professional, caring, and thorough. Highly recommend their services!',
    author: 'Michael Chen',
    role: 'Pet Owner',
  },
  {
    content: 'Outstanding service and attention to detail. My pup always looks amazing!',
    author: 'Emily Davis',
    role: 'Dog Lover',
  },
];

import { BathIcon, GroomingIcon, NailIcon } from '../components/icons/ServiceIcons';

const services = [
  {
    name: 'Full Grooming',
    description: 'Complete grooming service including bath, haircut, nail trimming, and more.',
    price: 'From $65',
    icon: GroomingIcon,
  },
  {
    name: 'Bath & Brush',
    description: 'Thorough bath, blow dry, and brush out for a clean and fresh pet.',
    price: 'From $45',
    icon: BathIcon,
  },
  {
    name: 'Nail Trimming',
    description: 'Professional nail trimming service to keep your pet comfortable.',
    price: 'From $20',
    icon: NailIcon,
  },
];

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20 to-white">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="relative isolate px-6 pt-14 lg:px-8 min-h-[90vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Carousel />
          </div>
          <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56 relative"></div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">Our Services</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer a variety of grooming services to keep your pet looking and feeling their best.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.name} className="flex flex-col bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                    <service.icon className="h-10 w-10 text-[#f4b41a]" aria-hidden="true" />
                    <div className="flex flex-col">
                      <span>{service.name}</span>
                      <span className="text-base font-medium text-[#f4b41a]">{service.price}</span>
                    </div>
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                    <Link to="/booking" className="mt-4 text-[#f4b41a] hover:text-[#f4b41a]/80 font-medium transition-colors duration-200">
                      Book this service →
                    </Link>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Meet The Groomers Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">Meet The Groomers</h2>
          </div>
          <div className="mx-auto mt-16 max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] rounded-2xl bg-gray-50 overflow-hidden">
              {/* Placeholder for groomer image */}
              <div className="w-full h-full bg-gray-200"></div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Shelby - Owner & Head Groomer</h3>
              <div className="space-y-4 text-base leading-7 text-gray-600">
                <p>I am a certified dog groomer with over 4 years of experience. I'm also certified in canine first aid and CPR by the International Professional Groomers as well as the American Kennel Club.</p>
                <p>I have completed specialized courses in pet skin care and dog energy recognition, demonstrating a deep understanding of the unique needs of each dog.</p>
                <p>My passion for the well being of dogs motivates me to provide a stress-free and convenient service for pet-owners. All while promoting a luxurious and positive experience for my furry clients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center mb-16">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-[#f4b41a]">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">
              What Our Clients Say
            </p>
          </div>
          <div className="mx-auto flow-root max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.author}
                  className="relative"
                >
                  <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <blockquote className="text-gray-900 text-lg">
                      <p className="italic">{`"${testimonial.content}"`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4 border-t border-gray-100 pt-4">
                      <div>
                        <div className="font-semibold text-[#f4b41a]">{testimonial.author}</div>
                        <div className="text-gray-600">{testimonial.role}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;