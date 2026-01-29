interface HeroProps {
  title: string
  description: string
}

function Hero({ title, description }: HeroProps) {
  return (
    <section className="bg-gradient-to-b from-gray-800 to-gray-900 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">{title}</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  )
}

export default Hero
