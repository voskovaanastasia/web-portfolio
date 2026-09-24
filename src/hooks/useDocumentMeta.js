import { useEffect } from 'react';

const SITE_NAME = 'Anastasiia Voskova';

function upsertMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

const JSON_LD_ID = 'route-jsonld';

function upsertJsonLd(data) {
  let el = document.getElementById(JSON_LD_ID);
  if (!data) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = JSON_LD_ID;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

const DEFAULT_IMAGE = '/og-image.png';

/**
 * Keeps document.title, meta description, canonical and OG/Twitter tags in
 * sync with the current route. `title` is the full, final <title> string
 * (this hook does not append the site name — callers control the exact
 * format, since it differs per route: "Name — Role" on the home page vs.
 * "Case — Case Study | Name" on case studies). `path` is the route's
 * pathname (e.g. "/projects"); `image` is an absolute-from-root path to a
 * 1200x630 share image (e.g. "/og/farsafe.png") and falls back to the
 * default card when omitted. `jsonLd` is an optional structured-data object
 * (e.g. a CreativeWork) injected as this route's <script type="ld+json">
 * and removed again on routes that don't pass one.
 */
export default function useDocumentMeta({ title, description, path, image, jsonLd }) {
  useEffect(() => {
    document.title = title ?? SITE_NAME;

    if (description) {
      upsertMeta('name', 'description', description);
      upsertMeta('property', 'og:description', description);
      upsertMeta('name', 'twitter:description', description);
    }

    upsertMeta('property', 'og:title', document.title);
    upsertMeta('name', 'twitter:title', document.title);

    const url = new URL(path ?? window.location.pathname, window.location.origin).href;
    upsertLink('canonical', url);
    upsertMeta('property', 'og:url', url);

    const imageUrl = new URL(image ?? DEFAULT_IMAGE, window.location.origin).href;
    upsertMeta('property', 'og:image', imageUrl);
    upsertMeta('property', 'og:image:width', '1200');
    upsertMeta('property', 'og:image:height', '630');
    upsertMeta('name', 'twitter:image', imageUrl);

    upsertJsonLd(jsonLd);
  }, [title, description, path, image, jsonLd]);
}
