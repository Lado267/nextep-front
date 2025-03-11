import { Company } from "../elements/carousel/company_carousel"

  // For desktop, we need to group companies into pairs for the grid layout
export function prepareCompaniesForCarousel(companies: Company[], isMobile: boolean) {
    if (isMobile) {
        // On mobile, each carousel item contains a single company
        return companies.map((company) => [company])
    } else {
        // On desktop, we group companies into pairs for the 2-row grid
        const itemsPerSlide = 2 // Number of items to show vertically
        const result = []

        // Group companies into chunks for the grid
        for (let i = 0; i < companies.length; i += itemsPerSlide) {
        const group = companies.slice(i, i + itemsPerSlide)
        result.push(group)
        }

        return result
    }
}