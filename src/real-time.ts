import { RealtimeClient } from '@supabase/realtime-js'

/**
 * Get environments variables.
 */
const supabaseKey = process.env.SUPABASE_KEY || ''
const realtimeURL = process.env.SUPABASE_REALTIME || ''

/**
 * Connect real time.
 */
const client = new RealtimeClient(realtimeURL, {
  params: { apikey: supabaseKey }
})
client.connect()

/**
 * Client status.
 */
client.onOpen(() => console.log('Socket open.'))
client.onClose(() => console.log('Socket closed.'))
client.onError((e: Error) => console.log('Socket error', e.message))

/**
 * Subscribe in a channel.
 */
const databaseChanges = client.channel('realtime:public:devs')
databaseChanges.on('*', console.log)
databaseChanges.on('INSERT', console.log)
databaseChanges.on('UPDATE', console.log)
databaseChanges.on('DELETE', console.log)
databaseChanges.subscribe()
