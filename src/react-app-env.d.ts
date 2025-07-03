/// <reference types="react-scripts" />
interface ImportMetaEnv {
	readonly REACT_APP_STRIPE_PUBLISHABLE_KEY: string;
	// add other env variables here as needed
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
