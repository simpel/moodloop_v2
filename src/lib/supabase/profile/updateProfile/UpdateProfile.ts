import {PostgrestError} from '@supabase/supabase-js';
import {Alert} from 'react-native';
import {supabase} from '../../Supabase';
import type {TUpdateProfile} from './TUpdateProfile';

const updateProfile = async ({session, profile}: TUpdateProfile) => {
	try {
		if (!session?.user) throw new Error('No user on the session!');

		const updates = {
			id: session?.user.id,
			updated_at: new Date(),
			...profile,
		};

		const {error, data} = await supabase.from('profiles').upsert(updates);

		if (error) {
			throw new Error(error.message);
		}

		if (data) return data;
	} catch (error: unknown) {
		if (error instanceof Error) {
			Alert.alert(error.message);
		}
	}
};

export default updateProfile;
