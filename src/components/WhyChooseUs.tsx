import { Zap, Award, MapPin, Users } from "lucide-react"

const features = [
  {
    id: 1,
    title: "Fast Turnaround",
    icon: Zap,
    color: "from-[#F9CCE3] to-[#712F91]",
  },
  {
    id: 2,
    title: "Premium Quality",
    icon: Award,
    color: "from-[#712F91] to-[#F9CCE3]",
  },
  {
    id: 3,
    title: "Made in Canada",
    icon: MapPin,
    color: "from-[#F9CCE3] to-[#D6D6D6]",
  },
  {
    id: 4,
    title: "Custom Service",
    icon: Users,
    color: "from-[#D6D6D6] to-[#712F91]",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 relative overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/Why choose us background.png')" }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#712F91]/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#712F91]/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#712F91]/3 rounded-full blur-lg"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main content container - single large white box */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 font-['Playfair_Display']">
              Why Choose Us
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto font-['Poppins'] leading-relaxed">
              We&apos;re not just another rhinestone supplier. We&apos;re your creative partner in bringing 
              sparkle to life.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="text-center group relative"
              >
                {/* Card background */}
                <div className="absolute inset-0 bg-white/80 rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105"></div>
                
                {/* Content container */}
                <div className="relative p-6 rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-[#1A1A1A] font-['Playfair_Display'] group-hover:text-[#712F91] transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-[#712F91] mb-1 font-['Playfair_Display'] group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-[#6B7280] font-['Poppins'] font-medium text-sm">Happy Clients</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-[#712F91] mb-1 font-['Playfair_Display'] group-hover:scale-110 transition-transform duration-300">1000+</div>
                <div className="text-[#6B7280] font-['Poppins'] font-medium text-sm">Designs Created</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-[#712F91] mb-1 font-['Playfair_Display'] group-hover:scale-110 transition-transform duration-300">24hr</div>
                <div className="text-[#6B7280] font-['Poppins'] font-medium text-sm">Fast Turnaround</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-[#712F91] mb-1 font-['Playfair_Display'] group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-[#6B7280] font-['Poppins'] font-medium text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 