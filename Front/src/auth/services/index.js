import { API } from "../../common/constants";
import Http from "../../config/http";
import authService from "./auth-service";

const Services = {
  login: async (credentials) => await Http.POST(`${API}/users/auth`, credentials, { headers: {} }).then((res) => authService.saveToken(res.data)),
  register: async (credentials) => await Http.POST(`${API}/users/register`, credentials, { headers: {} }),
};

export default Services;
