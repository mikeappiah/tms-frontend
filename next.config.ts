import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination:
					'https://9buy272svi.execute-api.eu-central-1.amazonaws.com/test/:path*'
			}
		];
	}
};

export default nextConfig;
