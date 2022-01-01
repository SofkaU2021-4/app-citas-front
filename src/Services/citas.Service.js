import apiCita from "../utils/BaseUrl";

class CitasService{
  getAllCitas=()=>apiCita().get("citasReactivas")
}

export default new CitasService();
