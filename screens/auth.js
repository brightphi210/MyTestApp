import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vgssrxcrciemrcemxedz.supabase.co/rest/v1/'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnc3NyeGNyY2llbXJjZW14ZWR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1MTY2NDIsImV4cCI6MjAxMzA5MjY0Mn0.WEqeM-CdM0kQ1571giEX5LnJa4G8rWPnSoe-xoyGnu0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})