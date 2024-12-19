export interface BandMember {
  id: string;
  name: string;
  position: string;
  instruments: string[];
  musicInfluence: string;
  topSongs: string[];
  subdomain: string;
}

export const bandMembers: BandMember[] = [
  {
    id: "jpj",
    name: "John Paul Jones",
    position: "Bassist, Keyboardist",
    instruments: ["Bass guitar", "Keyboards", "Mandolin", "Guitar"],
    musicInfluence: "Classical music, Jazz, Blues",
    topSongs: [
      "Black Dog",
      "No Quarter",
      "Ramble On",
      "Good Times Bad Times",
      "The Lemon Song",
      "Trampled Under Foot",
      "Kashmir",
      "All My Love",
      "D'yer Mak'er",
      "When the Levee Breaks"
    ],
    subdomain: "jpj"
  },
  {
    id: "plant",
    name: "Robert Plant",
    position: "Lead Vocalist",
    instruments: ["Vocals", "Harmonica"],
    musicInfluence: "Blues, Rock and Roll, World Music",
    topSongs: [
      "Stairway to Heaven",
      "Whole Lotta Love",
      "Kashmir",
      "Black Dog",
      "Immigrant Song",
      "Rock and Roll",
      "Dazed and Confused",
      "Since I've Been Loving You",
      "Babe I'm Gonna Leave You",
      "Going to California"
    ],
    subdomain: "plant"
  },
  {
    id: "page",
    name: "Jimmy Page",
    position: "Lead Guitarist",
    instruments: ["Guitar", "Theremin", "Pedal steel guitar"],
    musicInfluence: "Blues, Folk, Eastern music",
    topSongs: [
      "Stairway to Heaven",
      "Kashmir",
      "Whole Lotta Love",
      "Black Dog",
      "Dazed and Confused",
      "Heartbreaker",
      "Since I've Been Loving You",
      "Achilles Last Stand",
      "The Rain Song",
      "Ten Years Gone"
    ],
    subdomain: "page"
  },
  {
    id: "bonzo",
    name: "John Bonham",
    position: "Drummer",
    instruments: ["Drums", "Percussion"],
    musicInfluence: "Jazz, Funk, Soul",
    topSongs: [
      "When the Levee Breaks",
      "Moby Dick",
      "Good Times Bad Times",
      "Kashmir",
      "Fool in the Rain",
      "Rock and Roll",
      "Achilles Last Stand",
      "The Ocean",
      "Bonzo's Montreux",
      "D'yer Mak'er"
    ],
    subdomain: "bonzo"
  }
];

