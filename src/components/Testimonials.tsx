import { Star, Quote, Sparkles } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Cheerleading Coach, Toronto",
    rating: 5,
    text: "The rhinestone designs for our cheerleading uniforms are absolutely stunning! The quality is incredible and they held up perfectly throughout the season.",
    avatar: "/api/placeholder/60/60",
  },
  {
    id: 2,
    name: "Emily Chen",
    location: "Fashion Designer, Vancouver",
    rating: 5,
    text: "Sparkles by Junetrain created the perfect custom rhinestone design for my clothing line. The attention to detail and fast turnaround exceeded my expectations.",
    avatar: "/api/placeholder/60/60",
  },
  {
    id: 3,
    name: "Mike Rodriguez",
    location: "Sports Team Manager, Calgary",
    rating: 5,
    text: "Our team rhinestone transfers look professional and durable. The custom design process was smooth and the final product is exactly what we wanted.",
    avatar: "/api/placeholder/60/60",
  },
]

export function Testimonials() {
  return (
    <section className="py-12 bg-[#F9CCE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6 font-['Playfair_Display']">
            What Our Sparkle Lovers Are Saying
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto font-['Poppins']">
            Don't just take our word for it.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-8 relative border border-[#F9CCE3]/30 shadow-lg">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[#712F91]/30">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-[#712F91] fill-current"
                        : "text-[#6B7280]/30"
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[#6B7280] mb-8 leading-relaxed font-['Poppins']">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F9CCE3] to-[#712F91] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A1A1A] font-['Playfair_Display']">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-[#6B7280] font-['Poppins']">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
} 