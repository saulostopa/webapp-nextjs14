// @ts-nocheck
import Image from 'next/image';
import Container from '@/components/utils/container';
import heroImg from '@/public/images/landingpage/workout-hero.png';

const Hero = ({ teaser, teaserDescription }) => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight  lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              {teaser}
            </h1>
            <p className="py-5 text-xl leading-normal light:text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              {teaserDescription}
            </p>
            <div className="flex flex-col items-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-start sm:flex-row">
              <a
                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-s2pro-primary rounded-md"
              >
                Download
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              sizes="100vw"
              className="object-cover"
              priority
              alt={teaser}
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
