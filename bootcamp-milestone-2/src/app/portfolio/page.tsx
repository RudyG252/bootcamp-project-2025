import PortfolioSection from "@/components/portfolioSection";
import sections from "@/static/portfolioData";
import style from './page.module.css'

export default function Portfolio() {
  return (
    <div className={style.portfolio_container}>
      {sections.map((section) => (
        <PortfolioSection
          key={section.key}
          title={section.title}
          description={section.description}
          image={section.image}
          imageAlt={section.imageAlt}
          slug={section.slug}
        />
      ))}
    </div>
  );
}
