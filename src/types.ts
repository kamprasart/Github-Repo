export interface Track {
  id: string
  title: string
  artist: string
  duration: string
  license: string
}

export interface License {
  id: string
  name: string
  description: string
  url: string
}

export interface AudioArchiveMetadata {
  title: string
  description: string
  totalTracks: number
  licenses: License[]
}
