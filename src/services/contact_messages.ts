import pb from '@/lib/pocketbase/client'

export interface ContactMessageData {
  name: string
  email: string
  message: string
}

export const createContactMessage = (data: ContactMessageData) =>
  pb.collection('contact_messages').create(data)
