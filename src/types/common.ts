export interface IMeta {
	limit: number;
	page: number;
	total: number;
}

export type ResponseSuccessType = {
	data: any;
	meta?: IMeta;
};

export type IGenericErrorResponse = {
	statusCode: number;
	message: string;
	errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
	path: string | number;
	message: string;
};

export type IDestination = {
	id: string;
	country: string;
	description: string;
	location: string;
	category: string;
	transport: string;
	cost: string;
	image: string;
};

export interface ApiResponse {
	destination: {
		statusCode: number;
		success: boolean;
		message: string;
		meta: {
			page: number;
			limit: number;
			total: number;
			totalPage: number;
		};
		data: IDestination[];
	};
	meta: any;
	data: IDestination[];
}
