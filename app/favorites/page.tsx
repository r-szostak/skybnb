import getCurrentUser from "@/actions/getCurrentUser"
import getFavoriteListings from "@/actions/getFavoriteListings"
import EmptyState from "@/components/EmptyState"
import FavoritesClient from "@/components/favorites/FavoritesClient"

const FavoritePage = async () => {
  const listings = await getFavoriteListings()
  const currentUser = await getCurrentUser()
  if (listings.length === 0) {
    return (
      <EmptyState
        title="No favorites found"
        subtitle="Look like you have no favorites."
      />
    )
  }
  return (
    <>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </>
  )
}

export default FavoritePage
