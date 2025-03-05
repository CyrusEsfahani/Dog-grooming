import { Link } from 'react-router-dom';

const services = [
  {
    name: 'Full Grooming',
    description: 'Our complete grooming package includes everything your pet needs to look and feel their best. Starting with a relaxing bath using premium shampoos, followed by thorough blow-drying and brushing. Our professional groomers will then provide a stylish haircut according to your specifications or breed standard. The service includes nail trimming, ear cleaning, and sanitary trimming.',
    price: 'From $65',
    duration: '2-3 hours',
    features: [
      'Premium shampoo bath',
      'Professional haircut',
      'Nail trimming',
      'Ear cleaning',
      'Teeth brushing',
      'Bow or bandana'
    ]
  },
  {
    name: 'Bath & Brush',
    description: 'Perfect for pets who need a thorough cleaning without a haircut. This service includes a deep-cleaning bath with premium shampoo, blow-dry, and thorough brush-out to remove loose fur and prevent matting. Great for maintaining your pet\'s coat between full grooming sessions.',
    price: 'From $45',
    duration: '1-2 hours',
    features: [
      'Deep cleaning bath',
      'Blow dry',
      'Brush out',
      'Nail trimming',
      'Ear cleaning',
      'Bow or bandana'
    ]
  },
  {
    name: 'Nail Trimming',
    description: 'Keep your pet comfortable and your floors protected with our professional nail trimming service. Our experienced groomers use proper techniques and tools to safely trim your pet\'s nails. This service can be booked alone or added to any grooming package.',
    price: 'From $20',
    duration: '15-30 minutes',
    features: [
      'Professional trimming',
      'Nail filing',
      'Quick and safe service',
      'Experienced groomers'
    ]
  },
  {
    name: 'Specialty Treatments',
    description: 'Pamper your pet with our specialty treatments designed to address specific needs. From de-shedding treatments to flea baths and skin therapy options, we offer solutions for various coat and skin conditions.',
    price: 'From $35',
    duration: '30-60 minutes',
    features: [
      'De-shedding treatments',
      'Flea & tick baths',
      'Skin therapy',
      'Detangling',
      'Special shampoos'
    ]
  }
];

const Services = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Grooming Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Professional grooming services tailored to your pet\'s needs. Choose from our range of services
            designed to keep your furry friend looking and feeling their best.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200"
              >
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                  {service.name}
                  <span className="ml-auto text-sm font-medium text-gray-600">{service.price}</span>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-6 font-semibold">Duration: {service.duration}</p>
                  <ul role="list" className="mt-4 space-y-3 text-sm">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <svg
                          className="h-6 w-5 flex-none text-primary-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </dd>
                <div className="mt-6">
                  <Link
                    to="/booking"
                    className="text-sm font-semibold leading-6 text-primary-600 hover:text-primary-500"
                  >
                    Book this service <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Services;