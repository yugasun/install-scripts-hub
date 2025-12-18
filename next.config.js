/** @type {import('next').NextConfig} */
const nextConfig = {
	// Static export for GitHub Pages
	output: 'export',
	// Disable Image Optimization for static export
	images: {
		unoptimized: true,
	},
	// Base path if needed (check NEXT_PUBLIC_BASE_PATH env var)
	basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

export default nextConfig;
