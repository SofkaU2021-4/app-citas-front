import apiCita from "../utils/BaseUrl";

class PadecimientoService{
  getAllPadecimiento=()=>apiCita().get("padecimientos")
}

export default new PadecimientoService();