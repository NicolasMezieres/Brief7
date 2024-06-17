import axios from "axios";
import { toast } from "react-toastify";

export async function getCity(nom: string) {
  const url = `https://geo.api.gouv.fr/communes?nom=${nom}&limit=5`;
  return axios
    .get(url)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      toast.error("Erreur Serveur api gouv", { autoClose: 1000 });
    });
}
