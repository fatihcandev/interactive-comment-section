import { showNotification } from '@mantine/notifications'
import { supabase } from '../supabaseClient'
import { Comment } from '@/types'

export async function getComments(): Promise<Comment[]> {
  try {
    const { data: comments, error } = await supabase
      .from<Comment>('comments')
      .select('*')

    if (error) throw error

    return comments
  } catch (error: any) {
    showNotification({
      title: 'Something went wrong',
      message: error.error_description || error.message,
      color: 'red',
    })
    return []
  }
}
