export class SharkSighting {
    id: string
    sightingDetails: SightingDetails
    sharkDetails: SharkDetails
}

export class SharkDetails {
    type: string
    size: number
    showedAggression: boolean
    // confidence: number
    // pictureLinks: string[]
}

class SightingDetails {
    city: string
    date: string
    time: string
    crowdSize: number
    distanceFromShore: number
    additionalDetails: Text
}