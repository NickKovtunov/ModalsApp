// vue.config.js
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '/',
    outputDir: 'docs',
	pages:{
		'index':{
			entry: './src/pages/Modal/main.js',
			template: 'public/index.html',
			title: 'Modal',
			chunks:['chunk-vendors','chunk-common', 'index']
		},
		'reg':{
			entry: './src/pages/Reg/main.js',
			template: 'public/index.html',
			title: 'Reg',
			chunks:['chunk-vendors','chunk-common', 'reg']
		}
	}
}