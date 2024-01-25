// Import necessary components and styles
import Footer from "../components/Footer";
import Header from "../components/Header";

// Styles


// Function component for the About page
export default function About({ userInfo }) {
  return (
    <>
      <Header userInfo={userInfo} />

      {/* Hero Section */}
      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="grid gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              We didn't reinvent the wheel
            </h2>
            <p className="mb-4">
              Welcome to our vibrant and dynamic multiseller platform, where the
              worlds of real estate and automotive excellence converge
              seamlessly. As you step into the digital realm of possibilities,
              you are greeted by an expansive marketplace that transcends the
              ordinary, offering a tapestry of choices for those seeking the
              perfect home or dream car.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            {/* Image 1 */}
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            {/* Image 2 */}
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <main className="px-10 bg-white pb-10 lg:px-20 text-lg font-light text-gray-500 dark:bg-gray-900">
        {/* First Paragraph */}
        <p className="mb-8">
          <span className="font-semibold text-black">
            Embark on a Journey Through Exceptional Real Estate:
          </span>
          <br />
          Immerse yourself in a virtual landscape that mirrors the diversity of
          the real estate market. Our multiseller platform brings together a
          myriad of properties, from luxurious penthouses overlooking city
          skylines to quaint countryside estates nestled in nature's embrace.
          Whether you're in pursuit of a contemporary urban dwelling or a
          charming rural retreat, our curated selection caters to every taste
          and lifestyle. Each listing is a testament to craftsmanship, design,
          and the pursuit of perfection. Browse through an extensive array of
          homes, each accompanied by detailed descriptions, high-quality images,
          and virtual tours that bring the properties to life. With our
          user-friendly interface, finding your ideal home is an effortless and
          enjoyable experience.
        </p>

        {/* Second Paragraph */}
        <p className="mb-8">
          <span className="font-semibold text-black">
            Rev Up Your Dreams with the Finest Cars:
          </span>
          <br />
          For automotive enthusiasts and those in search of their next set of
          wheels, our multiseller platform offers an unrivaled collection of
          cars that embody both performance and style. From sleek sports cars
          that hug the curves of the road to rugged off-road vehicles ready to
          conquer any terrain, our marketplace caters to diverse preferences.
          <br /> <br />
          Navigate through a showroom of automotive excellence, where every
          listing is a showcase of engineering brilliance. Detailed
          specifications, performance metrics, and high-resolution images
          accompany each listing, ensuring that you make informed decisions while
          indulging in the thrill of discovering your dream car.
        </p>

        {/* Third Paragraph */}
        <p className="mb-8">
          <span className="font-semibold text-black">
            Empowering Sellers, Delighting Buyers:
          </span>
          <br />
          Our multiseller platform is more than just a marketplace; it's a
          community where sellers and buyers converge with shared aspirations.
          Sellers benefit from a robust and feature-rich platform that amplifies
          their listings, providing exposure to a wide and discerning audience.
          Intuitive tools and analytics empower sellers to showcase their
          offerings with finesse, ensuring that their properties and vehicles
          stand out in the digital crowd. <br /> <br />
          Buyers, on the other hand, enjoy a tailored and immersive experience,
          guided by advanced search filters, personalized recommendations, and a
          seamless transaction process. Whether you're a first-time homebuyer or
          a seasoned car enthusiast, our platform is designed to make your
          journey enjoyable, efficient, and ultimately successful.
        </p>

        {/* Fourth Paragraph */}
        <p className="mb-8">
          <span className="font-semibold text-black">
            Experience the Future of Multiseller Platforms:
          </span>
          <br />
          Welcome to a multiseller platform that transcends traditional
          boundaries, fusing the realms of real estate and automotive excellence
          into a singular, captivating experience. Explore, discover, and embark
          on a journey through a marketplace where dreams are realized, and
          aspirations find expression. Our multiseller website is not just a
          destination; it's a gateway to a world where possibilities unfold with
          every click, and where the perfect home or car awaits your discovery.
        </p>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
