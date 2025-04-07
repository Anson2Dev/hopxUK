

## Tech Stack
- Astro, ultra fast static site
- Tailwind CSS
- Wrangler deploy
- Cloudflare
- Fully responsive
- Light and Dark mode
- Astro Icon
- Shiki code highlighting
- Satori for auto generating OG images for blog posts

## Development
```bash
npm run dev
```
## Preview
```bash
npm run preview
```



## Deploy
```bash
npm run build
npx wrangler pages deploy dist
```
## Content Structure
```bash
/
├── content
│   ├── post // blog posts
│   │   ├── first-post.md
│   │   └── second-post.md
│   ├── note // Notes
│   │   ├── first-note.md
│   │   └── second-note.md
│   └── series // Docs
│       └── citrus-docs.md
├── pages
│   ├── about.astro // About page
│   ├── 404.astro // 404 page
│   ├── index.astro // Home page
│   └── some_pages.astro
├── components
│   ├── Header.astro
│   └── Footer.astro
└── continue...
```
### Content Formatter
pages->about.astro(some_pages.astro)
```javascript

---
import PageLayout from "@/layouts/Base.astro";

const meta = {
	description: "Some description",
	title: "Page Title",
};
---

<PageLayout meta={meta}>

	<h1 class="title mb-6">Page Title</h1>
	<div class="prose prose-citrus max-w-none">
		<p>
			some content with html tags
		</p>
		<p>Here are my some of my awesome built in features:</p>
		<ul class="list-inside list-disc" role="list">
			<li>I'm ultra fast as I'm a static site</li>
			<li>I'm fully responsive</li>
			<li>I come with a light and dark mode</li>
		</ul>
		<p>
			Some text ...
		</p>
	</div>

</PageLayout>
```

## Todo
- [x] sth to do
- [ ] sth to do