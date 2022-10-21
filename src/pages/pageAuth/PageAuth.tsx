import React from 'react';
import {ScrollView} from 'react-native';
import {Button} from '@rneui/themed';
import {Card} from '@rneui/base';
import {supabase} from '../../lib/supabase/Supabase';

const PageAuth = () => {
	const signInWithGoogle = async () => {
		console.log('teet');

		await supabase.auth
			.signInWithOAuth({
				provider: 'google',
			})
			.then((data) => {
				console.log('data', data);
			})
			.catch((error) => {
				console.log('error', error);
			});
	};

	return (
		<ScrollView>
			<Card>
				<Button title="Login with Google" onPress={signInWithGoogle} />
			</Card>
		</ScrollView>
	);
};

export default PageAuth;
