import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MapPin, Clock, Phone, ChevronRight, Navigation } from "lucide-react"
import Link from "next/link"

const hours = [
  { day: "Monday", hours: "11:00 AM - 9:00 PM" },
  { day: "Tuesday", hours: "11:00 AM - 9:00 PM" },
  { day: "Wednesday", hours: "11:00 AM - 9:00 PM" },
  { day: "Thursday", hours: "11:00 AM - 9:00 PM" },
  { day: "Friday", hours: "11:00 AM - 10:00 PM" },
  { day: "Saturday", hours: "11:00 AM - 10:00 PM" },
  { day: "Sunday", hours: "11:00 AM - 9:00 PM" },
]

export default function FindPage() {
  // Google Maps embed URL for 434 West Coast Rd, Glen Eden, Auckland
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.523847689238!2d174.6258193!3d-36.91725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47c0c8b8b8b1%3A0x1234567890abcdef!2s434%20West%20Coast%20Road%2C%20Glen%20Eden%2C%20Auckland%200602%2C%20New%20Zealand!5e0!3m2!1sen!2snz!4v1234567890"
  
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=434+West+Coast+Road,+Glen+Eden,+Auckland,+New+Zealand"

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      
      <div className="pt-16">
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-64px)]">
          {/* Map Section - Full width on mobile, left half on desktop */}
          <div className="lg:w-1/2 h-[280px] sm:h-[350px] lg:h-auto relative bg-[#141414]">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '280px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Munch Pit Location - 434 West Coast Rd, Glen Eden"
              className="absolute inset-0 w-full h-full"
            />
            
            {/* Map overlay badge */}
            <div className="absolute top-4 left-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#FF5A1F] rounded shadow-lg">
              <span className="text-white text-xs font-bold tracking-wider">WE'RE HERE!</span>
            </div>
          </div>

          {/* Info Section */}
          <div className="w-full lg:w-1/2 bg-[#0a0a0a] p-4 sm:p-6 lg:p-16">
            <div className="max-w-lg mx-auto">
              {/* Header */}
              <div className="mb-6 sm:mb-10">
                <span className="text-[#FF5A1F] text-xs font-semibold tracking-[0.2em] uppercase">
                  Find Us
                </span>
                <h1 className="font-[var(--font-oswald)] text-3xl sm:text-4xl font-bold text-white mt-2">
                  MUNCH PIT
                </h1>
                <p className="text-white/50 text-sm mt-2 sm:mt-3">
                  Our permanent home. No more chasing us around - same spot, same fire food!
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-3 sm:space-y-4">
                {/* Address */}
                <div className="p-4 sm:p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 bg-[#FF5A1F]/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#FF5A1F]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Address</h3>
                      <p className="text-white/60 text-sm">
                        434 West Coast Rd<br />
                        Glen Eden, Auckland
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours - Collapsible on mobile? */}
                <div className="p-4 sm:p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 bg-[#FF5A1F]/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[#FF5A1F]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Operating Hours</h3>
                      <p className="text-white/40 text-xs">Open 7 days a week!</p>
                    </div>
                  </div>
                  
                  <div className="space-y-1.5 sm:space-y-2 ml-0 sm:ml-14">
                    {hours.map((item) => (
                      <div key={item.day} className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="text-white/60">{item.day}</span>
                        <span className="text-white font-medium">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phone */}
                <div className="p-4 sm:p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 bg-[#FF5A1F]/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#FF5A1F]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Phone</h3>
                      <a 
                        href="tel:+6421234567" 
                        className="text-[#FF5A1F] text-base sm:text-lg font-semibold hover:underline"
                      >
                        +64 21 234 567
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 sm:mt-8 space-y-3">
                {/* Get Directions Button */}
                <Link
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-[#00FF00] text-black font-bold text-sm tracking-wider rounded-lg hover:bg-[#00cc00] active:scale-[0.98] transition-all duration-200"
                >
                  <Navigation className="w-4 h-4" />
                  GET DIRECTIONS
                  <ChevronRight className="w-4 h-4" />
                </Link>

                {/* Secondary action */}
                <Link
                  href="/menu"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-[#1a1a1a] border border-[#2a2a2a] text-white font-semibold text-sm tracking-wider rounded-lg hover:bg-[#2a2a2a] hover:border-[#333] active:scale-[0.98] transition-all duration-200"
                >
                  VIEW MENU
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
