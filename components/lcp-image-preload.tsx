/**
 * Inicia o download da imagem LCP o mais cedo possível (além do `priority` no Image).
 * Usar com o mesmo `href` público que o `next/image` referencia em `/images/...`.
 */
export function LcpImagePreload({ href }: { href: string }) {
  return (
    <link
      rel="preload"
      href={href}
      as="image"
      type="image/webp"
      fetchPriority="high"
    />
  )
}
