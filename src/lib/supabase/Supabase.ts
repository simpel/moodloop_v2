import AsyncStorage from '@react-native-async-storage/async-storage';
import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://rarypeqipnxnbmtxzkkt.supabase.co';
const supabaseAnonKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhcnlwZXFpcG54bmJtdHh6a2t0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYyOTcyNzYsImV4cCI6MTk4MTg3MzI3Nn0.8VcA5WmcO8qcZT9Gqa553lksVgUf4wS6dIoZ93U82e0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
	auth: {
		storage: AsyncStorage,
		autoRefreshToken: true,
		persistSession: true,
		detectSessionInUrl: false,
	},
});
