import { getArticleBySlug, getAllArticles } from '@/lib/sanity.queries'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import NewsletterForm from '@/components/NewsletterForm'

export async function generateStaticParams() {
  const articles = await getAllArticles().catch(() => [])
  return articles.map((a: any) => ({ slug: a.slug?.current || a.slug }))
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug).catch(() => null)
  if (!article) notFound()

  return (
    <>
      {/* Hero */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#C6002B] font-bold text-base mb-8 hover:gap-3 transition-all">
            <ArrowLeft size={18} /> Volver al Blog
          </Link>
          <div className="badge mb-5">{article.category}</div>
          <h1 className="font-['Inter'] font-black text-5xl lg:text-6xl text-[#1A1A1A] leading-tight mb-6">
            {article.title}
          </h1>
          <div className="flex items-center gap-6 text-base text-gray-400 font-semibold mb-10">
            {article.publishedAt && (
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {new Date(article.publishedAt).toLocaleDateString('es-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            )}
            {article.readTime && (
              <span className="flex items-center gap-2">
                <Clock size={16} /> {article.readTime} lectura
              </span>
            )}
          </div>
          {article.coverImage && (
            <div className="rounded-3xl overflow-hidden mb-12">
              <img src={article.coverImage} alt={article.title} className="w-full h-[480px] object-cover" />
            </div>
          )}
        </div>
      </section>

      {/* Article body */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-headings:font-black prose-headings:font-['Inter'] prose-a:text-[#C6002B] max-w-none text-lg leading-relaxed text-gray-700">
            {article.body && <PortableText value={article.body} />}
          </div>

          <div className="mt-16 pt-10 border-t border-gray-100">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#C6002B] font-bold text-lg hover:gap-3 transition-all">
              <ArrowLeft size={20} /> Todos los artículos
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#C6002B]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="font-['Inter'] font-black text-5xl text-white mb-3">El Unico</div>
          <p className="text-white/80 text-xl mb-8">Suscríbete al newsletter latino de Jacksonville. Gratis.</p>
          <NewsletterForm variant="dark" />
        </div>
      </section>
    </>
  )
}
