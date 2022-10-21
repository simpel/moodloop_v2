import type {Session} from '@supabase/supabase-js';
import {Alert} from 'react-native';
import {supabase} from '../../Supabase';
import type {TProfile} from '../TProfile';

const getProfile = async (session: Session) => {
	if (!session?.user) throw new Error('No user on the session!');
	try {
		const {error, data} = await supabase
			.from('profiles')
			.select(`username, website, avatar_url`)
			.eq('id', session?.user.id)
			.single();

		if (error) {
			throw new Error(error.message);
		}

		if (data) return data as TProfile;
	} catch (error: unknown) {
		if (error instanceof Error) {
			Alert.alert(error.message);
		}
	}
};

export default getProfile;
