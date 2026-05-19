import Link from 'next/link'
import { ArrowRight, Check, Activity, Apple, Smartphone } from 'lucide-react'

export default function ATHECH() {
  const features = [
    'Real-time injury prediction using AI',
    'Biomechanical analysis and motion tracking',
    'Personalized injury prevention plans',
    'Integration with wearable devices',
    'Coach collaboration and messaging',
    'Training load management',
    'Recovery recommendations',
    'Detailed performance analytics',
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-nb2NTF8Bc5F7tHoiU599ah2kL1V3bD.png"
                alt="ATHECH"
                className="h-20 w-auto mb-8"
              />
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
                ATHECH
              </h1>
              <p className="text-xl text-foreground/70 mb-4 leading-relaxed">
                AI-powered athlete injury prediction and prevention. Harness the power of advanced biomechanical analysis to train smarter and stay injury-free.
              </p>
              <p className="text-sm text-foreground/60 mb-8">
                Available on iOS and Android
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 bg-sport-green text-white rounded-lg font-medium hover:bg-sport-green/90 transition-colors gap-2"
                >
                  <Smartphone className="h-5 w-5" />
                  Google Play
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors gap-2"
                >
                  <Apple className="h-5 w-5" />
                  App Store
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-8">
              <div className="relative w-full max-w-xs h-80 rounded-2xl overflow-hidden border border-border bg-white flex items-center justify-center p-4">
                <div className="bg-white p-3 rounded-lg">
                  <svg 
                    className="w-32 h-32"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Placeholder QR Code */}
                    <rect width="100" height="100" fill="white" />
                    <g fill="black">
                      {/* Top-left position marker */}
                      <rect x="10" y="10" width="20" height="20" />
                      <rect x="14" y="14" width="12" height="12" fill="white" />
                      <rect x="16" y="16" width="8" height="8" />
                      
                      {/* Top-right position marker */}
                      <rect x="70" y="10" width="20" height="20" />
                      <rect x="74" y="14" width="12" height="12" fill="white" />
                      <rect x="76" y="16" width="8" height="8" />
                      
                      {/* Bottom-left position marker */}
                      <rect x="10" y="70" width="20" height="20" />
                      <rect x="14" y="74" width="12" height="12" fill="white" />
                      <rect x="16" y="76" width="8" height="8" />
                      
                      {/* Data pattern */}
                      <rect x="35" y="25" width="3" height="3" />
                      <rect x="40" y="25" width="3" height="3" />
                      <rect x="35" y="30" width="3" height="3" />
                      <rect x="45" y="30" width="3" height="3" />
                      <rect x="40" y="35" width="3" height="3" />
                      <rect x="48" y="35" width="3" height="3" />
                    </g>
                  </svg>
                </div>
              </div>
              <p className="text-sm text-foreground/60 text-center">
                Scan to download ATHECH from your app store
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Intelligent Training Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex gap-4 p-6 rounded-xl border border-border bg-card/30 hover:bg-card/50 transition-colors">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-sport-green/20">
                    <Check className="h-4 w-4 text-sport-green" />
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
              <div className="text-4xl font-bold text-sport-green mb-2">95%</div>
              <p className="text-foreground/60">Injury Prediction Accuracy</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-sport-red mb-2">50K+</div>
              <p className="text-foreground/60">Active Users</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">30%</div>
              <p className="text-foreground/60">Injury Prevention Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Technology Section */}
      <section className="py-20 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Powered by AI
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl border border-border bg-card/50 hover:bg-card/70 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-sport-green/20 flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-sport-green" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Motion Tracking</h3>
              <p className="text-foreground/70">
                Advanced algorithms analyze your movement patterns to detect anomalies and injury risks.
              </p>
            </div>
            <div className="p-8 rounded-xl border border-border bg-card/50 hover:bg-card/70 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-sport-green/20 flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-sport-green" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Predictive Analytics</h3>
              <p className="text-foreground/70">
                Machine learning models predict potential injuries before they happen, enabling preventive action.
              </p>
            </div>
            <div className="p-8 rounded-xl border border-border bg-card/50 hover:bg-card/70 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-sport-green/20 flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-sport-green" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Personalization</h3>
              <p className="text-foreground/70">
                AI learns your unique athletic profile to provide tailored recommendations and insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="py-20 border-t border-border/50 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Start Training Smarter
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Download ATHECH today and unlock AI-powered injury prediction and prevention for your athletic performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 bg-sport-green text-white rounded-lg font-medium hover:bg-sport-green/90 transition-colors"
            >
              <Smartphone className="mr-2 h-5 w-5" />
              Download on Google Play
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors"
            >
              <Apple className="mr-2 h-5 w-5" />
              Download on App Store
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
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
