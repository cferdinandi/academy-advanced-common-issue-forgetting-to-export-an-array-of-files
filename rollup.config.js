// The files to bundle
let files = ['index.js', 'treasure.js', 'dice.js'];

// [!] ReferenceError: file is not defined
export default {
	input: `src/${file}`,
	output: {
		file: file,
		format: 'iife'
	}
};

// [!] Error: 'import' and 'export' may only appear at the top level
// export default files.map(function (format) {
// 	export default {
// 		input: `src/${file}`,
// 		output: {
// 			file: file,
// 			format: 'iife'
// 		}
// 	};
// });

// [!] Error: Unexpected token
// export default files.map(function (format) {
// 	{
// 		input: `src/${file}`,
// 		output: {
// 			file: file,
// 			format: 'iife'
// 		}
// 	};
// });