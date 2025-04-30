import React from 'react';

interface FeatureHighlightProps {
  title: string;
  description: string;
  imageSide: 'left' | 'right';
  children: React.ReactNode;
}

const FeatureHighlight: React.FC<FeatureHighlightProps> = ({
  title,
  description,
  imageSide,
  children
}) => {
  // Separate list items from the phone mockup
  const listItems: React.ReactElement[] = [];
  let phoneMockup: React.ReactElement | null = null;

  // Process children to separate list items from phone mockup
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === 'li') {
        listItems.push(child);
      } else if (!phoneMockup) {
        // Only take the first non-li element as the phone mockup
        phoneMockup = child;
      }
    }
  });

  return (
    <section className="md:snap-section bg-dark py-16 md:py-0">
      <div className="container-custom h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div
            className={`flex flex-col ${
              imageSide === 'right' ? 'md:order-1 text-center md:text-left' : 'md:order-2 text-center md:text-right'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {title}
            </h2>
            <p className="text-base text-gray-300 mb-6 max-w-md mx-auto md:mx-0">
              {description}
            </p>

            {/* Feature bullets */}
            <ul className={`space-y-3 mb-6 ${imageSide === 'right' ? '' : 'md:ml-auto'}`}>
              {listItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className={`flex items-center ${imageSide === 'right' ? '' : 'md:ml-auto md:flex-row-reverse'}`}>
                    <div className="text-primary-light mr-2 md:mx-2 flex-shrink-0">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm">{item.props.children}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* App Screenshot/Mockup */}
          <div className={`flex justify-center ${imageSide === 'right' ? 'md:order-2' : 'md:order-1'}`}>
            {phoneMockup}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlight;
