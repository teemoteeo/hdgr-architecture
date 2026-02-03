import Navigation from "@/components/Navigation";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      
      <main className="pt-32 pb-24 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-mono text-5xl tracking-tight mb-12">
            Contact
          </h1>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <p className="font-mono text-sm opacity-60 mb-2">Email</p>
                <a
                  href="mailto:hendigeryj@gmail.com"
                  className="text-lg hover:opacity-70 transition-opacity"
                >
                  hendigeryj@gmail.com
                </a>
              </div>
              
              <div>
                <p className="font-mono text-sm opacity-60 mb-2">Phone</p>
                <a
                  href="tel:+48570002233"
                  className="text-lg hover:opacity-70 transition-opacity"
                >
                  +48 570 002 233
                </a>
              </div>

              <div>
                <p className="font-mono text-sm opacity-60 mb-2">Services</p>
                <ul className="space-y-2">
                  <li>Architectural projects</li>
                  <li>Visualizations</li>
                  <li>Interior design</li>
                  <li>Landscape</li>
                  <li>Urbanistic</li>
                </ul>
              </div>
            </div>

            <div className="bg-anthracite/5 p-8 font-mono text-sm text-anthracite/60 flex items-center justify-center">
              CONTACT FORM<br />
              (Coming Soon)
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
