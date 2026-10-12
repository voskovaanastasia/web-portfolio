# From Research to Production: Designing and Shipping My Portfolio with Claude Code

Oct 4, 2026 · @Roman

*A case study on turning my portfolio into a real product: researched, designed in Figma, built with Claude Code, and measured, with me making the decisions, reviewing the output and fixing what the AI got wrong.*

## At a glance

|  |  |
| --- | --- |
| **Role** | Product designer and product owner: researched other portfolios and spoke with a recruiter, designed the components and design tokens in Figma, directed Claude Code to build them and compose the pages, and iterated on feedback from a QA tester and a front-end developer who reviewed the live site |
| **Build time** | 10 weeks: first commit July 21, 2026 → live on my own domain September 29 |
| **Stack** | Figma, React, Vite, Tailwind CSS, GSAP, Vercel |
| **Built with** | Claude Code: 91 commits, 86 of them co-authored with it, working from Figma designs through MCP |
| **Outcome** | 11 pages · 9 case studies · mobile Lighthouse performance **68 → 95** (LCP 5.2 s → 2.5 s, FCP 4.4 s → 2.3 s) · Accessibility, Best Practices and SEO at 100 |
| **Links** | [Live site](https://www.anastasiiavoskova.com) · [GitHub](https://github.com/voskovaanastasia/web-portfolio) |

*Lighthouse figures: PageSpeed Insights, mobile, October 4, 2026. Performance varied between 88 and 95 across runs.*

**The problem.** I needed a portfolio that shows how I work from research to implementation, not another template that looks like everyone else's.

**The approach.** I started by studying other designers' portfolios and talking to a recruiter about what they look for. Then I designed the building blocks in Figma, and Claude Code turned them into code and assembled the pages from them. Whenever a page needed something I hadn't designed, I designed that component separately and added it to the project. I reviewed each result in the browser, and after launch a QA tester and a front-end developer reviewed the live site. I fixed what they found, alongside what I caught myself: responsive behaviour, performance, accessibility, the design system and copy.

**The result.** A live site with nine case studies, a design system built from Figma components, and a repeatable way of directing AI without giving up design judgement. It also includes the mistakes I caught along the way, which are the most useful part of this story.

## Context and goals

**Why I needed a new site.** My portfolio lived on Behance, and it was getting in my way. Formatting each case study took a lot of time, and the platform made it hard to show what I care about most: large user flows and information architecture. Once I started looking for a new role, I wanted one place that shows my full range: my experience, my case studies, my tech stack and my computer science education.

**Why I built it myself.** I studied computer science, so code isn't foreign territory for me, and I had already been testing ideas and prototypes with Claude Code. Building the site myself was a natural way to show how I work from design through to implementation. There were no real constraints on time or budget. I rewrote most of the copy with Claude's help, then reviewed and proofread it.

**Who it's for.** The main audience is recruiters and potential clients. I'm looking for full-time roles and I've worked in product companies, outsourcing and startups, so the site needed to speak to all three. I expected them to want to know three things within the first 30 seconds: is this experience relevant, what does the portfolio show, and what tools does this person work with.

**Positioning.** The line I built the site around is: *I make complex, data-dense products feel simple.*

**Goals.** I didn't set numeric targets up front. The goals were simple: raise my visibility with recruiters and get invited to interviews.

## Role and who did what

I worked as the designer and product owner. Claude had three jobs, and three groups of people reviewed along the way.

| Who | What they did |
| --- | --- |
| **Me** | Positioning and information architecture. Research: other designers' portfolios and a conversation with a recruiter. The components and design-system variables in Figma, and any missing component designed separately when a page needed one. Markdown specs for the sections. Most of the copy, rewritten by me with AI's help. Every decision about what the page says and leaves out. A read of every diff before it was committed. |
| **Claude Code** | Built the components in code, then composed the pages from them, reading my Figma work through the Figma MCP. Handled repetitive work: responsive images, share-card generation, page metadata, lazy-loaded routes. |
| **Claude (chat)** | Reviewer and prompt partner. Wrote prioritised audits of the live pages, helped me turn each finding into a scoped prompt, and flagged inconsistencies in copy. |
| **A recruiter, a QA tester, a front-end developer** | The recruiter shaped what the site should show. The tester and the developer reviewed the live site after launch. |

**How the workflow ran.** Design and code ran in parallel, and both were component-led. I designed components in Figma; Claude Code built them and composed the pages I needed from those pieces. I did not design every page up front. When a page called for something the component set didn't cover, I designed that component separately and added it to the project.

**What stayed with me.** Anything that needed judgement: what the page leads with, how a case study ends, which tools represent a pillar, and whether a result was good enough to ship. I treated everything Claude produced as a draft. Audit findings were evidence to check against the code and the browser, not instructions to follow, and nothing reached a commit without my reading the diff.

**Where that wasn't enough.** Reading diffs catches what a change does, not what it leaves out. The design tokens I'd defined in Figma only reached the code after launch, and a bundling "fix" I had accepted without measuring it slowed down every page. Both are covered below, because they show where my review needed a different kind of check.

## Research

**Before I opened Figma, I looked at what recruiters actually meet.** I reviewed around 40 designer portfolios and had a short consultation with a technical recruiter who hires for many different companies.

**What repeated across the portfolios.** I ran 21 of them through the same checklist, with Claude reading each page; two would not load properly, so the counts below use the 19 I could read. The home page often carried CV content: 13 of 19 offered a resume link right on it, and 9 of 19 listed roles or skills there. The typical home page showed four case studies, and the typical top menu had four items.

&#91;embedded content: Checklist on portfolio home pages, page text only · 19 of 21 sites readable · October 4, 2026\]

&#91;embedded content: Checklist on portfolio home pages, page text only · 18 of 21 sites readable; "Coming soon" cards counted · October 4, 2026\]

**What the recruiter told me.** The main point was not to overload the page, and to make navigation easy. That confirmed what I was already doing: the section menu and the mobile menu were my own idea, and the conversation told me I was on the right track.

**How it shaped the site.** I kept the home page as my CV, with a *Download CV* button in the first screen, and added a featured latest case study with a path on to the others. My first audit flagged that Experience dominated the page. I chose to keep it, because recruiters expect a CV-like home page, and instead balanced it with the featured case and clear navigation. The full set of case studies lives on its own Portfolio page in the top menu.

**What the sample cannot say.** The checklist was run on page text, so sites that render heavily in JavaScript were read only in part, and "Coming soon" cards count as cases. Treat these as a snapshot of 19 portfolios, not a measure of the market.

**What they were built on.** Of the 21 portfolios, 9 used a no-code builder (8 Framer, 1 Wix). Five were confirmed hand-coded, and for 7 the page markup gave no sign either way.

&#91;embedded content: Page markup of 21 portfolios (generator tags, asset domains) · October 4, 2026\]
