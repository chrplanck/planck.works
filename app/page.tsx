import Button from '../components/button';

export default function Home() {
  return (
    <div className="grid md:place-items-center h-screen">
      <div className="p-5 md:text-center">
        <h1
          className="font-serif font-bold text-[44px] sm:text-[52px] md:text-[58px] lg:text-[76px]
            text-orange leading-tight"
        >
          Christian Planck
          <em className="text-dark-grey ml-1">Works</em>
        </h1>
        <p
          className="
            text-[18px] md:text-[20px] lg:text-[24px] md:w-[690px] lg:w-[800px] font-sans
            mt-3 mb-6 md:mt-5 md:mb-10 mx-auto"
        >
          Good day! I'm Christian, a <b>freelance web developer</b> passionate
          about building digital products that users love. Currently focused on
          the <b>React</b> and <b>Node.js</b> ecosystems, but also experienced
          with many other web technologies. Let's build something great
          together.
        </p>
        <Button href="https://www.linkedin.com/in/chrplanck/">
          Let's connect
        </Button>
        <Button href="tel:27282500">27 28 25 00</Button>
        <Button href="mailto:christian@planck.works">Write me</Button>
      </div>
    </div>
  );
}
