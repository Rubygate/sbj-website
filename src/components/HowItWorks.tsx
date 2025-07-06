import { Search, Edit3, Truck, Sparkles } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Choose Your Product",
    description: "Browse our collection of rhinestone templates or request a custom design that fits your needs.",
    icon: Search,
    color: "from-[#F9CCE3] to-[#712F91]",
  },
  {
    id: 2,
    title: "Submit or Customize",
    description: "Send us your design requirements or customize one of our templates to match your vision.",
    icon: Edit3,
    color: "from-[#712F91] to-[#F9CCE3]",
  },
  {
    id: 3,
    title: "We Sparkle & Deliver",
    description: "Our expert team creates your rhinestone design with precision and ships it to you quickly.",
    icon: Truck,
    color: "from-[#F9CCE3] to-[#D6D6D6]",
  },
]

export function HowItWorks() {
  return (
    <section className="py-12 bg-gradient-to-br from-[#1A1A1A] via-[#2A1A2A] to-[#1A1A1A] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#F9CCE3]/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#712F91]/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#F9CCE3]/3 rounded-full blur-lg"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-[#712F91]/3 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Playfair_Display']">
            How It Works
          </h2>
          <p className="text-xl text-[#D6D6D6] max-w-3xl mx-auto font-['Poppins'] leading-relaxed">
            Getting your custom rhinestone design is as easy as 1, 2, 3!
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {steps.map((step) => (
            <div key={step.id} className="relative text-center group">
              {/* Step Number */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-[#F9CCE3] to-[#712F91] text-[#1A1A1A] rounded-full flex items-center justify-center font-bold text-lg z-20 shadow-xl group-hover:scale-110 transition-transform duration-300">
                {step.id}
              </div>

              {/* Icon Container */}
              <div className="relative mb-8">
                <div className={`w-32 h-32 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 shadow-xl relative overflow-hidden`}>
                  <step.icon className="w-16 h-16 text-white relative z-10 flex-shrink-0" />
                  {/* Icon glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>
                
                {/* Floating sparkles around icon */}
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <Sparkles className="w-4 h-4 text-[#F9CCE3] animate-pulse" />
                </div>
                <div className="absolute -bottom-2 -left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                  <Sparkles className="w-3 h-3 text-[#712F91] animate-pulse" />
                </div>
              </div>

              {/* Content Card */}
              <div className="bg-gradient-to-br from-[#1A1A1A]/80 to-[#2A1A2A]/80 backdrop-blur-sm rounded-3xl p-8 border border-[#F9CCE3]/20 shadow-2xl group-hover:border-[#F9CCE3]/40 transition-all duration-300 group-hover:transform group-hover:scale-105 relative overflow-hidden">
                {/* Card background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F9CCE3]/5 via-transparent to-[#712F91]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-white mb-4 font-['Playfair_Display'] group-hover:text-[#F9CCE3] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[#D6D6D6] leading-relaxed font-['Poppins'] group-hover:text-white transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>


            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/contact"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#F9CCE3] to-[#712F91] text-[#1A1A1A] font-semibold rounded-full hover:from-[#F9CCE3]/90 hover:to-[#712F91]/90 transition-all duration-200 font-['Poppins'] shadow-xl hover:shadow-2xl hover:shadow-[#F9CCE3]/20 transform hover:scale-105 group"
          >
            Get Started Today
            <Sparkles className="ml-2 w-5 h-5 group-hover:animate-pulse" />
          </a>
        </div>
      </div>
    </section>
  )
} 