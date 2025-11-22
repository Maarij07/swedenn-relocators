import Image from 'next/image';
import Navbar from '../components/Navbar';

const fadeInUp = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const servicesCards: { id: number; title: string; description: string }[] = [
  { id: 1, title: 'Family Reunification - National Laws', description: 'Support for reuniting with your family under national residence rules.' },
  { id: 2, title: 'Family Reunification - EU Laws', description: "Guidance for family permits based on EU freedom of movement rules." },
  { id: 3, title: 'Work Permit Sweden', description: 'End-to-end assistance for Swedish work permits and employer documentation.' },
  { id: 4, title: 'Self-Employed in Sweden', description: 'Help to establish and manage your self-employed status in Sweden.' },
  { id: 5, title: 'Study in Sweden', description: 'Application preparation and support for Swedish universities and colleges.' },
  { id: 6, title: 'CBS/BB Programme', description: 'Specialised programmes for business, investment and relocation planning.' },
  { id: 7, title: 'Swedish Citizenship', description: 'Eligibility review and application support for becoming a Swedish citizen.' },
  { id: 8, title: 'All-Relative Family Support', description: 'Holistic solutions for partners, children and extended family members.' },
  { id: 9, title: 'Appeal Cases', description: 'Structured appeal strategies and documentation review for refusals.' },
  { id: 10, title: 'Destination Services', description: 'Orientation, local registrations and settling-in support on arrival.' },
  { id: 11, title: 'Housing Solutions', description: 'Short- and long-term housing search with landlord coordination.' },
  { id: 12, title: 'Buy / Sell Property', description: 'Guidance across the full property purchase or sale lifecycle.' },
  { id: 13, title: 'Bookkeeping Solutions', description: 'Accounting and bookkeeping services for individuals and companies.' },
  { id: 14, title: 'EOR & Payroll', description: 'Employer of record and compliant payroll for your Swedish workforce.' },
  { id: 15, title: 'Financial Management', description: 'End-to-end financial oversight and reporting for your operations.' },
  { id: 16, title: 'Lawyers Assistance', description: 'Access to legal expertise for complex relocation and immigration matters.' },
  { id: 17, title: 'Manpower Solutions', description: 'Recruitment and staffing solutions tailored to Nordic markets.' },
  { id: 18, title: 'Employee Management', description: 'HR, onboarding and ongoing employee support in Sweden.' },
  { id: 19, title: 'Logistics Management', description: 'Coordinated logistics for your move, shipments and relocations.' },
  { id: 20, title: 'Pet Relocation', description: 'Safe and compliant relocation of pets with full documentation support.' },
  { id: 21, title: 'Relocate to Denmark', description: 'Comprehensive services for relocating and settling in Denmark.' },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Animations keyframes */}
      <style>{fadeInUp}</style>

      {/* Hero-style header using the same theme background and container as Hero */}
      <section className="relative overflow-hidden bg-[#EBF4FF]">
        <div className="pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
            <div
              className="text-center max-w-3xl mx-auto"
              style={{ animation: 'fadeInUp 0.8s ease-out' }}
            >
              <p className="text-[11px] sm:text-xs md:text-sm 4k:text-xl tracking-[0.18em] uppercase text-blue-600 mb-3">
                Clear Guidance, Right Support, Your Path Forward
              </p>
              <h1 className="text-[1.9rem] sm:text-[2.25rem] md:text-[2.5rem] lg:text-[2.9rem] xl:text-[3.1rem] 2xl:text-[3.3rem] 3xl:text-[4rem] 4k:text-[6rem] font-bold leading-tight">
                <span className="block text-gray-900">Your Digital Gateway To</span>
                <span className="block">
                  <span className="text-gray-900">Relocation &amp; </span>
                  <span className="text-blue-600">Immigration Services</span>
                </span>
              </h1>
              <p className="mt-4 text-[14px] sm:text-[15px] md:text-base lg:text-[17px] xl:text-[18px] 3xl:text-[20px] 4k:text-[2rem] text-gray-600 leading-relaxed">
                We are delivering seamless solutions for individuals and businesses within one secure platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary band: Immigration Solutions text */}
      <section className="bg-white">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 pt-6 pb-4">
          <div
            className="rounded-[18px] bg-white px-4 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 text-center shadow-sm"
            style={{ animation: 'fadeInUp 0.9s ease-out' }}
          >
            <p className="text-[1.25rem] sm:text-[1.4rem] md:text-[1.55rem] lg:text-[1.7rem] xl:text-[1.85rem] font-semibold leading-snug">
              <span className="text-gray-900">Immigration Solutions For </span>
              <span className="text-blue-600">Individual-Families- Businesses</span>
            </p>
          </div>
        </div>
      </section>

      {/* Services cards grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <div className="grid gap-8 sm:gap-10 md:gap-12 lg:gap-10 xl:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {servicesCards.map((card, index) => (
              <article
                key={card.id}
                className="bg-white rounded-[24px] shadow-[0_18px_45px_rgba(15,23,42,0.08)] border border-gray-100 flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.12)]"
                style={{
                  animation: 'fadeInUp 0.7s ease-out',
                  animationDelay: `${index * 60}ms`,
                  animationFillMode: 'both',
                }}
              >
                <div className="relative w-full bg-gray-50">
                  <div className="relative w-full h-44 sm:h-48 md:h-52 flex items-center justify-center">
                    <Image
                      src={`/services/s${card.id}.svg`}
                      alt={card.title}
                      fill
                      className="object-contain p-6"
                    />
                  </div>
                </div>

                <div className="flex-1 flex flex-col px-6 pb-6 pt-4 space-y-3">
                  <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-semibold text-gray-900 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-[12px] sm:text-[13px] md:text-[13px] lg:text-[14px] text-gray-600 leading-relaxed line-clamp-3">
                    {card.description}
                  </p>

                  <div className="pt-2 mt-auto">
                    <button className="inline-flex items-center justify-center px-5 py-2.5 text-[13px] sm:text-[14px] font-semibold text-white bg-[#032B5F] rounded-full hover:bg-[#021C3D] transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How to start – Individual & Company */}
      <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          {/* Heading */}
          <div
            className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 lg:mb-14"
            style={{ animation: 'fadeInUp 0.8s ease-out' }}
          >
            <p className="text-[11px] sm:text-xs md:text-sm 4k:text-xl tracking-[0.18em] uppercase text-[#647ACB] mb-2">
              Our complete digital solutions are designed for both
            </p>
            <h2 className="text-[2rem] sm:text-[2.25rem] md:text-[2.5rem] lg:text-[2.7rem] xl:text-[3rem] 2xl:text-[3.2rem] 3xl:text-[3.6rem] 4k:text-[4.1rem] font-bold leading-tight text-gray-900">
              <span className="text-gray-900">Individual </span>
              <span className="text-black">Clients</span>
              <span className="text-gray-900"> &amp; </span>
              <span className="text-[#2F66D5]">Corporate Organizations</span>
            </h2>
          </div>

          {/* Two-column how-to-start cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Individual card */}
            <article
              className="w-full h-full flex flex-col"
              style={{ animation: 'fadeInUp 0.8s ease-out', animationDelay: '80ms', animationFillMode: 'both' }}
            >
              {/* Header bar */}
              <div className="bg-[#E8F0FF] rounded-[12px] px-6 py-3 flex items-center shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
                <h3 className="text-sm sm:text-[0.95rem] font-medium text-[#111827]">
                  How To Start - Individual
                </h3>
              </div>

              {/* Step cards */}
              <div className="mt-4 flex flex-col gap-3">
                {[
                  'Download the app or create an account on our website',
                  'Book a consultation session to get the help you need',
                  'Onboard with us – sign service agreement',
                  'Pay your invoice and upload the required documents',
                  'Check your application status & contact your rep if needed',
                ].map((step, idx) => (
                  <div
                    key={step}
                    className="flex items-center gap-3 rounded-[12px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] px-5 py-3 min-h-[56px] sm:min-h-[60px] text-[12px] sm:text-[13px] lg:text-[14px] text-gray-700"
                  >
                    <span className="inline-flex items-center justify-center w-5 text-[12px] font-semibold text-[#2F66D5]">
                      {idx + 1}.
                    </span>
                    <span className="leading-snug">{step}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="mt-6 w-full inline-flex items-center justify-center rounded-[999px] bg-[#0A3A78] px-6 py-3 text-[13px] sm:text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(10,58,120,0.35)] hover:bg-[#07294F] transition-colors">
                Sign Up Now
              </button>

              <p className="mt-3 text-[10px] sm:text-[11px] text-gray-500 text-center leading-relaxed">
                To get started, we recommend using our assessment tool to check your basic eligibility.
              </p>
              <p className="mt-1 text-[11px] sm:text-xs font-semibold text-[#2F66D5] text-center">
                Let us simplify your relocation journey
              </p>
            </article>

            {/* Company card */}
            <article
              className="w-full h-full flex flex-col"
              style={{ animation: 'fadeInUp 0.8s ease-out', animationDelay: '140ms', animationFillMode: 'both' }}
            >
              {/* Header bar */}
              <div className="bg-[#E8F0FF] rounded-[12px] px-6 py-3 flex items-center shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
                <h3 className="text-sm sm:text-[0.95rem] font-medium text-[#111827]">
                  How To Start - Company
                </h3>
              </div>

              {/* Step cards */}
              <div className="mt-4 flex flex-col gap-3">
                {[
                  'Create an account on our website',
                  'Easily add employees, manage their profiles, and choose the services you need',
                  'Real-time access and coordination for employees and companies',
                  'Other services available like: bookkeeping, job posting, business, or property listing',
                  'Share access across your team in the correct department',
                ].map((step, idx) => (
                  <div
                    key={step}
                    className="flex items-center gap-3 rounded-[12px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] px-5 py-3 min-h-[56px] sm:min-h-[60px] text-[12px] sm:text-[13px] lg:text-[14px] text-gray-700"
                  >
                    <span className="inline-flex items-center justify-center w-5 text-[12px] font-semibold text-[#2F66D5]">
                      {idx + 1}.
                    </span>
                    <span className="leading-snug">{step}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="mt-6 w-full inline-flex items-center justify-center rounded-[999px] bg-[#0A3A78] px-6 py-3 text-[13px] sm:text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(10,58,120,0.35)] hover:bg-[#07294F] transition-colors">
                Sign Up Now
              </button>

              <p className="mt-3 text-[10px] sm:text-[11px] text-gray-500 text-center leading-relaxed">
                Select the correct type during sign-up so we can better understand your needs.
              </p>
              <p className="mt-1 text-[11px] sm:text-xs font-semibold text-[#2F66D5] text-center">
                All-in-one digital solutions for companies
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
