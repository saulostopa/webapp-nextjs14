type AttachType = {
  icon?: string;
  file?: string;
  fileSize?: string;
};

type MessageType = {
  createdAt?: any;
  msg: string;
  senderId: number | string;
  type: string;
  attachment: AttachType[];
  id: string;
};

export interface ChatsType {
  id: number | string;
  name: string;
  status: string;
  thumb: string;
  recent: boolean;
  excerpt: string;
  chatHistory?: any[];
  messages: MessageType[];
}
