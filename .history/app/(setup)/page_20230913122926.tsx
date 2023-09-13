import { db } from "@/lib/db";
import { initialProfile } from "@/lib/inital-profile";

const SetupPage = async () => {
	const profile = await initialProfile();

	const server = await db.server.findFirst({
		where: {
			members: {
				some: {
					profileId: profile.id,
				},
			},
		},
	});

	return <div>Create a Server</div>;
};

export default SetupPage;
