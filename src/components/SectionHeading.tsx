const SectionHeading = ({
  title,
  subtitle,
  centered = true,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) => (
  <div className={centered ? "text-center" : ""}>
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
    {subtitle && <p className="mt-3 text-muted-foreground max-w-2xl font-body text-lg leading-relaxed mx-auto">{subtitle}</p>}
    <div className={`w-16 h-1 rounded-full gradient-primary mt-4 ${centered ? "mx-auto" : ""}`} />
  </div>
);

export default SectionHeading;
