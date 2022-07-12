import { showNotification } from '@mantine/notifications'

import { supabase } from '../supabaseClient'
import { Comment, CommentPayload } from '@/types'

export const sendNewComment = async (
  comment: CommentPayload
): Promise<{
  addedComment: Comment | null
}> => {
  try {
    const { data, error } = await supabase
      .from<CommentPayload>('comments')
      .insert([comment])

    if (error) throw error

    const [addedComment] = data

    return { addedComment } as { addedComment: Comment | null }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    showNotification({
      title: 'Something went wrong',
      message: error.error_description || error.message,
      color: 'red',
    })
    return { addedComment: null }
  }
}
