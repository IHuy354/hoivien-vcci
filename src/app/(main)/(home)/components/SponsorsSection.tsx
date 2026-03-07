"use client";

import { motion } from "framer-motion";

const mainSponsor = { name: "VCCIIP", img: "https://s3.meu-solutions.com/skh-event/public/images/vcci-ip.jpg", url: "https://vcci.com.vn/" };

const goldSponsors = [
  { name: "MK Group", img: "https://s3.meu-solutions.com/skh-event/public/images/z6476836073983_fa9ab04ef371abf18d7adcd037b41162.jpg" },
  { name: "Tân Thanh Container", img: "https://s3.meu-solutions.com/skh-event/public/images/T%C3%A2n-Thanh-Container.png" },
  { name: "TPBank", img: "https://s3.meu-solutions.com/skh-event/public/images/tp-bank.png" },
  { name: "SELOF", img: "https://s3.meu-solutions.com/skh-event/public/images/z5962928254946_a0f1ee3b590460cb10a336b405f70e36.jpg" },
  { name: "Quaviet", img: "https://s3.meu-solutions.com/skh-event/public/images/Qua-Viet.png" },
  { name: "Fujiwa", img: "https://s3.meu-solutions.com/skh-event/public/images/fujiwa.png" },
  { name: "Grab", img: "https://s3.meu-solutions.com/skh-event/public/images/logo-grab-inkythuatso-2-01-24-09-59-49.jpg" },
];

const silverSponsors = [
  { name: "Liontrans", img: "https://s3.meu-solutions.com/skh-event/public/images/Lion-Trans.png" },
  { name: "Skale", img: "https://s3.meu-solutions.com/skh-event/public/images/skale.png" },
  { name: "BrainUp", img: "https://s3.meu-solutions.com/skh-event/public/images/brain-up.png" },
  { name: "Arobid", img: "https://s3.meu-solutions.com/skh-event/public/images/arobid.png" },
  { name: "10X Value", img: "https://s3.meu-solutions.com/skh-event/public/images/10x-value.png" },
  { name: "Real Logistics", img: "https://s3.meu-solutions.com/skh-event/public/images/real-logistic.png" },
];

const SponsorLogo = ({ name, img }: { name: string; img: string }) => (
  <div className="group/card bg-white rounded-2xl p-4 flex items-center justify-center aspect-[3/2] hover:-translate-y-1 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-md transition-all duration-300">
    <img src={img} alt={name} className="max-h-12 max-w-full object-contain opacity-70 group-hover/card:opacity-100 transition-opacity mix-blend-multiply" loading="lazy" />
  </div>
);

export const SponsorsSection = () => (
  <section id="sponsors" className="py-20 md:py-28 bg-gray-50/50">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-md font-semibold text-yellow-500 uppercase tracking-widest mb-3">Đối tác</p>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-5">Nhà Tài Trợ Đồng Hành 2025</h2>
      </motion.div>

      {/* Main sponsor */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <p className="text-center text-sm font-bold text-gray-600 mb-5 uppercase tracking-wider">Tài Trợ Chính</p>
        <a href={mainSponsor.url} target="_blank" rel="noopener noreferrer" className="block max-w-xs mx-auto">
          <div className="bg-white rounded-3xl p-8 flex items-center justify-center ring-4 ring-yellow-400  hover:shadow-xl transition-all duration-300">
            <img src={mainSponsor.img} alt={mainSponsor.name} className="max-h-20 object-contain mix-blend-multiply" />
          </div>
        </a>
      </motion.div>

      {/* Gold */}
      <div className="mb-14 relative overflow-hidden group">
        <p className="text-center text-sm font-bold text-gray-600 mb-6 uppercase tracking-wider relative z-10 bg-gray-50/50 inline-block px-4 mx-auto left-1/2 -translate-x-1/2">Tài Trợ Vàng</p>
        
        {/* Gradient blur edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused] items-center">
          {[...goldSponsors, ...goldSponsors, ...goldSponsors, ...goldSponsors].map((s, i) => (
            <div key={i} className="w-[200px] shrink-0 px-3">
               <SponsorLogo name={s.name} img={s.img} />
            </div>
          ))}
        </div>
      </div>

      {/* Silver */}
      <div className="relative overflow-hidden group">
        <p className="text-center text-sm font-bold text-gray-600 mb-6 uppercase tracking-wider relative z-10 bg-gray-50/50 inline-block px-4 mx-auto left-1/2 -translate-x-1/2">Tài Trợ Bạc</p>
        
        {/* Gradient blur edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused] items-center">
          {[...silverSponsors, ...silverSponsors, ...silverSponsors, ...silverSponsors, ...silverSponsors, ...silverSponsors].map((s, i) => (
            <div key={i} className="w-[180px] shrink-0 px-3">
               <SponsorLogo name={s.name} img={s.img} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
