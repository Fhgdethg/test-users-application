module.exports = {
	important: true,
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				whiteCol: '#FFF',
				darkGrayCol: '#3C3C3C',
				darkOpacityGrayCol: 'rgba(60, 60, 60, .7)',
				middleGrayCol: '#ABABAB',
				lightGrayCol: '#F4F4F4',
			},
			gridTemplateColumns: {
				userGrid: '40% repeat(5, 1fr)',
				userTabletGrid: '35% repeat(5, 1fr)',
			},
		},
	},
	plugins: [],
}