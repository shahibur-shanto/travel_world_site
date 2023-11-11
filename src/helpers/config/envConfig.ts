export const getBaseUrl = (): string | undefined => {
	return process.env.NEXT_PUBLIC_API_BASE_URL || 'https://enjoy-the-world.vercel.app/api/v1';
};
