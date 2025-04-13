export interface SiteConfig {
	author: string;
	date: {
		locale: string | string[] | undefined;
		options: Intl.DateTimeFormatOptions;
	};
	description: string;
	lang: string;
	ogLocale: string;
	title: string;
}

export interface PaginationLink {
	srLabel?: string;
	text?: string;
	url: string;
}

export interface SiteMeta {
	articleDate?: string | undefined;
	description?: string;
	ogImage?: string | undefined;
	title: string;
}



export type AdmonitionType = "tip" | "note" | "important" | "caution" | "warning";

export interface Badge {
  variant?:
    | "default"
    | "accent"
    | "accent-base"
    | "accent-one"
    | "accent-two"
    | "muted"
    | "outline";
  showHash?: boolean;
  title: string;
}