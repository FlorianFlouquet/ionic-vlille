import axios from "axios"

class Service {
    findAllMarkers() {
        return axios.get("https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=vlille-realtime&q=&rows=200&facet=libelle&facet=nom&facet=commune&facet=etat&facet=type&facet=etatconnexion");
    }
}

export const service = Object.freeze(new Service());