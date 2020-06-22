export default class SharkSighting {
    id: string
    // createdBy: string
    // createdOn: date
    sightingDetails: SightingDetails
    sharkDetails: SharkDetails
}

class SharkDetails {
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