import type {Session} from '@supabase/supabase-js';
import type {TProfile} from '../TProfile';

export type TUpdateProfile = {
	session: Session;
	profile: TProfile;
};
