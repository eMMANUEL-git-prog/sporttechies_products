import Link from 'next/link'
import { ArrowRight, Activity, ShoppingCart } from 'lucide-react'

export default function Home() {
  const products = [
    {
      id: 'runnermkt',
      name: 'RunnerMKT',
      tagline: 'Sports Marketplace',
      description: 'A comprehensive sports marketplace connecting athletes with premium equipment, apparel, and accessories from top brands worldwide.',
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-taQFj2VBmtg6geLFQiJiRMMAGAqdIR.png',
      icon: ShoppingCart,
      colors: {
        gradient: 'from-[#ef3d3d] to-[#0faa40]',
        primary: '#ef3d3d',
        accent: '#0faa40',
      },
      cta: 'Learn More',
      link: '/products/runnermkt',
    },
    {
      id: 'athech',
      name: 'ATHECH',
      tagline: 'AI Injury Prediction',
      description: 'Advanced AI-powered mobile application that predicts and prevents athlete injuries through real-time biomechanical analysis and personalized recommendations.',
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-nb2NTF8Bc5F7tHoiU599ah2kL1V3bD.png',
      icon: Activity,
      colors: {
        gradient: 'from-[#0faa40] to-[#ef3d3d]',
        primary: '#0faa40',
        accent: '#ef3d3d',
      },
      cta: 'Learn More',
      link: '/products/athech',
    },
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
            <Link href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-border/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 text-balance">
            SportTechies Products
          </h1>
          <p className="text-lg text-foreground/60 mb-8 text-balance max-w-2xl mx-auto">
            Discover innovative solutions designed to transform how athletes train, compete, and shop for sports equipment.
          </p>
          <Link 
            href="#products"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Explore Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => {
              const IconComponent = product.icon
              return (
                <Link
                  key={product.id}
                  href={product.link}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:shadow-lg transition-all duration-300"
                >
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Logo and Icon */}
                    <div className="mb-6 flex items-center justify-between">
                      <img 
                        src={product.logo}
                        alt={product.name}
                        className="h-12 w-auto object-contain"
                      />
                      <div 
                        className="p-3 rounded-xl"
                        style={{ backgroundColor: `${product.colors.primary}15` }}
                      >
                        <IconComponent 
                          className="h-6 w-6"
                          style={{ color: product.colors.primary }}
                        />
                      </div>
                    </div>

                    {/* Text Content */}
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                      {product.name}
                    </h2>
                    <p className="text-sm font-medium text-sport-green mb-3">
                      {product.tagline}
                    </p>
                    <p className="text-foreground/70 mb-8 leading-relaxed line-clamp-3">
                      {product.description}
                    </p>

                    {/* CTA */}
                    <div 
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 border group/btn"
                      style={{
                        backgroundColor: `${product.colors.primary}10`,
                        borderColor: product.colors.primary,
                        color: product.colors.primary,
                      }}
                    >
                      {product.cta}
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="#" className="hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="/products/runnermkt" className="hover:text-foreground transition-colors">RunnerMKT</Link></li>
                <li><Link href="/products/athech" className="hover:text-foreground transition-colors">ATHECH</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="#" className="hover:text-foreground transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="#" className="hover:text-foreground transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lg-KlCERcqomXaMnVgKbyJNERVXDpHo10.png"
                alt="SportTechies"
                className="h-6 w-auto"
              />
              <span className="text-sm text-foreground/60">© 2024 SportTechies Innovations Limited</span>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.27-1.194-2.27-1.194 0-1.378.932-1.378 1.893v4.355H8.004V9.25h2.446v.852h.034c.345-.652 1.191-1.338 2.451-1.338 2.612 0 3.095 1.718 3.095 3.954v4.62zM4.04 8.578a1.56 1.56 0 11-.001-3.12 1.56 1.56 0 01.001 3.12zm1.354 7.76H2.687V9.25H5.39v7.088zM17.55 0H.445C.193 0 0 .193 0 .445v19.11C0 19.807.193 20 .445 20h17.105c.252 0 .445-.193.445-.445V.445C17.995.193 17.802 0 17.55 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
