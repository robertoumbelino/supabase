import 'dotenv/config'
import { createClient } from '@supabase/supabase-js'

/**
 * Get environments variables.
 */
const supabaseUrl = process.env.SUPABASE_URL || ''
const supabaseKey = process.env.SUPABASE_KEY || ''

/**
 * Run application.
 */
const run = async () => {
  /**
   * Create client.
   */
  const supabase = createClient(supabaseUrl, supabaseKey)

  /**
   * Select from database.
   */
  const { data } = await supabase.from('devs').select('*')

  console.log(data)
}

run()
