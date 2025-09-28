export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  detailedContent?: string; // extra rich content for footer pages
};

export const servicesData: Record<string, Service> = {
  "pigeon-safety-nets": {
    id: "pigeon-safety-nets",
    title: "Pigeon Safety Nets",
    description:
      "Durable and effective nets to prevent pigeons from entering and dirtying your home or office spaces.",
    detailedContent: `
      Our pigeon safety nets provide **reliable protection** against pigeons in balconies, windows, and open areas.  
      They are **UV-stabilized and weather-resistant**, ensuring long durability.  

      ✅ Protects your surroundings from pigeons  
      ✅ Keeps spaces clean & hygienic  
      ✅ Professional installation services  
      ✅ Long-lasting and safe materials  
    `,
    image: "/images/pigeon-net.jpg",
    category: "Bird & Pigeon Nets",
  },

  "anti-bird-nets": {
    id: "anti-bird-nets",
    title: "Anti Bird Nets",
    description:
      "High-quality nets designed to block birds from nesting or causing disturbance in your premises.",
    detailedContent: `
      Anti-bird nets are a **must-have solution** for residential, commercial, and industrial spaces.  
      They stop birds from roosting, nesting, or dirtying your property.  

      ✅ Suitable for residential & commercial areas  
      ✅ Strong and weatherproof  
      ✅ Custom sizes available  
      ✅ Affordable & long-lasting protection  
    `,
    image: "/images/anti-bird.jpg",
    category: "Bird & Pigeon Nets",
  },

  "bird-nets-for-balconies": {
    id: "bird-nets-for-balconies",
    title: "Bird Nets for Balconies",
    description:
      "Keep your balconies safe, hygienic, and bird-free with customized netting solutions.",
    detailedContent: `
      Our balcony bird nets are designed to **protect open areas** from pigeons and other birds.  
      They ensure your family enjoys fresh air without unwanted disturbances.  

      ✅ Prevents birds from entering balconies  
      ✅ Safe for kids & pets  
      ✅ Strong yet transparent nets  
      ✅ Customized installation for any balcony size  
    `,
    image: "/images/balcony-net.jpg",
    category: "Bird & Pigeon Nets",
  },

  "bird-netting-service": {
    id: "bird-netting-service",
    title: "Bird Netting Service",
    description:
      "Professional bird netting installation services to safeguard your homes and offices.",
    detailedContent: `
      Our expert team provides **end-to-end bird netting solutions**, from inspection to installation.  
      We use **premium-quality nets** that blend with your property’s design.  

      ✅ Professional team for quick installation  
      ✅ High-strength nets with UV resistance  
      ✅ Ideal for apartments, offices & industries  
      ✅ Cost-effective and reliable service  
    `,
    image: "/images/bird-service.jpg",
    category: "Bird & Pigeon Nets",
  },

  "bird-protection-nets": {
    id: "bird-protection-nets",
    title: "Bird Protection Nets",
    description:
      "Heavy-duty nets designed to protect your building from bird damage and maintain hygiene.",
    detailedContent: `
      Bird protection nets act as a **barrier against birds** without harming them.  
      They are widely used in apartments, hospitals, warehouses, and open structures.  

      ✅ Eco-friendly & bird-friendly  
      ✅ Prevents property damage  
      ✅ Easy to maintain & long-lasting  
      ✅ Customizable for large spaces  
    `,
    image: "/images/bird-protection.jpg",
    category: "Bird & Pigeon Nets",
  },

  "pigeon-nets-installation": {
    id: "pigeon-nets-installation",
    title: "Pigeon Nets Installation",
    description:
      "Expert installation of pigeon nets to keep your property hygienic and bird-free.",
    detailedContent: `
      Our **installation services** ensure a secure and long-lasting pigeon net setup.  
      With proper measurements and professional handling, we provide **hassle-free solutions**.  

      ✅ Trained professionals for safe installation  
      ✅ Nets fixed with strong support structures  
      ✅ Customized as per your property’s requirement  
      ✅ Long-term guarantee on fittings  
    `,
    image: "/images/pigeon-installation.jpg",
    category: "Bird & Pigeon Nets",
  },

  "pigeon-bird-spikes": {
    id: "pigeon-bird-spikes",
    title: "Pigeon and Bird Spikes",
    description:
      "Durable spikes to prevent pigeons and other birds from perching on ledges and rooftops.",
    detailedContent: `
      Pigeon and bird spikes are a **non-harmful way** to deter birds from sitting on your building ledges, rooftops, and AC units.  
      They are made of **stainless steel and polycarbonate** for maximum durability.  

      ✅ Eco-friendly bird control solution  
      ✅ Easy to install & maintain  
      ✅ Prevents bird droppings and nests  
      ✅ Weatherproof and long-lasting  
    `,
    image: "/images/bird-spikes.jpg",
    category: "Bird & Pigeon Nets",
  },

  "building-safety-nets": {
    id: "building-safety-nets",
    title: "Building Safety Nets",
    description:
      "Strong and reliable nets designed to safeguard high-rise buildings from accidental falls and debris.",
    detailedContent: `
      Our building safety nets are essential for **high-rise apartments, commercial complexes, and construction projects**.  
      They prevent accidents and protect both residents and workers.  

      ✅ Heavy-duty and long-lasting  
      ✅ Suitable for tall buildings & apartments  
      ✅ Ensures maximum safety for workers and residents  
      ✅ Professionally installed with strong support  
    `,
    image: "/images/building-safety.jpg",
    category: "General Safety Nets",
  },

  "car-parking-safety-nets": {
    id: "car-parking-safety-nets",
    title: "Car Parking Safety Nets",
    description:
      "Protect vehicles in parking areas from falling objects, debris, and birds with durable safety nets.",
    detailedContent: `
      Car parking safety nets are widely used in **residential complexes and office buildings**  
      to protect vehicles from **bird droppings, debris, and falling objects**.  

      ✅ Protects cars from dirt and damage  
      ✅ Strong and weather-resistant materials  
      ✅ Transparent & blends with surroundings  
      ✅ Low maintenance and long-lasting  
    `,
    image: "/images/car-parking.jpg",
    category: "General Safety Nets",
  },

  "children-safety-nets": {
    id: "children-safety-nets",
    title: "Children Safety Nets",
    description:
      "Specially designed nets to ensure children’s safety on balconies, windows, and staircases.",
    detailedContent: `
      Children safety nets give **parents peace of mind** by preventing accidents  
      in balconies, terraces, and open areas. They are **safe, durable, and child-friendly**.  

      ✅ Protects kids from accidental falls  
      ✅ Safe and non-toxic materials  
      ✅ Strong, flexible, and transparent nets  
      ✅ Perfect for apartments and high-rise buildings  
    `,
    image: "/images/children-safety.jpg",
    category: "General Safety Nets",
  },

  "construction-safety-nets": {
    id: "construction-safety-nets",
    title: "Construction Safety Nets",
    description:
      "Heavy-duty nets used at construction sites to protect workers and pedestrians from falling debris.",
    detailedContent: `
      Our construction safety nets are designed for **maximum protection at building sites**.  
      They ensure the safety of workers, pedestrians, and surrounding property.  

      ✅ Essential for construction safety compliance  
      ✅ Strong, weather-resistant materials  
      ✅ Available in various sizes and strengths  
      ✅ Reduces accident risks significantly  
    `,
    image: "/images/construction-net.jpg",
    category: "General Safety Nets",
  },

  "industrial-safety-nets": {
    id: "industrial-safety-nets",
    title: "Industrial Safety Nets",
    description:
      "Specialized nets to ensure worker safety in factories, warehouses, and industrial sites.",
    detailedContent: `
      Industrial safety nets are used to **protect employees and equipment** in  
      factories, warehouses, and large industrial zones.  

      ✅ Designed for heavy-duty industrial environments  
      ✅ Prevents accidents and equipment damage  
      ✅ Long-lasting and high strength  
      ✅ Meets industrial safety standards  
    `,
    image: "/images/industrial-safety.jpg",
    category: "General Safety Nets",
  },

  "pets-safety-nets": {
    id: "pets-safety-nets",
    title: "Pets Safety Nets",
    description:
      "Keep your pets safe on balconies, terraces, and windows with specially designed safety nets.",
    detailedContent: `
      Pets safety nets provide **reliable protection** for cats, dogs, and other pets  
      living in apartments and high-rise buildings.  

      ✅ Prevents pets from accidental falls  
      ✅ Safe, durable, and non-toxic material  
      ✅ Transparent nets for an open view  
      ✅ Easy to install and maintain  
    `,
    image: "/images/pets-safety.jpg",
    category: "General Safety Nets",
  },

  "swimming-pool-safety-nets": {
    id: "swimming-pool-safety-nets",
    title: "Swimming Pool Safety Nets",
    description:
      "Strong nets designed to prevent accidental drowning and keep swimming pools safe for kids and pets.",
    detailedContent: `
      Our swimming pool safety nets ensure **complete protection** for children and pets,  
      while keeping the pool area clean and secure.  

      ✅ Prevents accidental drowning  
      ✅ High-strength UV-stabilized nets  
      ✅ Easy to remove and reinstall  
      ✅ Ideal for homes, resorts, and clubs  
    `,
    image: "/images/swimming-pool-safety.jpg",
    category: "General Safety Nets",
  },
};
