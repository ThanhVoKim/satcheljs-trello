declare module '*.html' {
	const rawHtmlFile: string;
	export = rawHtmlFile;
}

declare module '*.bmp' {
	const src: string;
	export default src;
}

declare module '*.gif' {
	const src: string;
	export default src;
}

declare module '*.jpg' {
	const src: string;
	export default src;
}

declare module '*.jpeg' {
	const src: string;
	export default src;
}

declare module '*.png' {
	const src: string;
	export default src;
}

declare module '*.webp' {
	const src: string;
	export default src;
}

declare module '*.svg' {
	import React = require('react');
	export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	const src: string;
	export default src;
}

declare module '@thanh/utils-module' {
	import UtilsModule = require('@root/utils-module/src/thanh-utils-module');
	export const constants: typeof UtilsModule.constants;
	export const components: typeof UtilsModule.components;
}
