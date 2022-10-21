import React, {useEffect, useState} from 'react';
import {ScrollView, Text} from 'react-native';

import getProfile from '../../lib/supabase/profile/getProfile/GetProfile';
import type {TProfile} from '../../lib/supabase/profile/TProfile';
import type {IPageAccount} from './IPageAccount';

const PageAccount = ({session}: IPageAccount) => {
	const [profile, setProfile] = useState<TProfile>();

	useEffect(() => {
		void getProfile(session).then((profile) => {
			console.log(profile);
			if (profile) setProfile(profile);
		});
	}, [session]);

	return (
		<ScrollView>
			<Text>USERNAME: {profile?.username}</Text>
		</ScrollView>
	);
};

export default PageAccount;
