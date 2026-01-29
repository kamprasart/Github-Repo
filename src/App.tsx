import Header from './components/Header'
import Hero from './components/Hero'
import LicenseCard from './components/LicenseCard'
import metadata from './metadata.json'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero
          title={metadata.title}
          description={metadata.description}
        />
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Supported Licenses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metadata.licenses.map((license) => (
              <LicenseCard
                key={license.id}
                name={license.name}
                description={license.description}
                url={license.url}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
