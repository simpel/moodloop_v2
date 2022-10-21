// eslint-disable-next-line import/no-unassigned-import
import 'react-native-url-polyfill/auto';
import {useState, useEffect} from 'react';
import {View} from 'react-native';
import type {Session} from '@supabase/supabase-js';
import PageAccount from './src/pages/pageAccount/PageAccount';
import PageAuth from './src/pages/pageAuth/PageAuth';
import {supabase} from './src/lib/supabase/Supabase';

const App = () => {
	const [session, setSession] = useState<Session | undefined>(undefined);

	useEffect(() => {
		void supabase.auth.getSession().then((data) => {
			setSession(data.data.session ? data.data.session : undefined);
		});

		supabase.auth.onAuthStateChange((event, session) => {
			setSession(session ? session : undefined);
		});
	}, []);

	return (
		<View>
			{session?.user ? <PageAccount session={session} /> : <PageAuth />}
		</View>
	);
};

export default App;
