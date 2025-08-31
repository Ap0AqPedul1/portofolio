interface SectionWrapperProps {
  sectionName: string;
  className?: string;
  children: React.ReactNode;
}

export default function SectionWrapper({ sectionName, className = '', children }: SectionWrapperProps) {
  return (
    <section 
      id={sectionName}
      data-section={sectionName}
      className={className}
    >
      {children}
    </section>
  );
}
