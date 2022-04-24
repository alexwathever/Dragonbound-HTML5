import { GetUsers } from "@/domain/usecases";

export class DbGetUsers implements GetUsers {
	get: (params: GetUsers.Params) => Promise<GetUsers.Result> = async (
		params: GetUsers.Params
	) => {
		return new Promise((resolve) => {
			resolve({
				resources: [],
				pagination: {
					offset: params.offset,
					count: 0,
					totalResults: 0,
				},
			});
		});
	};
}
