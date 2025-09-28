import Footer from "../footer/footer"
import Navbar from "../navbar/navbar"
import StickyContactIcons from "../stickyicons/stickyIcons"

export default function About() {
    return(
        <>
        <Navbar/>
        <div className="w-full mt-16 px-6 py-12 bg-gray-50 text-gray-800">
  <div className="max-w-5xl mx-auto">
    {/* Heading */}
    <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-6">
      About Us
    </h1>

    {/* Intro */}
     <p className="mb-6 text-lg text-gray-700 leading-relaxed text-center">
    Welcome to <span className="font-semibold text-blue-600">Servanisafety nets</span>, 
    your trusted partner in home and workplace safety. We go beyond just 
    installing nets and grills – we create safe, clean, and worry-free 
    environments for families, children, pets, and communities. 
    With a commitment to quality and customer satisfaction, we combine 
    innovation with care to make your spaces more secure and comfortable.
  </p>

  <p className="mb-8 text-gray-700 leading-relaxed text-center">
    Our journey started with a simple belief: <span className="italic">
    safety should never be a compromise</span>. Over the years, we’ve helped 
    countless homes and businesses stay protected from accidents, pests, 
    and unwanted hazards, while maintaining aesthetics and comfort.  
  </p>

    {/* Specialization */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-3">
        We Specialize In
      </h2>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <span className="font-semibold">Safety Nets</span> – Strong and durable nets to prevent
          accidents in balconies, windows, terraces, open areas, staircases, and even construction
          sites. Ideal for protecting children, elders, and pets from unexpected falls.
        </li>
        <li>
          <span className="font-semibold">Pigeon Protection Nets</span> – Pigeons may look harmless,
          but they can cause serious hygiene issues by dirtying balconies, AC units, and open
          spaces. Our nets keep birds away without harming them, ensuring a clean and healthy
          environment.
        </li>
        <li>
          <span className="font-semibold">Bird Spikes</span> – A powerful solution to prevent pigeons
          and other birds from sitting and nesting on ledges, pipes, or signboards. Safe,
          maintenance-free, and long-lasting.
        </li>
        <li>
          <span className="font-semibold">Invisible Grills</span> – A modern and stylish alternative
          to traditional window grills. These high-strength, rust-proof grills provide safety
          without blocking your view.
        </li>
      </ul>
    </section>

    {/* Why Choose Us */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-3">
        Why Choose Us?
      </h2>
      <ul className="list-disc pl-6 space-y-3">
        <li>✅ Trusted Expertise – We provide the right solution for every situation.</li>
        <li>✅ Quality First – Only premium-grade, weather-resistant materials.</li>
        <li>✅ Skilled Installation – Neat, professional work without wall damage.</li>
        <li>✅ Affordable Pricing – Safety at cost-effective rates.</li>
        <li>✅ Customer Satisfaction – Friendly service, quick response, and reliable support.</li>
      </ul>
    </section>

    {/* Mission */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-3">
        Our Mission
      </h2>
      <p className="text-lg leading-relaxed">
        Our mission is to make every home, apartment, and workplace a{" "}
        <span className="font-medium">secure and worry-free space</span>. We believe safety is not a
        luxury – it is a basic need. By offering innovative products like invisible grills and
        protective nets, we combine safety, hygiene, and aesthetics to give you the best living
        experience.
      </p>
    </section>

    {/* Values */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-3">
        Our Values
      </h2>
      <ul className="list-disc pl-6 space-y-3">
        <li>🔒 Safety First – Protecting lives is at the heart of everything we do.</li>
        <li>🌿 Clean & Healthy Living – Keeping your space hygienic and bird-free.</li>
        <li>🤝 Customer Trust – Long-term relationships built on honesty and care.</li>
        <li>💡 Innovation – Modern, stylish solutions for today’s lifestyle.</li>
      </ul>
    </section>

    {/* Why Solutions Matter */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-3">
        Why Our Solutions Matter
      </h2>
      <p className="mb-4 text-lg leading-relaxed">
        Accidents and bird-related issues are more common than most people think. With our safety
        nets, pigeon protection, spikes, and invisible grills, you can:
      </p>
      <ul className="list-disc pl-6 space-y-3">
        <li>Protect your loved ones from unexpected accidents.</li>
        <li>Maintain hygiene by keeping birds and dust away.</li>
        <li>Enhance beauty with invisible solutions that don’t disturb your home’s design.</li>
        <li>Save money on frequent cleaning and maintenance.</li>
        <li>Enjoy peace of mind, knowing your family and property are secure.</li>
      </ul>
    </section>

    {/* Closing */}
    <p className="text-center text-lg font-medium text-gray-700">
      At <span className="font-semibold text-blue-600">Servanisafety nets</span>, we don’t just install
      products – we install <span className="font-semibold">trust, safety, and comfort</span>.  
      Our goal is to give you a safe and clean environment, so you can focus on what truly matters –
      enjoying life with your family.
    </p>
  </div>
</div>
    <StickyContactIcons/>
<Footer/>

        </>
    )
};
