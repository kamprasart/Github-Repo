interface LicenseCardProps {
  name: string
  description: string
  url: string
}

function LicenseCard({ name, description, url }: LicenseCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-colors">
      <h3 className="text-lg font-semibold mb-3">{name}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
      >
        Learn more &rarr;
      </a>
    </div>
  )
}

export default LicenseCard
