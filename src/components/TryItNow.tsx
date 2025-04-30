import AppInterface from './try-it-now/AppInterface';

const TryItNow = () => {
  return (
    <section className="pt-20 pb-12 md:pt-28 md:pb-16 bg-gradient-to-b from-dark-darker to-dark min-h-screen">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Try <span className="text-primary-light">Lotus</span> Now
          </h1>

          <p className="text-base text-gray-300 mb-8 max-w-md mx-auto text-center">
            Chat with your AI fitness coach, track your workouts, and monitor your progress.
            Try the chat feature now, and download the app for full workout and diet tracking capabilities.
          </p>

          <div className="mb-8 w-full max-w-md mx-auto">
            <AppInterface />
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-4">Want the full experience?</p>
            <a
              href="/#download"
              className="btn bg-primary-light text-dark font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Download the App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryItNow;