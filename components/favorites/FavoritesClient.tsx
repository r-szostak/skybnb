"use client"

import { SafeListing, SafeUser } from "@/types"
import Container from "../Container"
import Heading from "../Heading"
import ListingCard from "../listings/ListingCard"

interface FavortiesClientProps {
  listings: SafeListing[]
  currentUser?: SafeUser | null
}

const FavoritesClient: React.FC<FavortiesClientProps> = ({
  listings,
  currentUser,
}) => {
  return (
    <Container>
      <Heading title="Favorites" subtitle="List of places you have favorited" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            data={listing}
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  )
}

export default FavoritesClient
