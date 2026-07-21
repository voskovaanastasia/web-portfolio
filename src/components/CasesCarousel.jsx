import { useState } from 'react';

export default function CasesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cases = [
    {
      id: 1,
      title: 'Case Study One',
      description: 'A successful project that resulted in 40% increase in user engagement.',
      image: 'https://via.placeholder.com/500x300',
      results: '40% increase in engagement',
    },
    {
      id: 2,
      title: 'Case Study Two',
      description: 'Redesigned platform that improved user experience and accessibility.',
      image: 'https://via.placeholder.com/500x300',
      results: 'Improved UX scores by 60%',
    },
    {
      id: 3,
      title: 'Case Study Three',
      description: 'Optimized performance that reduced load time by half.',
      image: 'https://via.placeholder.com/500x300',
      results: '50% faster loading time',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Case Studies</h2>

        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {cases.map((caseStudy) => (
                <div key={caseStudy.id} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 items-center bg-white dark:bg-gray-800 p-8 rounded-lg">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="rounded-lg object-cover h-80 w-full"
                    />
                    <div>
                      <h3 className="text-3xl font-bold mb-4">
                        {caseStudy.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                        {caseStudy.description}
                      </p>
                      <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Key Result
                        </p>
                        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                          {caseStudy.results}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 transition-colors"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 transition-colors"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 dark:bg-gray-600 w-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
