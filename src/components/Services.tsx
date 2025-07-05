import { Sparkles, Gem, Trophy, FileText } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Custom Blinging Solutions",
    description: "Tailored rhinestone designs, transfers, and appliqués made to match your brand, your style, and your creative vision.",
    icon: Sparkles,
    color: "from-[#F9CCE3] to-[#712F91]",
  },
  {
    id: 2,
    title: "Rhinestones",
    description: "Premium-quality rhinestones for bold, brilliant, and flawless arts and crafts.",
    icon: Gem,
    color: "from-[#712F91] to-[#F9CCE3]",
  },
  {
    id: 3,
    title: "Cheer & Sports Blings",
    description: "High-energy rhinestone designs crafted for uniforms, jerseys, and team spirit wear.",
    icon: Trophy,
    color: "from-[#F9CCE3] to-[#D6D6D6]",
  },
  {
    id: 4,
    title: "Transfers & Appliqués",
    description: "Ready-to-use iron-on or stick-on designs that make adding sparkle fast, easy, and fun.",
    icon: FileText,
    color: "from-[#D6D6D6] to-[#712F91]",
  },
]

export function Services() {
  return (
    <section className="py-20 bg-[#2A1A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Playfair_Display']">
            Our Services
          </h2>
          <p className="text-xl text-[#D6D6D6] max-w-3xl mx-auto font-['Poppins']">
            From custom designs to ready-made sparkles, we've got everything you need to shine.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-[#F9CCE3]/20 hover:border-[#F9CCE3]/40 transition-all duration-300 hover:transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              {/* Background sparkle effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F9CCE3]/5 via-transparent to-[#712F91]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className={`relative w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#F9CCE3]/20 transition-all duration-300 group-hover:scale-110`}>
                <service.icon className="w-8 h-8 text-white" />
                {/* Icon glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-semibold text-white mb-4 font-['Playfair_Display'] group-hover:text-[#F9CCE3] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="relative text-[#D6D6D6] leading-relaxed font-['Poppins'] group-hover:text-white transition-colors duration-300">
                {service.description}
              </p>

              {/* Corner sparkle */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Sparkles className="w-4 h-4 text-[#F9CCE3]" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-[#D6D6D6] mb-6 font-['Poppins']">
            Ready to start your sparkle journey?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#F9CCE3] to-[#712F91] text-[#1A1A1A] font-semibold rounded-full hover:from-[#F9CCE3]/90 hover:to-[#712F91]/90 transition-all duration-200 font-['Poppins'] shadow-lg hover:shadow-xl hover:shadow-[#F9CCE3]/20 transform hover:scale-105"
          >
            Get Custom Quote
            <Sparkles className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
} 