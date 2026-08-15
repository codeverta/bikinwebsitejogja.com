import React from "react";
import Image from "next/image";

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  const blocks = parseMarkdownBlocks(content);

  return (
    <div className="blog-markdown-body space-y-6 text-stone-800">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "image":
            return (
              <figure key={idx} className="my-8 overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 shadow-md">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-100">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
                {(block.title || block.alt) && (
                  <figcaption className="border-t border-stone-200/70 bg-white px-5 py-3 text-center text-xs font-semibold text-stone-600">
                    📷 {block.title || block.alt}
                  </figcaption>
                )}
              </figure>
            );
          case "h2":
            return (
              <h2 key={idx} className="mt-12 mb-4 text-2xl font-bold leading-tight text-stone-950 md:text-3xl">
                {renderInlineContent(block.text)}
              </h2>
            );
          case "h3":
            return (
              <h3 key={idx} className="mt-8 mb-3 text-xl font-bold leading-snug text-stone-900 md:text-2xl">
                {renderInlineContent(block.text)}
              </h3>
            );
          case "list":
            return (
              <ul key={idx} className="my-6 grid gap-3 rounded-xl border border-stone-200 bg-stone-50/80 p-5 shadow-inner">
                {block.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3 text-base text-stone-700 md:text-lg">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                    <div>{renderInlineContent(item)}</div>
                  </li>
                ))}
              </ul>
            );
          case "blockquote":
            return (
              <blockquote key={idx} className="my-6 border-l-4 border-emerald-600 bg-emerald-50/60 p-4 pl-5 font-medium italic text-emerald-950 rounded-r-xl">
                {renderInlineContent(block.text)}
              </blockquote>
            );
          case "paragraph":
          default:
            return (
              <p key={idx} className="text-base leading-relaxed text-stone-700 md:text-lg md:leading-8">
                {renderInlineContent(block.text)}
              </p>
            );
        }
      })}
    </div>
  );
}

// Block parser
type Block =
  | { type: "image"; src: string; alt: string; title?: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "blockquote"; text: string }
  | { type: "paragraph"; text: string };

function parseMarkdownBlocks(content: string): Block[] {
  const lines = content.split("\n");
  const blocks: Block[] = [];
  let currentList: string[] | null = null;

  const flushList = () => {
    if (currentList && currentList.length > 0) {
      blocks.push({ type: "list", items: currentList });
      currentList = null;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    if (!line) {
      flushList();
      continue;
    }

    // Image match: ![alt](src "title") or ![alt](src)
    const imageMatch = line.match(/^!\[(.*?)\]\((.*?)(?:\s+"(.*?)")?\)$/);
    if (imageMatch) {
      flushList();
      blocks.push({
        type: "image",
        alt: imageMatch[1] || "",
        src: imageMatch[2] || "",
        title: imageMatch[3] || undefined,
      });
      continue;
    }

    // Heading 2: ## Text
    if (line.startsWith("## ")) {
      flushList();
      blocks.push({ type: "h2", text: line.replace(/^##\s+/, "") });
      continue;
    }

    // Heading 3: ### Text
    if (line.startsWith("### ")) {
      flushList();
      blocks.push({ type: "h3", text: line.replace(/^###\s+/, "") });
      continue;
    }

    // Blockquote: > Text
    if (line.startsWith("> ")) {
      flushList();
      blocks.push({ type: "blockquote", text: line.replace(/^>\s+/, "") });
      continue;
    }

    // Unordered List: - Text or * Text
    const listMatch = line.match(/^[-*]\s+(.*)/);
    if (listMatch) {
      if (!currentList) currentList = [];
      currentList.push(listMatch[1]);
      continue;
    }

    // Normal paragraph
    flushList();
    blocks.push({ type: "paragraph", text: line });
  }

  flushList();
  return blocks;
}

// Inline renderer (supports **bold**, [link](url))
function renderInlineContent(text: string): React.ReactNode {
  const regex = /(\*\*.*?\*\*|\[.*?\]\(.*?\))/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index} className="font-bold text-stone-900">{part.slice(2, -2)}</strong>;
    }
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      return (
        <a key={index} href={linkMatch[2]} className="font-semibold text-emerald-700 underline hover:text-emerald-900">
          {linkMatch[1]}
        </a>
      );
    }
    return part;
  });
}
