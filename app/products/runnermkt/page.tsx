import Link from 'next/link'
import { ArrowRight, Check, ShoppingCart } from 'lucide-react'

export default function RunnerMKT() {
  const features = [
    'Multi-vendor marketplace with 1000+ sellers',
    'Curated product selection from top brands',
    'Real-time inventory management',
    'Secure payment gateway',
    'Fast shipping and logistics',
    'Customer reviews and ratings',
    'Personalized recommendations',
    'Easy returns and refunds',
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lg-KlCERcqomXaMnVgKbyJNERVXDpHo10.png" 
              alt="SportTechies" 
              className="h-8 w-auto"
            />
            <span className="text-sm font-semibold text-muted-foreground">Products</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Back to Products
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-border/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-taQFj2VBmtg6geLFQiJiRMMAGAqdIR.png"
                alt="RunnerMKT"
                className="h-20 w-auto mb-8"
              />
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
                RunnerMKT
              </h1>
              <p className="text-xl text-foreground/70 mb-4 leading-relaxed">
                The premier sports marketplace for athletes worldwide. Browse, compare, and purchase premium sports equipment and apparel from trusted brands.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-3 bg-sport-red text-white rounded-lg font-medium hover:bg-sport-red/90 transition-colors"
                >
                  Visit RunnerMKT
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden border border-border bg-white flex items-center justify-center">
                <ShoppingCart className="w-32 h-32 text-foreground/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Marketplace Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex gap-4 p-6 rounded-xl border border-border bg-card/30 hover:bg-card/50 transition-colors">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-sport-red/20">
                    <Check className="h-4 w-4 text-sport-red" />
                  </div>
                </div>
                <p className="text-foreground/80">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-b border-border/50 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-sport-red mb-2">1000+</div>
              <p className="text-foreground/60">Active Sellers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-sport-green mb-2">50K+</div>
              <p className="text-foreground/60">Products Listed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100K+</div>
              <p className="text-foreground/60">Happy Athletes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Shop by Category
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['Running Gear', 'Team Sports', 'Fitness Equipment', 'Apparel', 'Footwear', 'Accessories'].map((category) => (
              <button
                key={category}
                className="p-8 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-sport-red/50 transition-all group"
              >
                <p className="text-lg font-semibold text-foreground group-hover:text-sport-red transition-colors">
                  {category}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border/50 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Shop?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join thousands of athletes shopping on RunnerMKT for the best sports equipment and apparel.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 bg-sport-red text-white rounded-lg font-medium hover:bg-sport-red/90 transition-colors"
          >
            Start Shopping Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center gap-2 mb-4 md:mb-0 hover:opacity-80 transition-opacity">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lg-KlCERcqomXaMnVgKbyJNERVXDpHo10.png"
                alt="SportTechies"
                className="h-6 w-auto"
              />
              <span className="text-sm text-foreground/60">© 2024 SportTechies Innovations Limited</span>
            </Link>
            <div className="flex gap-4">
              <Link href="/" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                Back to Products
              </Link>
              <span className="text-foreground/40">•</span>
              <Link href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
