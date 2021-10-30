import { API } from "../../../common/constants";
import Http from "../../../config/http";

const Services = {
  verifyMessageOwner: async (messageId) => await Http.GET(`${API}/messages/${messageId}/verify-user`),
  fetchMessages: async (isManage) => {
    if (isManage) return await Http.GET(`${API}/messages/manage`);
    else return await Http.GET(`${API}/messages`);
  },
  fetchMessageById: async (messageId) => await Http.GET(`${API}/messages/${messageId}`),
  createMessage: async (messageData) => await Http.POST(`${API}/messages`, messageData),
  updateMessage: async (id, messageData) => await Http.PATCH(`${API}/messages/${id}`, messageData),
  deleteMessage: async (messageId) => await Http.DELETE(`${API}/messages/${messageId}`),
};

export default Services;
